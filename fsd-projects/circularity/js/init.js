var init = function (window) {
  "use strict";
  var draw = window.opspark.draw,
    physikz = window.opspark.racket.physikz,
    app = window.opspark.makeApp(),
    canvas = app.canvas,
    view = app.view,
    fps = draw.fps("#000");

  window.opspark.makeGame = function () {
    window.opspark.game = {};
    var game = window.opspark.game;

    ///////////////////
    // PROGRAM SETUP //
    ///////////////////

    var circles = [];

    function getRandomInt(min, max) {
      // Math.floor rounds down to the nearest whole number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function drawCircle() {
      var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
      physikz.addRandomVelocity(circle, canvas, 5, 5);
      view.addChild(circle);
      circles.push(circle);
    }

    for (var i = 0; i < getRandomInt(50, 500); i++) {
      drawCircle();
    }

    Gamification.init({
      canvas: canvas,
      view: view,
      draw: draw,
      physikz: physikz,
      circles: circles,
      game: game,
    });

    ///////////////////
    // PROGRAM LOGIC //
    ///////////////////

    function update() {
      for (var i = 0; i < circles.length; i++) {
        physikz.updatePosition(circles[i]);
        game.checkCirclePosition(circles[i]);
      }

      Gamification.update();
    }

    game.checkCirclePosition = function (circle) {
      var rightEdge = circle.x + circle.radius;
      var leftEdge = circle.x - circle.radius;
      var bottomEdge = circle.y + circle.radius;
      var topEdge = circle.y - circle.radius;

      // Right side -> Left side
      if (leftEdge > canvas.width) {
        circle.x = -circle.radius;
      }

      // Left side -> Right side
      if (rightEdge < 0) {
        circle.x = canvas.width + circle.radius;
      }

      // Bottom -> Top
      if (topEdge > canvas.height) {
        circle.y = -circle.radius;
      }

      // Top -> Bottom
      if (bottomEdge < 0) {
        circle.y = canvas.height + circle.radius;
      }
    };

    /////////////////////////////////////////////////////////////
    // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
    /////////////////////////////////////////////////////////////

    view.addChild(fps);
    app.addUpdateable(fps);

    game.circles = circles;
    game.drawCircle = drawCircle;
    game.update = update;

    app.addUpdateable(window.opspark.game);
  };
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = init;
}
