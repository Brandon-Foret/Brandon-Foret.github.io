/**
 * Gamification Module for Circularity Game
 * Contains all player controls, absorption mechanics, and multiplayer features
 * Only activates when educational TODOs are completed
 */

var Gamification = (function () {
  "use strict";

  // Config: number of circles required to unlock gamification features
  var REQUIRED_CIRCLE_COUNT = 50;

  // Private variables
  var player1 = null;
  var player2 = null;
  var keys = {};
  var player1Score = 0;
  var player2Score = 0;
  var gameStarted = false;
  var gameMode = "single";
  var gameTimer = 60;
  var timerInterval = null;
  var gamificationUnlocked = false;
  var originalCircles = []; // Store original circle configurations for restart
  var countdownInProgress = false; // Prevent multiple countdowns
  var gameStartTime = null; // Track when the game actually starts
  var INVINCIBILITY_DURATION = 5000; // 5 seconds in milliseconds

  // Consistent start positions for players
  var PLAYER_START_POSITIONS = {
    player1: { x: 100, y: 100 }, // Top-left area
    player2: { x: 1000, y: 100 }, // Top-right area
  };

  // Game references (will be set by init)
  var canvas, view, draw, physikz, circles, game;

  // Public API
  var api = {
    // Initialize the gamification system
    init: function (gameReferences) {
      canvas = gameReferences.canvas;
      view = gameReferences.view;
      draw = gameReferences.draw;
      physikz = gameReferences.physikz;
      circles = gameReferences.circles;
      game = gameReferences.game;

      setupKeyboardControls();
      setupUIEventListeners();

      // Initialize multiplayer system
      Multiplayer.init({
        onConnected: function () {
          console.log("Local multiplayer started");
          
          // Create players immediately and start the game
          if (!player1) createPlayer1();
          createPlayer2();
          
          // Start multiplayer game with countdown
          startMultiplayerGame();
        },
        onDisconnected: function () {
          console.log("Local multiplayer ended");
          hideMultiplayerStatus();
          resetGame();
        },
        onRemotePlayerUpdate: function (data) {
          // Update player 2 score display
          var opponentScore = document.querySelector("#multiplayerScore div");
          if (opponentScore && data) {
            opponentScore.textContent =
              "Player 2: Size " + Math.floor(data.radius);
          }
        },
      });
    },

    // Update function called from main game loop
    update: function () {
      checkGamificationUnlock();

      // Update players and handle absorption (only if unlocked)
      if (gameStarted && gamificationUnlocked) {
        updatePlayer1();
        if (Multiplayer.isMultiplayer) {
          updatePlayer2();
        }
        handleAbsorption();
        updatePlayerTooltips();
        updateInvincibilityVisuals();
      }
    },

    // Check if gamification is unlocked
    isUnlocked: function () {
      return gamificationUnlocked;
    },
  };

  // Private functions

  // Clear selection state from all game mode buttons
  function clearButtonSelection() {
    var buttons = document.querySelectorAll('.game-mode-btn');
    buttons.forEach(function(button) {
      button.classList.remove('selected');
    });
  }

  // Create player 1 (always green, uses WASD)
  function createPlayer1() {
    player1 = draw.randomCircleInArea(canvas, true, true, "#00FF00", 3);
    player1.radius = 15;
    player1.scaleX = player1.scaleY = 1.5;

    // Set consistent start position
    player1.x = PLAYER_START_POSITIONS.player1.x;
    player1.y = PLAYER_START_POSITIONS.player1.y;

    // Ensure player1 stays within canvas bounds
    var margin = player1.radius + 10;
    if (player1.x > canvas.width - margin) player1.x = canvas.width - margin;
    if (player1.y > canvas.height - margin) player1.y = canvas.height - margin;
    if (player1.x < margin) player1.x = margin;
    if (player1.y < margin) player1.y = margin;

    // Set initial velocity to 0
    player1.velocityX = 0;
    player1.velocityY = 0;

    view.addChild(player1);

    // Add tooltip to identify player 1
    addPlayerTooltip(player1, "P1", "#00FF00");

    // Add temporary pointer
    addTemporaryPointer(player1);

    // Reset score
    player1Score = 0;
    updateScore();
  }

  // Create player 2 (always blue, uses arrow keys)
  function createPlayer2() {
    // Create player2 using the same method as player1 but with blue color
    player2 = draw.randomCircleInArea(canvas, true, true, "#0080FF", 3);
    player2.radius = 15;
    player2.scaleX = player2.scaleY = 1.5;

    // Set consistent start position
    player2.x = PLAYER_START_POSITIONS.player2.x;
    player2.y = PLAYER_START_POSITIONS.player2.y;

    // Ensure player2 stays within canvas bounds
    var margin = player2.radius + 10;
    if (player2.x > canvas.width - margin) player2.x = canvas.width - margin;
    if (player2.y > canvas.height - margin) player2.y = canvas.height - margin;
    if (player2.x < margin) player2.x = margin;
    if (player2.y < margin) player2.y = margin;

    // Set initial velocity to 0
    player2.velocityX = 0;
    player2.velocityY = 0;

    // Add to view
    view.addChild(player2);

    // Add tooltip to identify player 2
    addPlayerTooltip(player2, "P2", "#0080FF");

    // Reset score
    player2Score = 0;

    console.log("Player 2 created at position:", player2.x, player2.y);
  }

  // Add tooltip to identify a player
  function addPlayerTooltip(player, text, color) {
    // Create a text object for the tooltip
    var tooltip = new createjs.Text(text, "bold 14px Arial", color);
    tooltip.textAlign = "center";
    tooltip.textBaseline = "middle";
    tooltip.shadow = new createjs.Shadow("rgba(0,0,0,0.7)", 2, 2, 3);

    // Store the tooltip with the player
    player.tooltip = tooltip;

    // Add tooltip to view
    view.addChild(tooltip);

    // Position the tooltip above the player
    updateTooltipPosition(player);
  }

  // Update the position of all player tooltips
  function updatePlayerTooltips() {
    if (player1 && player1.tooltip) {
      updateTooltipPosition(player1);
    }

    if (player2 && player2.tooltip) {
      updateTooltipPosition(player2);
    }
  }

  // Update the position of a single tooltip
  function updateTooltipPosition(player) {
    if (player && player.tooltip) {
      player.tooltip.x = player.x;
      player.tooltip.y = player.y - player.radius - 15;
    }
  }

  // Set up keyboard event listeners
  function setupKeyboardControls() {
    document.addEventListener("keydown", function (event) {
      var key = event.key.toLowerCase();
      keys[key] = true;

      // Prevent default behavior for arrow keys and WASD to avoid page scrolling
      if (
        key === "arrowup" ||
        key === "arrowdown" ||
        key === "arrowleft" ||
        key === "arrowright" ||
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d"
      ) {
        event.preventDefault();
      }

      // Start game on any key press if not started
      if (!gameStarted && gamificationUnlocked) {
        document.getElementById("instructions").style.display = "none";
        if (gameMode === "multiplayer") {
          startMultiplayerGame();
        } else {
          startSinglePlayerGame();
        }
      }
    });

    document.addEventListener("keyup", function (event) {
      var key = event.key.toLowerCase();
      keys[key] = false;

      // Prevent default behavior for arrow keys and WASD
      if (
        key === "arrowup" ||
        key === "arrowdown" ||
        key === "arrowleft" ||
        key === "arrowright" ||
        key === "w" ||
        key === "a" ||
        key === "s" ||
        key === "d"
      ) {
        event.preventDefault();
      }
    });
  }

  // Set up UI event listeners for game controls
  function setupUIEventListeners() {
    // Single Player button
    var singlePlayerBtn = document.getElementById("singlePlayerBtn");
    if (singlePlayerBtn) {
      singlePlayerBtn.addEventListener("click", function () {
        if (!gamificationUnlocked) {
          alert("Complete all TODOs first to unlock game features!");
          return;
        }
        
        // Add selected state to single player button
        clearButtonSelection();
        singlePlayerBtn.classList.add("selected");
        
        startSinglePlayerGame();
      });
    }

    // Multiplayer button (using hostGameBtn ID from HTML)
    var hostGameBtn = document.getElementById("hostGameBtn");
    if (hostGameBtn) {
      hostGameBtn.addEventListener("click", function () {
        if (!gamificationUnlocked) {
          alert("Complete all TODOs first to unlock game features!");
          return;
        }
        
        // Add selected state to multiplayer button
        clearButtonSelection();
        hostGameBtn.classList.add("selected");
        
        Multiplayer.startLocalMultiplayer();
      });
    }

    // Reset button
    var resetBtn = document.getElementById("resetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (!gamificationUnlocked) {
          alert("Complete all TODOs first to unlock game features!");
          return;
        }
        resetGame();
      });
    }

    // End Game button
    var endGameBtn = document.getElementById("endGameBtn");
    if (endGameBtn) {
      endGameBtn.addEventListener("click", function () {
        if (Multiplayer.isMultiplayer) {
          endMultiplayerGame("Game ended by player");
        } else {
          resetGame();
        }
      });
    }
  }

  // Update player 1 movement (WASD keys)
  function updatePlayer1() {
    if (!player1) return;

    // Check for WASD key presses
    if (keys["w"]) {
      player1.y -= 3;
    }
    if (keys["s"]) {
      player1.y += 3;
    }
    if (keys["a"]) {
      player1.x -= 3;
    }
    if (keys["d"]) {
      player1.x += 3;
    }

    // Keep player in bounds (wrap around screen)
    game.checkCirclePosition(player1);
  }

  // Update player 2 movement (Arrow keys)
  function updatePlayer2() {
    if (!player2) return;

    // Check for Arrow key presses
    if (keys["arrowup"]) {
      player2.y -= 3;
    }
    if (keys["arrowdown"]) {
      player2.y += 3;
    }
    if (keys["arrowleft"]) {
      player2.x -= 3;
    }
    if (keys["arrowright"]) {
      player2.x += 3;
    }

    // Keep player in bounds (wrap around screen)
    game.checkCirclePosition(player2);

    // Update multiplayer system with player 2 data
    Multiplayer.updatePlayer2({
      x: player2.x,
      y: player2.y,
      radius: player2.radius,
      score: player2Score,
    });
  }

  // Check collision between two circles
  function checkCollision(circle1, circle2) {
    var dx = circle1.x - circle2.x;
    var dy = circle1.y - circle2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);

    // Account for scaling in collision detection
    var radius1 = (circle1.radius || 10) * (circle1.scaleX || 1);
    var radius2 = (circle2.radius || 10) * (circle2.scaleX || 1);

    var combinedRadius = radius1 + radius2;
    return distance < combinedRadius;
  }

  // Get the actual effective radius of a circle, accounting for scaling
  function getActualRadius(circle) {
    if (!circle) return 0;
    
    // For player circles, use the radius property directly (it's updated when they grow)
    if (circle === player1 || circle === player2) {
      return circle.radius || 15;
    }
    
    // For regular circles, use the radius property with proper fallback
    // Original circles have radius between 5-20, so use 12 as a reasonable fallback
    return circle.radius || 12;
  }

  // Check if players are currently invincible (first 5 seconds of game)
  function isInvincibilityActive() {
    if (!gameStartTime || !gameStarted) return false;
    var currentTime = Date.now();
    return (currentTime - gameStartTime) < INVINCIBILITY_DURATION;
  }

  // Update visual effects for invincibility period
  function updateInvincibilityVisuals() {
    var isInvincible = isInvincibilityActive();
    
    // Simple approach: modify player alpha to show invincibility
    if (player1) {
      if (isInvincible) {
        // Make player slightly transparent and add a pulsing effect
        var pulseValue = 0.7 + 0.3 * Math.sin(Date.now() / 200);
        player1.alpha = pulseValue;
      } else {
        // Restore normal appearance
        player1.alpha = 1.0;
      }
    }

    if (player2) {
      if (isInvincible) {
        // Make player slightly transparent and add a pulsing effect
        var pulseValue = 0.7 + 0.3 * Math.sin(Date.now() / 200);
        player2.alpha = pulseValue;
      } else {
        // Restore normal appearance
        player2.alpha = 1.0;
      }
    }
  }

  // Handle absorption when players collide with other circles and each other
  function handleAbsorption() {
    // Skip all absorption during invincibility period
    if (isInvincibilityActive()) {
      return;
    }

    // Handle player 1 collisions with circles
    if (player1) {
      for (var i = circles.length - 1; i >= 0; i--) {
        var otherCircle = circles[i];

        if (checkCollision(player1, otherCircle)) {
          // Get actual radius values with proper calculation
          var player1Size = getActualRadius(player1);
          var otherSize = getActualRadius(otherCircle);

          // Add a small buffer to prevent edge cases (5% larger required to absorb)
          var absorptionThreshold = 1.05;

          if (player1Size > otherSize * absorptionThreshold) {
            // Player 1 absorbs the other circle
            absorb(player1, otherCircle, i, 1);
          } else if (otherSize > player1Size * absorptionThreshold) {
            // Other circle absorbs player 1 - game over for player 1
            removePlayer(1);
            gameOver("Player 1 was absorbed!");
            return;
          }
          // If sizes are too similar, no absorption occurs (prevents unfair absorptions)
        }
      }
    }

    // Handle player 2 collisions with circles (only in multiplayer)
    if (player2 && Multiplayer.isMultiplayer) {
      for (var i = circles.length - 1; i >= 0; i--) {
        var otherCircle = circles[i];

        if (checkCollision(player2, otherCircle)) {
          // Get actual radius values with proper calculation
          var player2Size = getActualRadius(player2);
          var otherSize = getActualRadius(otherCircle);

          // Add a small buffer to prevent edge cases (5% larger required to absorb)
          var absorptionThreshold = 1.05;

          if (player2Size > otherSize * absorptionThreshold) {
            // Player 2 absorbs the other circle
            absorb(player2, otherCircle, i, 2);
          } else if (otherSize > player2Size * absorptionThreshold) {
            // Other circle absorbs player 2 - game over for player 2
            removePlayer(2);
            gameOver("Player 2 was absorbed!");
            return;
          }
          // If sizes are too similar, no absorption occurs (prevents unfair absorptions)
        }
      }

      // Handle player vs player collision
      if (player1 && checkCollision(player1, player2)) {
        var player1Size = getActualRadius(player1);
        var player2Size = getActualRadius(player2);

        // Only absorb if one player is significantly larger than the other (10% difference)
        var sizeThreshold = 1.1;

        if (player1Size > player2Size * sizeThreshold) {
          // Player 1 absorbs Player 2
          absorb(player1, player2, -1, 1);
          removePlayer(2);
          gameOver("Player 1 wins by absorbing Player 2!");
        } else if (player2Size > player1Size * sizeThreshold) {
          // Player 2 absorbs Player 1
          absorb(player2, player1, -1, 2);
          removePlayer(1);
          gameOver("Player 2 wins by absorbing Player 1!");
        }
        // If sizes are similar, no absorption occurs
      }
    }
  }

// Update player 1 movement (WASD keys)
function updatePlayer1() {
  if (!player1) return;

  // Check for WASD key presses
  if (keys["w"]) {
    player1.y -= 3;
  }
  if (keys["s"]) {
    player1.y += 3;
  }
  if (keys["a"]) {
    player1.x -= 3;
  }
  if (keys["d"]) {
    player1.x += 3;
  }

  // Keep player in bounds (wrap around screen)
  game.checkCirclePosition(player1);
}

// Update player 2 movement (Arrow keys)
function updatePlayer2() {
  if (!player2) return;

  // Check for arrow key presses (using lowercase as set by keyboard handler)
  if (keys["arrowup"]) {
    player2.y -= 3;
  }
  if (keys["arrowdown"]) {
    player2.y += 3;
  }
  if (keys["arrowleft"]) {
    player2.x -= 3;
  }
  if (keys["arrowright"]) {
    player2.x += 3;
  }

  // Keep player in bounds (wrap around screen)
  game.checkCirclePosition(player2);

  // Update multiplayer data
  if (Multiplayer.isMultiplayer) {
    Multiplayer.updatePlayer2({
      x: player2.x,
      y: player2.y,
      radius: player2.radius,
      score: player2Score,
    });
  }
}

  // Absorb a circle and grow the player
  function absorb(absorber, absorbed, index, playerIndex) {
    // Calculate new size (area-based growth)
    var absorberArea = Math.PI * Math.pow(absorber.radius, 2);
    var absorbedArea = Math.PI * Math.pow(absorbed.radius || 10, 2);
    var newArea = absorberArea + absorbedArea * 0.3; // Gain 30% of absorbed area for faster growth
    var newRadius = Math.sqrt(newArea / Math.PI);

    // Update absorber size
    absorber.radius = newRadius;
    absorber.scaleX = absorber.scaleY = newRadius / 10;

    // Remove absorbed circle (only if it's from the circles array)
    if (index >= 0) {
      view.removeChild(absorbed);
      circles.splice(index, 1);

      // Create a new circle to maintain population
      var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
      physikz.addRandomVelocity(circle, canvas);
      view.addChild(circle);
      circles.push(circle);
    }

    // Update the correct player's score
    if (playerIndex === 1) {
      player1Score += Math.floor(absorbed.radius || 10);
    } else if (playerIndex === 2) {
      player2Score += Math.floor(absorbed.radius || 10);
    }

    updateScore();
  }

  // Update score display
  function updateScore() {
    var scoreElement = document.getElementById("score");
    if (scoreElement && player1) {
      if (Multiplayer.isMultiplayer && player2) {
        // Show both players' scores in multiplayer
        scoreElement.textContent =
          "Player 1: " +
          player1Score +
          " | Size: " +
          Math.floor(player1.radius);

        var multiplayerScore = document.getElementById("multiplayerScore");
        if (multiplayerScore) {
          multiplayerScore.style.display = "block";
          var player2Info = multiplayerScore.querySelector("div");
          if (player2Info) {
            player2Info.textContent =
              "Player 2: " +
              player2Score +
              " | Size: " +
              Math.floor(player2.radius);
          }
        }
      } else {
        // Single player mode
        scoreElement.textContent =
          "Score: " + player1Score + " | Size: " + Math.floor(player1.radius);
      }
    }
  }

  // Game over function
  function gameOver(message) {
    if (gameMode === "multiplayer") {
      endMultiplayerGame(message);
    } else {
      alert(message || "Game Over! Final Score: " + player1Score);
      resetGame();
    }
  }

  // Add a temporary pointer to highlight the player
  function addTemporaryPointer(player) {
    var pointer = new createjs.Shape();
    pointer.graphics.beginFill("yellow").drawPolyStar(0, 0, 20, 3, 0, -90);
    pointer.x = player.x;
    pointer.y = player.y - player.radius - 30;
    view.addChild(pointer);

    // Animate the pointer
    createjs.Tween.get(pointer, { loop: true })
      .to({ y: pointer.y - 10 }, 500, createjs.Ease.sineInOut)
      .to({ y: pointer.y }, 500, createjs.Ease.sineInOut);

    // Remove the pointer after 3 seconds
    setTimeout(function () {
      createjs.Tween.removeTweens(pointer);
      view.removeChild(pointer);
    }, 3000);
  }

  // Remove a player from the game
  function removePlayer(playerIndex) {
    var player = playerIndex === 1 ? player1 : player2;
    if (player) {
      if (player.tooltip) {
        view.removeChild(player.tooltip);
      }
      view.removeChild(player);
      if (playerIndex === 1) {
        player1 = null;
      } else {
        player2 = null;
      }
    }
  }

  // Reset game to initial state
  function resetGame() {
    player1Score = 0;
    player2Score = 0;

    // Remove existing players and their tooltips from view
    if (player1) {
      if (player1.tooltip) {
        view.removeChild(player1.tooltip);
      }
      view.removeChild(player1);
      player1 = null;
    }
    if (player2) {
      if (player2.tooltip) {
        view.removeChild(player2.tooltip);
      }
      view.removeChild(player2);
      player2 = null;
    }

    // Clear timer
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }

    gameStarted = false;
    gameMode = "single";
    countdownInProgress = false; // Reset countdown flag
    gameStartTime = null; // Reset invincibility timer

    // Show/hide UI elements
    var instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.style.display = gamificationUnlocked ? "block" : "none";

      // Reset game mode selection buttons
      var singleInstructions = document.getElementById(
        "singlePlayerInstructions"
      );
      var multiInstructions = document.getElementById(
        "multiplayerInstructions"
      );
      var gameModeDiv = document.getElementById("gameMode");

      if (singleInstructions) singleInstructions.style.display = "none";
      if (multiInstructions) multiInstructions.style.display = "none";
      if (gameModeDiv) gameModeDiv.style.display = "block";
    }

    var multiplayerScore = document.getElementById("multiplayerScore");
    if (multiplayerScore) {
      multiplayerScore.style.display = "none";
    }

    updateScore();

    // Ensure multiplayer is disconnected
    if (Multiplayer.isConnected()) {
      Multiplayer.disconnect();
    }
  }

// Start single player game with countdown
function startSinglePlayerGame() {
  // Prevent multiple countdowns
  if (countdownInProgress || gameStarted) {
    return;
  }
  
  gameMode = "single";
  document.getElementById("instructions").style.display = "none";
  showCountdown(function () {
    gameStarted = true;
    gameStartTime = Date.now(); // Set invincibility start time
    createPlayer1();
  });
}

// Start multiplayer game with countdown
function startMultiplayerGame() {
  // Prevent multiple countdowns
  if (countdownInProgress || gameStarted) {
    return;
  }
  
  gameMode = "multiplayer";
  document.getElementById("instructions").style.display = "none";

  showCountdown(function () {
    gameStarted = true;
    gameStartTime = Date.now(); // Set invincibility start time
    gameTimer = 60;

    // Show multiplayer score display
    var multiplayerScore = document.getElementById("multiplayerScore");
    if (multiplayerScore) {
      multiplayerScore.style.display = "block";
    }

    // Players are already created in onConnected callback

    // Start countdown timer
    timerInterval = setInterval(function () {
      gameTimer--;
      var gameTimerElement = document.getElementById("gameTimer");
      if (gameTimerElement) {
        gameTimerElement.textContent = "Time: " + gameTimer + "s";
      }

      if (gameTimer <= 0) {
        endMultiplayerGame();
      }
    }, 1000);
  });
}

// End multiplayer game
function endMultiplayerGame(reason) {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    }

    var message = reason || "Time's up!";

    // Determine winner based on remaining players and their sizes
    if (player1 && player2) {
      if (player1.radius > player2.radius) {
        message +=
          " Player 1 wins with size " + Math.floor(player1.radius) + "!";
      } else if (player2.radius > player1.radius) {
        message +=
          " Player 2 wins with size " + Math.floor(player2.radius) + "!";
      } else {
        message += " It's a tie!";
      }
    } else if (player1) {
      message += " Player 1 wins!";
    } else if (player2) {
      message += " Player 2 wins!";
    }

    alert(message);

    // Disconnect from multiplayer and reset the game
    resetGame();
  }

  // Update remote player (handle multiplayer collisions)
  function updateRemotePlayer() {
    if (!remotePlayer || !Multiplayer.isMultiplayer) return;

    // Check collision between local player and remote player
    if (checkCollision(player, remotePlayer)) {
      var playerSize = player.radius;
      var remoteSize = remotePlayer.radius;

      if (playerSize > remoteSize * 1.2) {
        // Need significant size advantage
        // Local player absorbs remote player
        absorb(player, remotePlayer, -1);
        endMultiplayerGame("You absorbed your opponent!");
      } else if (remoteSize > playerSize * 1.2) {
        // Remote player absorbs local player
        endMultiplayerGame("Your opponent absorbed you!");
      }
    }
  }

  // Check if gamification features should be unlocked
  function checkGamificationUnlock() {
    // Simple conditional: unlock if 50 circles exist AND TODO 9 is implemented
    var hasRequiredCircles = circles && circles.length >= REQUIRED_CIRCLE_COUNT;
    var hasTodo9Implementation = checkTodo9Implementation();

    var shouldUnlock = hasRequiredCircles && hasTodo9Implementation;

    if (shouldUnlock && !gamificationUnlocked) {
      // Just unlocked - show the game UI
      gamificationUnlocked = true;
      document.getElementById("instructions").style.display = "block";
      console.log(" Gamification features unlocked! All TODOs completed.");
    } else if (!shouldUnlock && gamificationUnlocked) {
      // Lock it back if conditions are no longer met
      gamificationUnlocked = false;
      document.getElementById("instructions").style.display = "none";
    }
  }

  // Check if TODO 9 (iteration over array) is implemented
  function checkTodo9Implementation() {
    // TODO 9 requires iterating over the circles array in the update function
    // We can detect this by checking if circles are being updated properly
    if (!circles || circles.length === 0) return false;

    // Check if at least some circles have velocity (indicating they're being updated)
    var updatedCircles = 0;
    for (var i = 0; i < Math.min(10, circles.length); i++) {
      var circle = circles[i];

      if (
        circle &&
        (Math.abs(circle.velocityX) > 0 || Math.abs(circle.velocityY) > 0)
      ) {
        updatedCircles++;
      }
    }

    // If most circles have velocity, TODO 9 is likely implemented
    return updatedCircles >= Math.min(5, circles.length);
  }

  // Show 3-second countdown before game starts
function showCountdown(callback) {
  // Set countdown in progress flag
  countdownInProgress = true;
  
  var instructions = document.getElementById("instructions");
  var gameModeDiv = document.getElementById("gameMode");
  
  // Remove any existing countdown div to prevent duplicates
  var existingCountdown = document.getElementById("countdown");
  if (existingCountdown) {
    existingCountdown.remove();
  }
  
  var countdownDiv = document.createElement("div");
  countdownDiv.id = "countdown";
  countdownDiv.style.cssText = "font-size: 48px; color: #FFD700; text-align: center;";

  if(gameModeDiv) gameModeDiv.style.display = 'none';
  instructions.style.display = 'block';
  instructions.appendChild(countdownDiv);

  var countdown = 3;
  countdownDiv.textContent = countdown;

  var countdownInterval = setInterval(function() {
    countdown--;
    if (countdown > 0) {
      countdownDiv.textContent = countdown;
    } else {
      clearInterval(countdownInterval);
      instructions.style.display = "none";
      if (instructions.contains(countdownDiv)) {
        instructions.removeChild(countdownDiv);
      }
      if(gameModeDiv) gameModeDiv.style.display = 'block';
      
      // Reset countdown flag before calling callback
      countdownInProgress = false;
      callback();
    }
  }, 1000);
}

  // Show connection success feedback
  function showConnectionSuccess() {
    var instructions = document.getElementById("instructions");
    if (instructions) {
      instructions.innerHTML = `
                  <h2 style="margin: 0 0 10px 0; color: #0080FF;"> Local Multiplayer Ready!</h2>
                  <div style="margin: 20px 0;">
                      <p style="margin: 10px 0; color: #FFD700; font-size: 18px; font-weight: bold;"> Two-Player Mode Activated!</p>
                      <p style="margin: 5px 0; color: #00FF00; font-size: 16px;"> Player 1: GREEN circle (WASD keys)</p>
                      <p style="margin: 5px 0; color: #0080FF; font-size: 16px;"> Player 2: BLUE circle (Arrow keys)</p>
                      <p style="margin: 5px 0;">Absorb circles and each other to grow!</p>
                      <p style="margin: 5px 0;">Biggest circle after 60 seconds wins!</p>
                      <p style="margin: 15px 0 5px 0; color: #FFD700;"><strong>Press any key to start!</strong></p>
                  </div>
              `;

      // Show persistent multiplayer status
      showMultiplayerStatus();
    }
  }

  // Show persistent multiplayer status indicator
  function showMultiplayerStatus() {
    // Remove existing status if any
    var existingStatus = document.getElementById("multiplayerStatus");
    if (existingStatus) {
      existingStatus.remove();
    }

    // Create new status indicator
    var statusDiv = document.createElement("div");
    statusDiv.id = "multiplayerStatus";
    var roleText = Multiplayer.isHost ? "HOST" : "GUEST";
    var roleColor = Multiplayer.isHost ? "#00FF00" : "#0080FF";

    statusDiv.style.cssText = `
              position: absolute;
              top: 50px;
              left: 10px;
              color: white;
              font-family: Arial, sans-serif;
              font-size: 14px;
              font-weight: bold;
              text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
              z-index: 10;
              background: rgba(0,0,0,0.7);
              padding: 8px 12px;
              border-radius: 5px;
              border-left: 4px solid ${roleColor};
          `;

    statusDiv.innerHTML = `
              <div style="color: ${roleColor};"> MULTIPLAYER</div>
              <div style="color: #FFD700; font-size: 12px;">${roleText} • Connected</div>
          `;

    // Add to the canvas container
    var canvasContainer = document.querySelector(
      'div[style*="position: relative"]'
    );
    if (canvasContainer) {
      canvasContainer.appendChild(statusDiv);
    }
  }

  // Hide multiplayer status indicator
  function hideMultiplayerStatus() {
    var statusDiv = document.getElementById("multiplayerStatus");
    if (statusDiv) {
      statusDiv.remove();
    }
  }

  return api;
})();

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = Gamification;
}
