# Runtime Neo 🏃‍➡️

### A multi-level platformer game project using a beginner-friendly JavaScript engine.

**Table of Contents**

- [Before You Start](#before-you-start)
  - [Objective](#objective)
  - [Functions Recap](#functions-recap)
- [Lesson Steps](#lesson-steps)
  - [Work Flow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0: Preview Your Site](#todo-0-preview-your-site-with-live-server)
  - [TODO 1: Add Scenery](#todo-1-add-scenery)
  - [TODO 2: moveScenery](#todo-2-movescenery)
  - [TODO 3: generateLevel](#todo-3-generatelevel)
  - [TODO 4: Create](#todo-4-create)
  - [TODO 5: Filter](#todo-5-filter)
  - [TODO 6: moveGameObjects](#todo-6-movegameobjects)
  - [TODO 7: Customize Your First Level](#todo-7-customize-your-first-level)
  - [TODO 8: handleProjectileCollisions](#todo-8-handleprojectilecollisions)
  - [TODO 9: handleHallebotGenericCollisions](#todo-9-handlehallebotgenericcollisions)
  - [TODO 10: triggerLevelTransition](#todo-10-triggerleveltransition)
  - [TODO 11: Customize Your Second Level](#todo-11-customize-your-second-level)
  - [TODO 12: Make a Third Level from Scratch](#todo-12-make-a-third-level-from-scratch)
  - [TODO 13: Go Live](#todo-13-go-live)

<br><br>

# Before You Start

## **Objective**

Welcome to Runtime Neo! 🎮  
In this project, you will design and program a **multi-level platformer game** using a powerful but beginner-friendly JavaScript engine. You will work with **modular functions**, **game objects**, and **customizable levels** while learning how functions interact to create a playable game world.

By the end of this project, you will:

- Build and customize multiple levels.
- Create objects using reusable factory-style functions.
- Control background parallax motion.
- Manage collisions between HalleBot, enemies, obstacles, and projectiles.
- Trigger level transitions and create fully original stages.

Let’s bring your game to life!

<br><br>

## **Functions Recap**

In this project, you will implement several functions that control the game world. Each function has a clear purpose and will be called automatically by the engine as the game runs.

Below is a quick summary of the function names you will implement:

- moveScenery()
- generateLevel()
- create(obj)
- filterObjects(type)
- moveGameObjects()
- handleProjectileCollisions()
- handleHallebotGenericCollisions()
- triggerLevelTransition()

These functions will be written inside designated sections in **student.js**. All of the functions already exist as empty shells, so your job is to fill in the logic.

<br><br><br><br>

# Lesson Steps

## **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Follow the TODO steps one at a time to gradually build your fully functional game.

---

### Step-by-Step Work Flow

1. 📂 **Open the `student.js` file** inside your Runtime Neo project folder.
2. Carefully read each TODO section and write your code in the designated areas.
3. 🖥️ **Preview your game often with Live Server** to check your progress.

---

### 💡 Key Reminders

- Read each TODO carefully before typing.
- Preview frequently to confirm your game behaves correctly.
- Do **not** edit `main.js` — it contains core logic used by your functions.

---

<br>

### ✅ **Check Your Work!**

After each TODO:

- Ensure the game behaves the way the TODO describes.
- If something looks wrong, re-read the TODO and refresh with Live Server.

<br><br><br><br>

## TODO 0: Preview Your Site with Live Server

🎯 **Goal:** Make sure your project runs in the browser so you can see your game as you develop it.

Follow the same “Right-click index.html → Open with Live Server” workflow as in previous projects.

Confirm:

- The canvas loads
- HalleBot is visible
- The placeholder level displays scenery and objects

<br><br><br><br>

## **TODO 1: Add Scenery**

🎯 **Goal:** Add **background objects** to your levels, such as moons, buildings, and light posts.

---

### Step-by-Step Instructions

1. **🔍 Open the scenery.js file**  
   Locate the building and lamp objects inside it.

2. **Review the starting code for buildings**  
   The building object currently contains only one instance:

   - x: 0
   - width: 100
   - height: 300
   - speedX: -2

3. **Add more building instances**

   - Add new objects to the instances array
   - Vary values for:
     - x (horizontal position)
     - width and height (size of each structure)
     - speedX (scroll speed; negative values move left)

4. **Repeat the process for lamps (light posts)**
   - Add multiple lamp objects
   - Adjust their properties to create depth and parallax variation

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Instances</strong>: Each background element (like a building or lamp) is represented as an object inside its <code>instances</code> array. Adding more instances increases visual variety.<br><br>
      <strong>Properties</strong>: Each instance has properties that define its position, size, and movement speed. Adjusting these values changes how the object appears and behaves in the game world.<br><br>
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Your `building.instances` array contains multiple objects with different sizes and positions.
- Your `lamp.instances` array also contains several varied objects.
- When you preview the game, you see multiple buildings and lamps displayed at the specified positions, but they will not be moving yet.

<br><br><br><br>

## **TODO 2: moveScenery**

🎯 **Goal:** Implement custom **parallax movement** so your background layers (buildings and lamps) scroll across the screen and loop seamlessly.

---

### Step-by-Step Instructions

1. **🔍 Locate the `moveScenery` function**

   - Open **student.js**
   - Find the function named `moveScenery`

2. **Loop through `building.instances`**

   - In `moveScenery`, iterate over the `scenery.building.instances` array.
   - Store the current instance in a variable for easy access via

   ```javascript
   var buildingInstance = scenery.building.instances[i];
   ```

   - For each instance, update its `x` position by adding both the instance’s `speedX` and the `currentLevel.speed` value.

3. **Loop through `lamp.instances`**

   - Repeat the same pattern for the `lamp.instances` array.
   - Loop through each lamp instance and adjust its `x` position with the same logic.

4. **Detect when scenery moves off the left edge**

   - Inside each loop (for both buildings and lamps), add a **conditional** to see when an instance has completely left the screen on the left side.
   - You will know it’s off-screen when:

     - The instance’s right edge (`x` position plus `width`) is **less than 0**.
     - That means the object is no longer visible on the canvas.

5. **Wrap scenery to the right side**

   - When an instance has moved fully off the left side:

     - Reset its `x` position to equal the corresponding `loopWidth` value for each instance type. For example, you would set building instances using the code:

       ```javascript
       buildingInstance.x = scenery.building.loopWidth;
       ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Parallax Movement</strong>: By giving different background objects different <code>speedX</code> values, you create a parallax effect where some layers move slower (farther away) and others move faster (closer to the camera).<br><br>
      <strong>Level Speed</strong>: Adding each instance's <code>speedX</code> to <code>currentLevel.speed</code> lets you increase all scenery movement based on how fast the level is currently scrolling.<br><br>
      <strong>Wrap-Around Logic</strong>: Checking when an object has moved fully off the screen (for example, when <code>x + width &lt; 0</code>) and then moving it to the right side creates a continuous, looping background.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- When you preview the game:
  - Buildings and lamps **continuously scroll** across the screen, and
  - Different `speedX` values create a clear **parallax effect**.
- When a building or lamp moves completely off the left side, it reappears on the right side rather than disappearing forever.

<br><br><br><br>

## **TODO 3: generateLevel**

🎯 **Goal:** Write the function that reads the current level’s data and creates every game object defined in it.

---

### Step-by-Step Instructions

1. **🔍 Locate the `generateLevel` function**

   - Open **student.js**
   - Find the function named `generateLevel`

2. **Loop through `currentLevel.gameObjects`**

   - Inside `generateLevel`, create a loop that goes through the `currentLevel.gameObjects` array.

3. **Store the current object in a variable**

   - Inside the loop, store the current game object in a variable called `currentObject`.

4. **Create the object with `create(currentObject)`**

   - Still inside the loop, call the `create` function and pass in the current object as an argument.

5. **Log object details to check your work**

   - To confirm every object is being processed, `console.log` the `type` and `kind` of each object.

   - After checking your work below, you should remove or comment out these logs.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Level Data</strong>: The <code>currentLevel.gameObjects</code> array contains every object that should appear in the level (players, enemies, platforms, scenery, etc.). Each entry is a data object describing what to create.<br><br>
      <strong>Array Iteration</strong>: A loop lets you visit each item in <code>gameObjects</code> and apply the same action to all of them.<br><br>
      <strong>Debug Logging</strong>: Printing <code>currentObject.type</code> and <code>currentObject.kind</code> helps verify that no objects are being skipped during level generation.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Inside of your loop, `console.log` each object's `type` and `kind`
- When you run the game and open the console, you should see a complete list of all object types and kinds defined in the level.

<br><br><br><br>

## **TODO 4: Create**

🎯 **Goal:** Complete the `create(obj)` function to make new objects appear on screen.

---

### Step-by-Step Instructions

1. **🔍 Locate the `create` function**

   - Open **student.js**
   - Find the function named `create`
   - This function should take **one argument**, the object being created.

2. **Check the object’s `type`**

   - Inside `create`, check the `type` property of the passed-in argument.
   - Use a series of conditionals to check which type it matches.
   - The possible types are:
     - `"obstacle"`
     - `"enemy"`
     - `"powerup"`
     - `"goal"`
     - `"platform"`

3. **Call the corresponding `make` function**

   - For each possible type, call the appropriate "make" function, which is something we call a factory function.
   - The available `make` functions correspond directly to the types listed above.
   - Pass the entire object into the function so it has all the data it needs.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Factory Pattern</strong>: The <code>create</code> function decides which specialized builder function should handle each object.<br><br>
      <strong>Conditional Statements</strong>: Using <code>if</code> or <code>else if</code> statements lets you run different code depending on what <code>type</code> the object has.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Open your game in the browser.
- When you generate a level, all objects in your current level should now appear in the game correctly.

<br><br><br><br>

## **TODO 5: Filter**

🎯 **Goal:** Write `filterObjects(type)` to return a list of objects that match the given type.

---

### Step-by-Step Instructions

1. **🔍 Locate the `filterObjects` function**

   - Open **student.js**
   - Find the function named `filterObjects`
   - This function should receive one argument: the type you want to filter for.

2. **Create an empty array to store the matches**

   - Inside the function, start by creating a new array.

3. **Loop over all game objects**

   - Use a loop to go through `gameObjects` one by one.

4. **Check the object’s type**

   - Inside the loop, check whether the current object’s `type` matches the type passed into the function.
   - If it matches, add it to your new array.

5. **Return the result**

   - After the loop finishes, return your new array.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Filtering</strong>: Filtering means taking a larger set of data and selecting only the pieces that meet specific criteria.<br><br>
      <strong>Type Matching</strong>: Many game engines use a <code>type</code> property to categorize objects (enemies, platforms, goals, etc.). Filtering by type lets you work with specific groups easily.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Add a `console.log` statement inside `filterObjects` to print the contents of the array you are returning.
- When you run the game, you should see arrays of objects printed to the console. If you click on them to expand them, you should see that all objects in each array share the same `type` value.
- Be sure to delete or comment out the `console.log` statements after checking your work!

<br><br><br><br>

## **TODO 6: moveGameObjects**

🎯 **Goal:** Make all objects actually move by updating their positions based on their speed and the level's scrolling speed!

---

### Step-by-Step Instructions

1. **🔍 Locate the `moveGameObjects` function**

   - Open **student.js**
   - Find the function named `moveGameObjects`
   - This function should take **one argument**: an array of game objects.

2. **Loop through the array of objects**

   - Inside the function, write a loop that iterates over the array you receive.

3. **Store the current object in a variable**

   - Inside the loop, store the current object in a variable for easy access.

4. **Update the object’s position**

   - Modify the object’s position by:
     - Adding the object’s speed to the current position
     - Subtracting the level’s speed from the current position

> **Note:** This creates the effect of the object moving in the world while the level scrolls left. A negative object speed means it moves left relative to the ground. A positive level speed means HalleBot is moving right, so we subtract it to simulate the world moving left.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Object Movement</strong>: Each object moves based on its own speed value, which controls how quickly it travels in the world.<br><br>
      <strong>Level Scrolling</strong>: Subtracting <code>currentLevel.speed</code> pulls all objects left, creating the effect that the player is moving through the world.<br><br>
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- When you run the game, objects on the screen now move smoothly.
- Faster objects move further each frame; slower objects move less.
- All objects should be moving now unless you set their speed to equal the level speed.

<br><br><br><br>

## **TODO 7: Customize Your First Level**

🎯 **Goal:** Update `levels.js` so that **Level 1** now has your own custom layout!

---

### Step-by-Step Instructions

1. **🔍 Locate Level 1 in `levels.js`**

   - Open **levels.js**
   - Find the level object whose name corresponds to **"Level 1"**
   - Inside that level, look for the **`gameObjects`** array; this is where all the objects for the level are defined.

2. **Add (and update) required objects to `gameObjects`**

   - Inside the Level 1 `gameObjects` array, make sure you have at least:
     - **3 obstacles**
     - **3 platforms**
     - **2 powerups**
     - **3 enemies**
     - **Exactly 1 goal**
   - Each entry in `gameObjects` should describe a single object in your level (for example, an enemy, a platform, or a pickup).
   - Use the `type` field to specify what each object is (such as `"enemy"` or `"platform"`), the `kind` field to specify the specific kind of that type (such as `"spikes"` or `"healthUp"`), and adjust its properties (like `x`, `y`, `width`, etc.) to place it where you want it in the level.

   > **HINT:** _(You can copy and edit existing objects, then change their type, position, and properties.)_

3. **Place the goal at the end of the level**

   - Your **single goal object** should be placed near the end of the level so the player has to travel through your level to reach it.
   - Make sure there is **only one** goal in Level 1’s `gameObjects` array.

4. **Optionally customize the level name and speed**

   - Inside the Level 1 configuration, look for fields that control:
     - The **name** of the level (for example, `"Level 1"`)
     - The **speed** of the level (how fast the world scrolls)
   - Change the name to something that fits your theme, if you’d like.
   - Adjust the speed to make the level feel slower or faster. A higher speed will make everything scroll more quickly.

---

### Object Properties Reference

Use this table to help customize how each object behaves in your level.

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">Property</th>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">Description</th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>width</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How wide the object is in the game world.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>height</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How tall the object is in the game world.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>hitWidth</code></td>
    <td style="padding: 10px; color: #e2e2e2;">The width of the object's hitbox (used for collision). This can be smaller or larger than the object actually appears.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>hitHeight</code></td>
    <td style="padding: 10px; color: #e2e2e2;">The height of the object's hitbox. Can be different from the visual height to adjust how collisions feel.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>speedX</code></td>
    <td style="padding: 10px; color: #e2e2e2;">Horizontal speed of the object. Positive values move it to the right (or make it go slower if the level is fast); negative values move it to the left.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>speedY</code></td>
    <td style="padding: 10px; color: #e2e2e2;">Vertical speed of the object. Positive values move it down; negative values move it up.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>minY</code></td>
    <td style="padding: 10px; color: #e2e2e2;">The minimum <code>y</code> position for objects that move up and down. The object should not move above this value.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>maxY</code></td>
    <td style="padding: 10px; color: #e2e2e2;">The maximum <code>y</code> position for objects that move up and down. The object should not move below this value.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>contactHealthChange</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How the player's health changes when colliding with this object. Negative values damage Hallebot; positive values heal.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>contactScoreChange</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How the player's score changes when colliding with this object. Positive values reward points; negative values can subtract points.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>projectileHealthChange</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How the player's health changes when the object is destroyed by a projectile. This can be used for hazards or powerups that can be activated from a distance.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>projectileScoreChange</code></td>
    <td style="padding: 10px; color: #e2e2e2;">How the player's score changes when the object is destroyed by a projectile.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>hp</code></td>
    <td style="padding: 10px; color: #e2e2e2;">The object's health. <code>0</code> means projectiles pass through without affecting it; a positive number means it can be destroyed after that many hits; <code>Infinity</code> can be used for indestructible objects.</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;"><code>collect</code></td>
    <td style="padding: 10px; color: #e2e2e2;">Controls whether the object disappears when Hallebot collides with it. <code>true</code> means it is collected/removed; <code>false</code> means it stays in the world.</td>
  </tr>
</table>

---

### Type and Kind Reference

At the moment, there is only one "kind" available for each "type," but you can always add in additional kinds later for more variety by uploading new assets and updating the engine code. See the Bonus Challenges for more info! Below are the available types and their kinds without completing the challenges.

<table style="width: 50%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">Type</th>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">Kind</th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">obstacle</td>
    <td style="padding: 10px; color: #e2e2e2;">spikes</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">enemy</td>
    <td style="padding: 10px; color: #e2e2e2;">bug</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">powerup</td>
    <td style="padding: 10px; color: #e2e2e2;">healthUp</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">goal</td>
    <td style="padding: 10px; color: #e2e2e2;">flag</td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">platform</td>
    <td style="padding: 10px; color: #e2e2e2;">basicPlatform</td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- In `levels.js`, Level 1’s `gameObjects` array includes:
  - At least **3 obstacles**
  - At least **3 platforms**
  - At least **2 powerups**
  - At least **3 enemies**
  - **Exactly 1 goal** placed near the end of the level
- Each object uses appropriate properties (such as `width`, `height`, `speedX`, `contactHealthChange`, etc.) to control its size, movement, and behavior.
- When you run the game:
  - You can clearly see your custom layout.
  - The player must travel through your designed level to reach the goal.
  - Enemies and powerups will _not_ interact with HalleBot or projectiles yet — that comes in the next steps!

<br><br><br><br>

## **TODO 8: handleProjectileCollisions**

🎯 **Goal:** Write the function that checks when projectiles hit objects.

When you finish this TODO, Hallebot should be able to shoot obstacles and destroy them if they have a positive `hp` value.

---

### Step-by-Step Instructions

1. **🔍 Locate the `handleProjectileCollisions` function**

   - Open **student.js**
   - Find the function named `handleProjectileCollisions`
   - This is where you will check for collisions between projectiles and game objects.

2. **Loop through all game objects**

   - Inside `handleProjectileCollisions`, write a loop that iterates over `gameObjects`.
   - Use `i` as the counting variable for this loop.
   - On each loop, you should be working with a single game object.

3. **Store the current game object**

   - Inside the game objects loop, create a variable named `currentObject` and store the game object at index `i` in it.

4. **Loop through all projectiles**

   - Still inside the game objects loop, write another loop to go through the `projectiles` array.
   - Use `j` as the counting variable for this inner loop.
   - On each inner loop, you will be working with a single projectile.

5. **Store the current projectile**

   - Inside the inner loop, create a variable named `currentProjectile` and store the projectile at index `j` in it.

6. **Check for a collision between projectile and object**

   - For each pair of `currentProjectile` and `currentObject`, use a conditional to check if they are colliding.
   - Call the helper function `isCollidingWithProjectile(currentProjectile, currentObject)` inside your conditional, which will tell you if the projectile hits the object.
   - If this function returns `true`, it means the projectile has hit the object.
   - At this point, your code should look roughly like this:

   ```js
   for (... ) { // loop over game objects
       var currentObject = ...; // get current object
       for ( ... ) { // loop over projectiles
           var currentProjectile = ...; // get current projectile
           if (isCollidingWithProjectile(currentProjectile, currentObject) === true) {
               // Handle collision here
           }
       }
   }
   ```

7. **Handle the collision**

   - When a collision is detected (the condition is true), call the helper function `handleProjectileObjectCollision(i, j)`. This function will handle damage and score calculations for you.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Nested Loops</strong>: Using a loop inside another loop lets you compare every projectile to every game object. The outer loop uses <code>i</code>, the inner loop uses <code>j</code>.<br><br>
      <strong>Collision Detection</strong>: The helper function <code>isCollidingWithProjectile(projectile, object)</code> checks whether a projectile is overlapping a game object, based on their positions and sizes.<br><br>
      <strong>Collision Handling</strong>: Once a collision is found, calling <code>handleProjectileObjectCollision(i, j)</code> applies the result (such as reducing <code>hp</code>, updating score, or removing the object/projectile).<br><br>
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- When you run the game:
  - Hallebot’s projectiles can hit obstacles and other objects.
  - Objects with positive <code>hp</code> are damaged and can be destroyed by projectiles.
  - Objects with <code>hp = 0</code> are unaffected and let projectiles pass through.
- Visually, you should see obstacles disappear or change state when shot, confirming that collisions are being handled correctly.

<br><br><br><br>

## **TODO 9: handleHallebotGenericCollisions**

🎯 **Goal:** Detect collisions between HalleBot and most objects.

---

### Step-by-Step Instructions

1. **🔍 Locate the `handleHallebotGenericCollisions` function**

   - Open **student.js**
   - Find the function named `handleHallebotGenericCollisions`

2. **Loop through all game objects**

   - Write a loop that iterates through `gameObjects` using `i` as the counting variable.
   - Inside the loop, create a variable named `currentObject` to store the game object at index `i`.

3. **Skip platforms**

   - Before checking collisions, write a conditional that tests whether the object’s `type` is **not** `"platform"`. Platforms are handled separately by the engine, so we want to ignore them here.

4. **Check for a generic collision**

   - Inside the conditional of step 3, write a **second, separate** conditional that checks whether  
     `isGenericCollision(currentObject)`  
     is `true`.

5. **Handle the collision**

   - If both conditions are true (the object is not a platform _and_ HalleBot is colliding with it), call:
     `handleHallebotGenericCollision(i)`

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Object Types</strong>: Different object types behave differently. Platforms use special collision logic, so we ignore them here.<br><br>
      <strong>Separate Conditionals</strong>: We use two <code>if</code> statements to check multiple conditions. There are other ways to do this, but we haven’t introduced them yet.<br><br>
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- When you run the game:
  - HalleBot now takes damage, gains score, or collects powerups when touching them.
  - Platforms still behave normally and are unaffected by this TODO.

<br><br><br><br>

## **TODO 10: triggerLevelTransition**

🎯 **Goal:** Move to the next level when HalleBot reaches an end marker and complete the game if all levels are finished!

---

### Step-by-Step Instructions

1. **🔍 Locate the `triggerLevelTransition` function**

   - Open **student.js**
   - Find the function named `triggerLevelTransition`

2. **Increase the level index**

   - Inside the function, increase the value of `currentLevelIndex` by `1`.

3. **Update `currentLevel`**

   - Set `currentLevel` equal to the level at the new index inside the `levels` array.

4. **Reset the gameObjects array**

   - Before generating the next level, set `gameObjects` to an empty array. This clears all objects from the previous level.

5. **Check if the player reached the final level**

   - After resetting the `gameObjects` array, check if `currentLevelIndex` is greater than or equal to `levels.length`.
   - If it is, that means there are no more levels left.
   - In that case, set `player.winConditionMet` to `true` to mark that the player has completed the game.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Level Indexing</strong>: <code>currentLevelIndex</code> keeps track of which level the player is currently on. Increasing it points to the next level.<br><br>
      <strong>Level Data</strong>: Each level’s layout and settings come from the <code>levels</code> array. Updating <code>currentLevel</code> swaps in the new configuration.<br><br>
      <strong>Resetting State</strong>: Clearing <code>gameObjects</code> ensures old objects don’t carry over into the next level.<br><br>
      <strong>Win Condition</strong>: If the player moves past the last level in the list, <code>player.winConditionMet</code> is set to <code>true</code> to indicate victory.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Completing a level causes the game to load the next one.
- `currentLevelIndex` increases exactly once per goal reached. Check the HUD to make sure the level name updates correctly.
- If completing a level that isn't the last level, you should see the new level's objects appear and scenery moving at the new level's speed.
- When the index moves past the final level, `player.winConditionMet` becomes `true` and you should see a victory message.

<br><br><br><br>

# TODO 11: Customize Your Second Level

🎯 **Goal:** Modify the second level using everything you’ve learned.

---

### Step-by-Step Instructions

1. **🔍 Locate Level 2 in `levels.js`**

   - Open **levels.js**
   - Find the level object whose name corresponds to **"Level 2"**
   - Inside that level, look for the **`gameObjects`** array; this is where all the objects for the level are defined.

2. **Add (and update) required objects to `gameObjects`**

   - Inside the Level 2 `gameObjects` array, make sure you have at least:
     - **5 obstacles**
     - **4 platforms**
     - **3 powerups**
     - **5 enemies**
     - **Exactly 1 goal**

   > **REMINDER:** _(You can copy and edit existing objects, then change their type, position, and properties.)_

3. **Optionally customize the level name and speed**
   - Inside the Level 2 configuration, look for fields that control:
     - The **name** of the level (for example, `"Level 2"`)
     - The **speed** of the level (how fast the world scrolls)
   - Change the name to something that fits your theme, if you’d like.
   - Adjust the speed to make the level feel slower or faster. A higher speed will make everything scroll more quickly.

---

<br>

### ✅ **Check Your Work!**

- In `levels.js`, Level 2’s `gameObjects` array includes:

  - At least **5 obstacles**
  - At least **4 platforms**
  - At least **3 powerups**
  - At least **5 enemies**
  - **Exactly 1 goal** placed near the end of the level

- When running your game, complete the first level and verify that Level 2 loads correctly with your custom layout and objects.

<br><br><br><br>

# TODO 12: Make a Third Level from Scratch

🎯 **Goal:** Create an original level that is entirely your own!

---

### Step-by-Step Instructions

1. **Create Level 3 in `levels.js`**
   - Open **levels.js** and go to the bottom of your `levels` array.
2. **Add a new level object with the following properties:**

   - `name`: A unique name for your level (e.g., `"Level 3: The Final Challenge"`).
   - `speed`: Set a scrolling speed for your level.
   - `gameObjects`: An array where you will define all the objects in your level.

3. **Populate the `gameObjects` array with at least:**

   - **7 obstacles**
   - **5 platforms**
   - **4 powerups**
   - **6 enemies**
   - **Exactly 1 goal**

   > **TIP:** Use the object properties and type/kind references from TODO 7 to help you define each object.

---

<br>

### ✅ **Check Your Work!**

- In `levels.js`, Level 3’s `gameObjects` array includes:
  - At least **7 obstacles**
  - At least **5 platforms**
  - At least **4 powerups**
  - At least **6 enemies**
  - **Exactly 1 goal** placed near the end of the level
- When running your game, complete Levels 1 and 2 to verify that Level 3 loads correctly with your custom layout and objects.

<br><br><br><br>

## Explore Bonus Challenges

We've compiled a list of optional **bonus challenges** for you to take this project to the next level.

- Access them on [GitHub here](https://github.com/OperationSpark/runtime-neo/blob/master/BONUS_CHALLENGES.md)

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 13: Go Live**

🎯 **Goal:** Push your changes to GitHub and make your bouncing box game go live.

---

### Step-by-Step Instructions

1. **Open the terminal in your codespace**

   - If the terminal isn’t visible, click the **Hamburger Menu > Terminal > New Terminal**.

2. **Enter the following commands one by one** in the terminal, pressing enter after each command to run it:

   ```bash
   git add .
   git commit -m "completed runtime-neo project"
   git push
   ```

3. **Wait a few minutes for the changes to go live at your-username.github.io.**

---

<br>

### ✅ **Check Your Work!**

- Visit the site `your-github-username.github.io` to see your website live on the internet. If it doesn’t appear immediately, wait a few minutes and try refreshing your page.
  - Make sure to replace the text `"your-github-username"` with your actual github username when entering the URL in your browser.
- Navigate to your Bouncing Box link on your Portfolio page to ensure it is live on the web.
  - You might need to refresh your page for your changes to appear.

<br>
<hr>
<br>

# 🎉🎉🎉 Congratulations!

You’ve built a full Runtime Neo multi-level platformer!  
Your game now includes custom scenery, moving objects, collisions, and complete level transitions.  
Share your creation and challenge friends to beat your levels! 🎉🎉🎉
