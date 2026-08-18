// === LEVELS DEFINITIONS ===
// TODOs 7, 11, and 12 will require changes to this section
const LEVELS = [
  {
    name: "Level 1",
    speed: 2,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 1600, y: groundY },
      { type: "enemy", kind: "bug", x: 1600, y: groundY },
      { type: "powerup", kind: "healthUp", x: 1600, y: groundY - 50 },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 800,
        y: groundY - 100,
        contactHealthChange: -5,
      },
      { type: "platform", kind: "basicPlatform", x: 600, y: groundY - 60 },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 1000,
        y: groundY - 40,
        contactHealthChange: -10,
      },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 1200,
        y: groundY - 80,
        hp: 0,
      },

      { type: "goal", kind: "flag", x: 2000, y: groundY },
    ],
  },
  {
    name: "Level 2",
    speed: 3,
    gameObjects: [
      { type: "obstacle", kind: "spikes", x: 1600, y: groundY },
      { type: "enemy", kind: "bug", x: 1600, y: groundY },
      { type: "powerup", kind: "healthUp", x: 1600, y: groundY - 50 },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 800,
        y: groundY - 100,
        contactHealthChange: -5,
      },
      { type: "platform", kind: "basicPlatform", x: 600, y: groundY - 60 },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 1000,
        y: groundY - 40,
        contactHealthChange: -10,
      },
      {
        type: "platform",
        kind: "basicPlatform",
        x: 1200,
        y: groundY - 80,
        hp: 0,
      },

      { type: "goal", kind: "flag", x: 2250, y: groundY },
    ],
  },
];

let currentLevel = LEVELS[0];
let currentLevelIndex = 0;
// === END LEVELS DEFINITIONS ===

// === DEFAULT VALUES FOR EACH "type" AND "kind" OF OBJECT (STUDENT-EDITABLE) ===
const DEFAULT_VALUES = {
  obstacle: {
    spikes: {
      imageUrl: "images/interactable/spikes.png",
      width: 48,
      height: 48,
      hitWidth: 40,
      hitHeight: 44,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: -20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: false,
    },
  },
  enemy: {
    bug: {
      imageUrl: "images/interactable/bug.png",
      width: 75,
      height: 75,
      hitWidth: 75,
      hitHeight: 75,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 75,
      contactHealthChange: -30,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 50,
      hp: 3,
      collect: false,
    },
  },
  powerup: {
    healthUp: {
      imageUrl: "images/interactable/health-up.png",
      width: 32,
      height: 32,
      hitWidth: 32,
      hitHeight: 32,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 32,
      contactHealthChange: +20,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  goal: {
    flag: {
      imageUrl: "images/interactable/flag.png",
      width: 100,
      height: 100,
      hitWidth: 100,
      hitHeight: 100,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: 0,
      contactHealthChange: 0,
      contactScoreChange: +100,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: 0,
      collect: true,
    },
  },
  platform: {
    basicPlatform: {
      imageUrl: "images/interactable/basic-platform.png",
      width: 200,
      height: 50,
      hitWidth: 200,
      hitHeight: 50,
      speedX: 0,
      speedY: 0,
      minY: 0,
      maxY: groundY - 50,
      contactHealthChange: 0,
      contactScoreChange: 0,
      projectileHealthChange: 0,
      projectileScoreChange: 0,
      hp: Infinity,
      collect: false,
    },
  },
};
// === END DEFAULT VALUES ===
