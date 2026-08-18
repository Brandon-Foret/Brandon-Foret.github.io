/*============================================================
=            Rendering and Physics Setup Code            =
====================================================*/

$(function () {
  canvas = document.getElementById("gameCanvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(gameLoop, 1000 / frameRate);
      // we want to block arrow keys and space from scrolling the page
      window.addEventListener("keydown", function (e) {
        const keysToBlock = [
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          " ",
          "w",
          "a",
          "s",
          "d",
          "W",
          "A",
          "S",
          "D",
        ];

        if (keysToBlock.includes(e.key)) {
          e.preventDefault();
        }
      });
      generateLevel();
    }
  }

  registerSetup(setup);

  function render() {
    // draw all scenery before drawing Hallebot
    drawBackground();

    drawScenery();

    drawInteractables();

    drawProjectiles();

    animate(); //this changes halle's picture to the next frame so it looks animated.
    drawRobot(); //this actually displays the image of the robot.

    drawHUD();
  }

  function update() {
    // Update player position and physics
    moveScenery(); // Move background scenery
    updateAllObjects(); // Update all game objects (enemies, obstacles, powerups, etc.)
    updateProjectiles(); // Move projectiles
    handleProjectileCollisions(); // Check for projectile collisions with enemies
    moveHallebot(); // Handles jumping and gravity
    handleHallebotGenericCollisions(); // Check for player collisions with interactables
    handleHallebotPlatformCollisions(); // Check for player collisions with platforms
    handleHallebotGoalCollision(); // Check for player reaching the goal
    cleanupGameObjects(); // Remove any objects or projectiles marked for deletion
    keyboardControlActions(); // checks key presses and makes the player jump or shoot
  }

  function gameLoop() {
    // do not loop if dead or won
    if (player.deadAndDeathAnimationDone) {
      showGameOver();
      return;
    }
    if (player.winConditionMet) {
      showWinScreen();
      return;
    }

    update();
    render();
  }
  /*=====  End of Rendering and Physics Setup Code  ======*/
});

/*============================================================
=            Game Initialization Code            =
====================================================*/
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "json";
  xhr.onload = function () {
    var status = xhr.status;
    if (status === 200) {
      callback(null, xhr.response);
      setupGame();
    } else {
      callback(status, xhr.response);
    }
  };
  xhr.send();
}

function registerSetup(setup) {
  setupGame = setup;
}

function JsonFunction(status, response) {
  animationDetails = response;
}

function loadJson() {
  getJSON("halle.json", JsonFunction); //runs this before the setup because of timing things
}

/*============================================================
=            Update Helper Functions            =
====================================================*/

function createProjectile() {
  const projectile = {
    x: player.x + player.width - projectileBaseSize,
    y: player.y + player.height / 2 - projectileBaseSize / 2 - 1,
    width: projectileBaseSize,
    height: projectileBaseSize,
  };
  // decide flicker direction based on base size and min/max sizes
  if (projectileBaseSize <= projectileMinSize) {
    projectile.flickerDirection = 1;
  } else if (projectileBaseSize >= projectileMaxSize) {
    projectile.flickerDirection = -1;
  } else {
    projectile.flickerDirection = 1; // default to increasing
  }
  projectiles.push(projectile);
}

function updateProjectiles() {
  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    projectile.x += projectileSpeed;
    // Mark projectile for deletion if it goes off screen
    if (projectile.x > canvas.width) {
      projectile.toRemove = true;
    }
  }
}

function handleProjectileObjectCollision(projectileIndex, gameObjectIndex) {
  // Mark to remove the projectile and possibly the object it hit
  projectiles[projectileIndex].toRemove = true;

  gameObjects[gameObjectIndex].hp -= projectileDamage;
  if (gameObjects[gameObjectIndex].hp === 0) {
    gameObjects[gameObjectIndex].toRemove = true;
    score += gameObjects[gameObjectIndex].projectileScoreChange;
    health += gameObjects[gameObjectIndex].projectileHealthChange;
  }
}

function isCollidingWithProjectile(gameObject, projectile) {
  // collisions are complicated because we draw game objects from the bottom up and the projectiles from the center
  return (
    projectile.x - projectile.width / 2 < gameObject.x + gameObject.hitWidth &&
    projectile.x + projectile.width / 2 > gameObject.x &&
    projectile.y - projectile.height / 2 < gameObject.y &&
    projectile.y + projectile.height / 2 >
      gameObject.y - gameObject.hitHeight &&
    gameObject.hp > 0
  );
}

function handleHallebotGenericCollision(gameObjectIndex) {
  const gameObject = gameObjects[gameObjectIndex];
  // Make the object hit
  gameObject.hitHallebot = true;
  score += gameObject.contactScoreChange;

  // Update health but keep between 0 and 100
  health += gameObject.contactHealthChange;
  health = Math.max(0, Math.min(100, health));

  if (gameObject.collect && gameObject.type !== "goal") {
    // mark the object for deletion if it is a collectible
    gameObject.toRemove = true;
  }
}

function isGenericCollision(gameObject) {
  // collisions are complicated because we draw game objects from the bottom up and the player from the top left with a hitbox offset
  return (
    player.x + player.hitBoxWidth > gameObject.x &&
    player.x < gameObject.x + gameObject.hitWidth &&
    player.y + player.hitBoxHeight > gameObject.y - gameObject.hitHeight &&
    player.y < gameObject.y &&
    !gameObject.hitHallebot // this should be undefined until hit
  );
}

function handleHallebotPlatformCollisions() {
  // Platforms are handled in moveHallebot to manage ground collisions; we don't need to handle the case of landing from the top again here

  for (let i = 0; i < gameObjects.length; i++) {
    const gameObject = gameObjects[i];
    if (gameObject.type !== "platform") {
      continue;
    }

    // first, check if there is any collision at all
    if (
      player.x + player.hitBoxWidth > gameObject.x &&
      player.x < gameObject.x + gameObject.width &&
      player.y + player.hitBoxHeight > gameObject.y - gameObject.height &&
      player.y < gameObject.y
    ) {
      // We want Hallebot to pass through from underneath only if the platform has 0 hp; otherwise stop vertical movement
      if (gameObject.hp > 0 && player.speedY < 0) {
        player.speedY = 0;

        player.y = gameObject.y; // position player below platform; platforms draw from the bottom up
        continue; // we don't want to change health or score from bottom collisions
      }

      // only affect health and score the first time the platform is hit
      if (!gameObject.hitHallebot) {
        gameObject.hitHallebot = true;
        score += gameObject.contactScoreChange;
        health += gameObject.contactHealthChange;
        health = Math.max(0, Math.min(100, health));
      }
    }
  }
}

function handleHallebotGoalCollision() {
  // there should always be exactly one goal in the level
  let goal = gameObjects.find((obj) => obj.type === "goal");

  if (!goal) {
    return;
  }

  if (player.x > goal.x) {
    // first clear gameObjects
    gameObjects = [];

    // call the student transition code
    triggerLevelTransition();
  }
}

function updateAllObjects() {
  // while not efficient, we want students to need to use their filterObjects and moveGameObjects functions, so we call them here for each type
  for (let i = 0; i < objectTypes.length; i++) {
    const type = objectTypes[i];
    const objectsOfType = filterObjects(type);
    moveGameObjects(objectsOfType);
  }
}

function cleanupGameObjects() {
  // Remove projectiles marked for deletion
  projectiles = projectiles.filter((projectile) => !projectile.toRemove);
  // Remove game objects marked for deletion
  gameObjects = gameObjects.filter((gameObject) => !gameObject.toRemove);
}

/*============================================================
=           Rendering Helper Functions           =
====================================================*/

function drawBackground() {
  const w = canvas.width;
  const h = canvas.height;

  ctx.fillStyle = THEME.upperBackground;
  ctx.fillRect(0, 0, w, groundY);

  ctx.fillStyle = THEME.ground;
  ctx.fillRect(0, groundY, w, groundY + groundHeight);

  ctx.fillStyle = THEME.lowerBackground;
  ctx.fillRect(0, groundY + groundHeight, w, h);
}

function drawScenery() {
  // iterate through each scenery type
  for (let sceneryTypeKey in scenery) {
    const sceneryType = scenery[sceneryTypeKey];
    const image =
      document.getElementById(
        sceneryTypeKey
      ); /* get the image for this scenery type */
    // iterate through each instance of this scenery type
    for (let i = 0; i < sceneryType.instances.length; i++) {
      const instance = sceneryType.instances[i];

      // we draw from the bottom up to make it easier for students working above groundY
      ctx.drawImage(
        image,
        instance.x,
        instance.y ? instance.y - instance.height : groundY - instance.height,
        instance.width,
        instance.height
      );
    }
  }
}

function drawInteractables() {
  // iterate through each interactable in the level and draw it

  for (let i = 0; i < gameObjects.length; i++) {
    const entity = gameObjects[i];
    const image = document.getElementById(entity.kind);

    ctx.drawImage(
      image,
      entity.x,
      entity.y - entity.height,
      entity.width,
      entity.height
    );
  }
}

function drawProjectiles() {
  // iterate through each projectile and draw it
  for (let i = 0; i < projectiles.length; i++) {
    const projectile = projectiles[i];
    const image = document.getElementById("projectile");

    // adjust the size based on flicker rate and clamp between min and max size; check if the base size is smaller or larger than the min/max respectively, otherwise use the default flicker direction; do not flicker if min is greater than max
    if (projectileMinSize > projectileMaxSize) {
      // do nothing
    } else {
      projectile.width += projectileFlickerRate * projectile.flickerDirection;
      projectile.height += projectileFlickerRate * projectile.flickerDirection;

      // adjust x and y to keep projectile centered while size changes
      projectile.x -= (projectileFlickerRate * projectile.flickerDirection) / 2;
      projectile.y -= (projectileFlickerRate * projectile.flickerDirection) / 2;

      if (projectile.width <= projectileMinSize) {
        projectile.flickerDirection = 1;
      } else if (projectile.width >= projectileMaxSize) {
        projectile.flickerDirection = -1;
      }
    }
    ctx.drawImage(
      image,
      projectile.x,
      projectile.y,
      projectile.width,
      projectile.height
    );
  }
}

/*============================================================
=           Hallebot Movement and Animation Code (needs its own section) =
====================================================*/

function moveHallebot() {
  // Check for ground collision
  checkIfOnGround(); // sets player.onGround to true or false

  // Apply gravity
  if (!player.onGround) {
    player.speedY += gravity;
  }
  player.y += player.speedY;
}

function checkIfOnGround() {
  // first check for the simple case of being below the ground; we are using hitBoxHeight because it is more stable than the image height

  const playerGroundCollisionHeight =
    currentAnimationType === animationTypes.duck
      ? 105 * playerScale
      : player.hitBoxHeight;

  if (player.y + playerGroundCollisionHeight >= groundY) {
    player.y = groundY - playerGroundCollisionHeight;
    if (player.speedY > 0) {
      player.speedY = 0;
    }
    player.onGround = true;
    return;
  }
  // next check for being on top of a platform type obstacle
  for (let i = 0; i < gameObjects.length; i++) {
    // this could be more efficient if we use one of the student's helper functions, but it shouldn't significantly impact performance and don't want to rely on them making a correct implementation
    let gameObject = gameObjects[i];
    if (gameObject.type === "platform") {
      if (
        player.y + playerGroundCollisionHeight <=
          gameObject.y - gameObject.height && // player bottom is below the platform top
        player.x + player.hitBoxWidth > gameObject.x && // player right edge is past platform left edge
        player.x < gameObject.x + gameObject.width && // player left edge is before platform right edge
        player.y + playerGroundCollisionHeight + player.speedY >=
          gameObject.y - gameObject.height // player is moving down onto the platform
      ) {
        player.y =
          gameObject.y - gameObject.height - playerGroundCollisionHeight; // position player on top of platform
        if (player.speedY > 0) {
          player.speedY = 0;
        }
        player.onGround = true;
        return;
      }
    }
  }
  player.onGround = false; // if we get here, we are not on the ground or a platform
}

function keyboardControlActions() {
  keyPress.any = false; //keyboardHandler will set this to true if you press any key. Setting the variable to false here makes sure that key press dosen't stick around.
  //this is used for respawning; if you hit any key after you die this variable will be set to true and you will respawn.

  if (currentAnimationType === animationTypes.frontDeath) {
    return;
  }

  if (
    keyPress.up &&
    player.onGround &&
    currentAnimationType !== animationTypes.lazer
  ) {
    //this only lets you jump if you are on the ground
    currentAnimationType = animationTypes.jump;
    player.speedY = -playerJumpStrength;
    jumpTimer = 19; //this counts how many frames to have the jump last.
    player.onGround = false; //bug fix for jump animation, you have to change this or the jump animation doesn't work
    frameIndex = 4;
  }

  if (keyPress.space && currentAnimationType !== animationTypes.lazer) {
    currentAnimationType = animationTypes.lazer;
    frameIndex = 11; // start partway through for more rapid shooting
    player.speedY = 0; // stop vertical movement when shooting
    createProjectile();
  }
}

// I apologize for the spaghetti; this is largely imported from platformer.js and I don't feel like refactoring the entire thing
function changeAnimationType() {
  player.hitBoxHeight = 105 * playerScale; // reset hitbox height in case we were ducking before
  if (currentAnimationType === animationTypes.frontDeath) {
    if (
      frameIndex >= animationDetails[currentAnimationType].coordinates.length
    ) {
      player.deadAndDeathAnimationDone = true;
    }
    return;
  }
  if (currentAnimationType === animationTypes.lazer) {
    // we want the lazer animation to be rapid, so we stop early
    if (frameIndex >= 21) {
      frameIndex = 0;
      currentAnimationType = animationTypes.run;
    }
    return;
  }

  if (jumpTimer > 0 && !player.onGround) {
    currentAnimationType = animationTypes.jump;
    jumpTimer--;
  } else {
    jumpTimer = 0;
    if (player.onGround) {
      if (keyPress.down) {
        currentAnimationType = animationTypes.duck;
        player.hitBoxHeight = 70 * playerScale; // actually make the duck do something this game
        if (duckTimer < DUCK_COUNTER_IDLE_VALUE) {
          // not using index 0 because the animation is too slow then
          frameIndex = 3;
          duckTimer = DUCK_COUNTER_IDLE_VALUE * 2 - frameIndex;
        }
      } else {
        // if you are not ducking, jumping, dead, or shooting, you must be running
        currentAnimationType = animationTypes.run;
      }
    }
  }
}

function animate() {
  if (
    !(
      keyPress.down &&
      duckTimer === DUCK_COUNTER_IDLE_VALUE &&
      currentAnimationType === animationTypes.duck
    )
  ) {
    frameIndex = frameIndex + 15 / frameRate;
    if (duckTimer > 0) {
      duckTimer -= 0.25;
    }
  }

  changeAnimationType();
  if (frameIndex >= animationDetails[currentAnimationType].coordinates.length) {
    frameIndex = 0;
  }
  spriteX =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .sx;
  spriteY =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .sy;
  spriteWidth =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .width;
  spriteHeight =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .height;
  maxWidth = animationDetails[currentAnimationType].maxWidth * playerScale;
  maxHeight = animationDetails[currentAnimationType].maxHeight * playerScale;
  offsetX =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .xoffset * playerScale;
  offsetY =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .yoffset * playerScale;
  player.width =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .width * playerScale;
  player.height =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .height * playerScale;
  player.hitDx =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .hitDx * playerScale;
  player.hitDy =
    animationDetails[currentAnimationType].coordinates[Math.floor(frameIndex)]
      .hitDy * playerScale;
}

function drawRobot() {
  if (player.deadAndDeathAnimationDone) {
    return; //return stops the function, we don't want to draw the robot after we die
  }

  ctx.drawImage(
    halleImage,
    spriteX,
    spriteY,
    spriteWidth,
    spriteHeight,
    player.x - player.hitDx,
    player.y - player.hitDy,
    player.width,
    player.height
  );
}

/*====================================================
=            Event Handlers            =
====================================================*/

function handleKeyDown(e) {
  keyPress.any = true;
  if (e.key === "ArrowUp" || e.key === "w") {
    keyPress.up = true;
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    keyPress.down = true;
  }
  if (e.key === " ") {
    keyPress.space = true;
  }
}

function handleKeyUp(e) {
  if (e.key === "ArrowUp" || e.key === "w") {
    keyPress.up = false;
  }
  if (e.key === "ArrowDown" || e.key === "s") {
    keyPress.down = false;
    if (currentAnimationType === animationTypes.duck) {
      duckTimer = 8;
      frameIndex = 20;
    }
  }
  if (e.key === " ") {
    keyPress.space = false;
  }
}

/*============================================================
=            Make Functions            =
====================================================*/

function makeEnemy(obj) {
  gameObjects.push(applyDefaultInteractableUpdateValues(obj));
}

function makePowerup(obj) {
  gameObjects.push(applyDefaultInteractableUpdateValues(obj));
}

function makePlatform(obj) {
  gameObjects.push(applyDefaultInteractableUpdateValues(obj));
}

function makeObstacle(obj) {
  gameObjects.push(applyDefaultInteractableUpdateValues(obj));
}

function makeGoal(obj) {
  gameObjects.push(applyDefaultInteractableUpdateValues(obj));
}

function applyDefaultInteractableUpdateValues(entity) {
  if (entity.type in DEFAULT_VALUES) {
    if (entity.kind in DEFAULT_VALUES[entity.type]) {
      const defaults = DEFAULT_VALUES[entity.type][entity.kind];
      return {
        type: entity.type,
        kind: entity.kind,
        imageUrl: defaults.imageUrl,
        x: entity.x,
        y: entity.y,
        width: entity.width || defaults.width,
        height: entity.height || defaults.height,
        hitWidth: entity.hitWidth || defaults.hitWidth,
        hitHeight: entity.hitHeight || defaults.hitHeight,
        speedX: entity.speedX || defaults.speedX,
        speedY: entity.speedY || defaults.speedY,
        minY: entity.minY || defaults.minY,
        maxY: entity.maxY || defaults.maxY,
        contactHealthChange:
          entity.contactHealthChange || defaults.contactHealthChange,
        contactScoreChange:
          entity.contactScoreChange || defaults.contactScoreChange,
        projectileHealthChange:
          entity.projectileHealthChange || defaults.projectileHealthChange,
        projectileScoreChange:
          entity.projectileScoreChange || defaults.projectileScoreChange,
        collect:
          entity.collect === undefined ? defaults.collect : entity.collect,
        hp: entity.hp === undefined ? defaults.hp : entity.hp, // need to allow 0 hp
      };
    }
  }
  return entity;
}

/*====================================================
=            HUD Management           =
====================================================*/

function drawHUD() {
  // Draw level name
  ctx.fillStyle = HUD_SETTINGS.textColor;
  ctx.font = HUD_SETTINGS.textFont;
  ctx.fillText(
    `${currentLevel.name}`,
    HUD_SETTINGS.levelPosition.x,
    HUD_SETTINGS.levelPosition.y
  );

  // Draw score
  ctx.fillText(
    `Score: ${score}`,
    HUD_SETTINGS.scorePosition.x,
    HUD_SETTINGS.scorePosition.y
  );

  // Draw health bar
  const healthBarWidth = HUD_SETTINGS.healthBarSize.width;
  const healthBarHeight = HUD_SETTINGS.healthBarSize.height;
  const healthBarX = HUD_SETTINGS.healthBarPosition.x;
  const healthBarY = HUD_SETTINGS.healthBarPosition.y;

  // Draw background of health bar
  ctx.fillStyle = HUD_SETTINGS.healthBarBackgroundColor;
  ctx.fillRect(healthBarX, healthBarY, healthBarWidth, healthBarHeight);

  // Draw current health
  ctx.fillStyle = HUD_SETTINGS.healthBarFillColor;
  const currentHealthWidth = (health / 100) * healthBarWidth;
  ctx.fillRect(healthBarX, healthBarY, currentHealthWidth, healthBarHeight);

  // Draw health text and show digits only up to 2 decimal places
  ctx.fillStyle = HUD_SETTINGS.textColor;
  ctx.font = HUD_SETTINGS.textFont;
  ctx.fillText(
    `${health.toFixed(2)}`,
    healthBarX + 5,
    healthBarY + healthBarHeight - 5
  );
}

/*============================================================
=            Game Over Screens           =
====================================================*/
function showGameOver() {
  ctx.fillStyle = "grey";
  ctx.fillRect(
    canvas.width / 4,
    canvas.height / 6,
    canvas.width / 2,
    canvas.height / 2
  );
  ctx.fillStyle = "black";
  ctx.font = "800% serif";
  ctx.fillText(
    "You are dead",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 5,
    (canvas.width / 16) * 14
  );
  ctx.font = "500% serif";
  ctx.fillText(
    "Hit any key to restart",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 3,
    (canvas.width / 16) * 14
  );
  if (keyPress.any) {
    keyPress.any = false;
    window.location.reload();
  }
}

function showWinScreen() {
  ctx.fillStyle = "grey";
  ctx.fillRect(
    canvas.width / 4,
    canvas.height / 6,
    canvas.width / 2,
    canvas.height / 2
  );
  ctx.fillStyle = "white";
  ctx.font = "800% serif";
  ctx.fillText(
    "You Win!",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 5,
    (canvas.width / 16) * 14
  );
  ctx.font = "500% serif";
  ctx.fillText(
    "Hit any key to restart",
    canvas.width / 4,
    canvas.height / 6 + canvas.height / 3,
    (canvas.width / 16) * 14
  );
  if (keyPress.any) {
    keyPress.any = false;
    window.location.reload();
  }
}
