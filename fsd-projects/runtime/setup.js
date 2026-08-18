// === STUDENT SETTINGS ===
// You can change these colors:
const THEME = {
  upperBackground: "midnightblue",
  ground: "slategrey",
  lowerBackground: "darkgreen",
};

// These control the ground position and height:
const groundY = 350; // Y position of the ground
const groundHeight = 50; // Height of the ground

// Change these to change the HUD, including health bar colors and sizes
const HUD_SETTINGS = {
  textColor: "white",
  textFont: "20px Arial",
  levelPosition: { x: 20, y: 30 },
  scorePosition: { x: 200, y: 30 },
  healthBarPosition: { x: 400, y: 15 },
  healthBarSize: { width: 300, height: 25 },
  healthBarBorderColor: "black",
  healthBarFillColor: "green",
  healthBarBackgroundColor: "darkred",
};
// === END STUDENT SETTINGS ===

/*============================================================
=            Rendering and Physics Setup Code            =
====================================================*/

// setup variables
const gravity = 0.5; // how much is subtracted from speedY each frame
const playerJumpStrength = 12; // this is subtracted from the speedY each jump

const projectileSpeed = 8; // the speed of projectiles
const projectileDamage = 1; // how much damage a projectile does to an enemy
const projectileBaseSize = 20; // starting width and height of projectiles (does not actually need to be betweenthe min and max if students want the projectile to start bigger or smaller)
const projectileMinSize = 15; // minimum width and height of projectiles
const projectileMaxSize = 35; // maximum width and height of projectiles
const projectileFlickerRate = 2.5; // the amount of size change per frame for projectile flickering

let score = 0;
let health = 100;

/////////////////////////////////////////////////
//////////ONLY CHANGE ABOVE THIS POINT///////////
/////////////////////////////////////////////////

// Base game variables
const frameRate = 60;
const playerScale = 0.8; //makes the player just a bit smaller. Doesn't affect the hitbox, just the image

// Player variables
let firstTimeSetup = true;

const player = {
  hitDx: undefined,
  hitDy: undefined,
  hitBoxWidth: 50 * playerScale,
  hitBoxHeight: 105 * playerScale,
  x: 50,
  y: groundY - 105 * playerScale,
  speedY: 0,
  width: undefined,
  height: undefined,
  onGround: false,
  deadAndDeathAnimationDone: false,
  winConditionMet: false,
};

const keyPress = {
  any: false,
  up: false,
  down: false,
  space: false,
};

// Player animation variables
const animationTypes = {
  duck: "duck",
  flyingJump: "flying-jump",
  frontDeath: "front-death",
  jump: "jump",
  lazer: "lazer",
  run: "run",
  walk: "walk",
};
let currentAnimationType = animationTypes.run;
let frameIndex = 0;
let jumpTimer = 0;
let duckTimer = 0;
let DUCK_COUNTER_IDLE_VALUE = 14;

let spriteHeight = 0;
let spriteWidth = 0;
let spriteX = 0;
let spriteY = 0;
let offsetX = 0;
let offsetY = 0;

let projectiles = [];
let gameObjects = [];
const objectTypes = ["obstacle", "enemy", "powerup", "platform", "goal"];

// canvas and context variables; must be initialized later
let canvas;
let ctx;

// setup function variable
let setup;

let halleImage;
let animationDetails = {};
