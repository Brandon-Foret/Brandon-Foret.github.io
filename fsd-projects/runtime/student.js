function moveScenery() {
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];
    buildingInstance.x -= buildingInstance.speedX + currentLevel.speed;

    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (var i = 0; i < scenery.lamp.instances.length; i++) {
    var lampInstance = scenery.lamp.instances[i];
    lampInstance.x -= lampInstance.speedX + currentLevel.speed;

    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);

    console.log(currentObject.type, currentObject.kind);
  }
}

function create(obj) {
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  var filteredObjects = [];

  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      filteredObjects.push(gameObjects[i]);
    }
  }

  return filteredObjects;
}

function moveGameObjects(objectList) {
  for (var i = 0; i < objectList.length; i++) {
    var currentObject = objectList[i];
    currentObject.x += currentObject.speedX;
    currentObject.x -= currentLevel.speed;

    if (currentObject.speedY !== 0) {
      currentObject.y += currentObject.speedY;

      if (currentObject.y < currentObject.minY) {
        currentObject.y = currentObject.minY;
        currentObject.speedY *= -1;
      }

      if (currentObject.y > currentObject.maxY) {
        currentObject.y = currentObject.maxY;
        currentObject.speedY *= -1;
      }
    }
  }
}

function handleProjectileCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];

      if (
        isCollidingWithProjectile(currentObject, currentProjectile) === true
      ) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];

    if (currentObject.type !== "platform") {
      if (isGenericCollision(currentObject) === true) {
        if (!currentObject.hitHallebot) {
          handleHallebotGenericCollision(i);
        }
      } else {
        currentObject.hitHallebot = false;
      }
    }
  }
}

function triggerLevelTransition() {
  currentLevelIndex++;

  if (currentLevelIndex >= LEVELS.length) {
    gameObjects = [];
    player.winConditionMet = true;
    return;
  }

  currentLevel = LEVELS[currentLevelIndex];
  gameObjects = [];
  generateLevel();
}
