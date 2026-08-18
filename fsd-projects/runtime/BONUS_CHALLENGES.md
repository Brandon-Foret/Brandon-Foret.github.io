# Bonus Challenges

## Overview

This document contains optional bonus challenges to extend the Runtime Neo auto-runner game.

## Challenges

### Challenge 1: Add Additional Kinds for Object Types

- Upload new images for different object types (e.g., power-ups, obstacles)
- In the `levels.js` file, add the new "kind" into the `DEFAULT_VALUES` object
- Update your level game object lists to include the new kinds

### Challenge 2: Make the Game Endless!

- Instead of setting the win condition to be true after completing all levels, loop back to the first level
- Increase the difficulty with each loop by increasing the level speed or even adding more obstacles dynamically

### Challenge 3: Make Obstacles That Move Vertically

- Make use of the `velocityY` and optionally the `minY` and `maxY` properties that objects can be given in `levels.js`.
- Update the `moveGameObjects` function in `student.js` to handle vertical movement.
- This can be done for any type of object.

### Challenge 4: Create More Complex Backgrounds

- Upload new background images to be used in the game
- In the `scenery.js` file, add new scenery layers with different scroll speeds. Feel free to use vertical velocity as well for added effect.
- Try adding scenery _below_ the ground layer to really spruce up the look of the game!

### Challenge 5: Turn Health into a Fuel Gauge!

- To really make the game challenging, turn the health system into a fuel gauge that depletes over time. Players will require power-ups or other means to replenish their fuel.
- One way to do this is to decrease the health variable slightly in the `moveGameObjects` function in `student.js`. A good starting number might be `0.01` per frame.
- You can also adjust make the fuel deplete faster with each level by multiplying the depletion rate by the current level index plus one.
- If you combine this with the endless levels challenge, you may want to add a new variable to `setup.js` to keep track of how many loops the player has completed, and increase the depletion rate based on that. The goal for players then is to see how far they can get before running out of fuel!
