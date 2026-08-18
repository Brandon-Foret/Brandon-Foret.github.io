# Bouncing Box

### Continue Building Your Game Dev Skills: Code Your Own Animated Box Adventure

**Table of Contents**

- [Overview](#overview)
  - [Takeaways](#takeaways)
  - [More About jQuery](#a-note-on-jquery)
- [Lesson Steps](#lesson-steps)
  - [Work Flow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0: Preview Your Site with Live Server](#todo-0-preview-your-site-with-live-server)
  - [TODO 1: Experiment with Moving the Box](#todo-1-experiment-with-moving-the-box)
  - [TODO 2: Set Up Variables to Move the Box](#todo-2-set-up-positionx-to-move-the-box)
  - [TODO 3: Reset Box When Clicked](#todo-3-reset-positionx-and-display-initial-text-on-box-click)
  - [TODO 4: Keeping Score](#todo-4-set-up-and-update-the-score)
  - [TODO 5: Speeding Up](#todo-5-speeding-up)
  - [TODO 6: Make the Box Bounce (part 1)](#todo-6-make-the-box-bounce-off-the-right-side)
  - [TODO 7: Make the Box Bounce (part 2)](#todo-7-make-the-box-bounce-off-the-left-side)
  - [TODO 8: Fix a bug!](#todo-8-fix-the-speed-bug-with-a-linear-formula)
  - [TODO 9: Go Live](#todo-9-go-live)

# Overview

In this project, you’ll create a simple game where a box moves across the screen, increasing in speed with each click.

This project will introduce you to several core programming concepts:

- Using variables to store data
- Using `if` statements to make conditional changes in the game
- Basic principles of animation
- Event handling in JavaScript (with jQuery)

<br>
<br>
<br>

### **A Note on jQuery**

<details>
<summary>Optional: Read if you’re curious about jQuery</summary>

In this project, we use [jQuery](https://jquery.com), a popular JavaScript library that simplifies web development tasks. You might notice jQuery code such as:

```javascript
var box = jQuery(".box");
var board = jQuery(".board");
var boardWidth = board.width();
```

These lines pull HTML elements into JavaScript using jQuery selectors and methods, making it easier to manipulate the page. Although you aren’t required to know jQuery for this course, feel free to explore the [jQuery documentation](https://jquery.com) if you’re interested!

</details>

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

# Lesson Steps

## **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Learn how to follow the steps in this lesson to build and customize your game one step at a time.

---

### Step-by-Step Work Flow

1. 📂 **Open your Bouncing Box project's `index.html` file** in your codespace to get started.

   - 🔍 Locate the file tree (the list of files and folders) in the left panel of your codespace.
   - Click the `fsd-projects` folder 📂 in your file tree to expand the list of projects.
   - Click on the `bouncing-box` folder 📂 located within the `fsd-projects` folder.
   - Click on the `index.html` file located within the `bouncing-box` folder 📂. **_Coding for all steps will be done in this file._**

2. 🖥️ **Preview your game regularly using Live Server** to see how your changes affect the game level.

3. **Important Note**: _None of the code provided in these instructions should be copied and pasted into your project_.
   - All code snippets are examples meant to guide you in writing your own code, and simply provide a general description of what changes happen throughout the program.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Key Reminders
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      - 📖 Read each step closely before adding any code.<br>
      - 🖥️ Preview frequently to make sure your game is structured the way you would like it.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **After each TODO**, double-check your code to ensure it matches the examples.
- If you encounter issues, **preview your site** using Live Server to troubleshoot.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 1: Experiment with Moving the Box**

🎯 **Goal:** Learn how to move the box by calling functions in the `update` function (lines 82-87 in index.html).

---

### Step-by-Step Instructions

1. **🔍 Locate the `update` function declaration** (around line 82 in the index.html file)

2. **Inside the function's code block** (between the { } curly braces):

   - Call the `moveBoxTo` function, and pass in the number `200` as an argument.:
     ```javascript
     moveBoxTo(200); // Moves box to x-position 200
     ```

3. **Call moveBoxTo with different arguments**

   - Replace the value 200 with a different number. After changing the number, use live server to preview the changes and see the effect.

   - Try it out with several different numbers to see how the box moves. Some numbers you could use are `450` or `-20`. Each time you modify the number, preview your game to see how the box moves to that position.

   - **Finally, replace the number with the variable `boardWidth`. Use live server to preview the changes.**

     ```javascript
     moveBoxTo(boardWidth); // Moves box to right edge
     ```

     **Important Note**: You should only call the `moveBoxTo` function once in the `update` function.

4. **Understanding function arguments**:
   - The number you pass to `moveBoxTo()` determines the box's horizontal position
   - `boardWidth` is a variable representing the screen's right edge

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>moveBoxTo</strong>: A function that moves the box by updating its <code style="color: #79c0ff;">left</code> CSS value along the x-axis.<br><br>
      <strong>boardWidth</strong>: A variable that represents the total width of the game area. Calling <code style="color: #79c0ff;">moveBoxTo(boardWidth)</code> places the box at the right edge.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server after each call to `moveBoxTo` to see how it updates the box’s position.
- Ensure your box is on the right side of the screen before moving on to the next TODO.
- Ensure your final code in this TODO calls `moveBoxTo(boardWidth);` as a placeholder for future steps.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 2: Set Up `positionX` to Move the Box**

🎯 **Goal:** Create a variable to track the box’s x-position, then use it to move the box within the game.

---

### Step-by-Step Instructions

1. **Define the `positionX` Variable**

   - 🔍 Locate the section where variables are created.
     - **Hint**: Declare your variables below the comment that says `// Variable declarations below here`
   - Create a variable called `positionX` and set it to `0`. This variable will store the x-position of the box on the screen.

     - **Hint**: To declare a variable, use the following structure/syntax:

       ```javascript
       var exampleVariable = 5;
       ```

     - Apply this structure to create `positionX` with an initial value of `0`.

2. **Update `positionX` in the `update` Function**

   - 🔍 Locate the `update` function declaration.
   - Inside the `update` function’s code block, add `10` to `positionX` to move the box to the right:
     - **Hint**: To increment a variable, you can use either of these methods:
       ```javascript
       variableName = variableName + 10; // Adds 10 to variableName
       ```
       ```javascript
       variableName += 10; // Increases variableName by 10
       ```
   - **Important**: The `+=` operator is a shorthand for adding a value to a variable, and is commonly used in coding to keep score or to count repetitive actions.

3. **Update Your `moveBoxTo` Function Call**
   - In the same `update` function, update the `moveBoxTo` function call by replacing the `boardWidth` variable with your new `positionX` variable. This way, the box’s x-position will update dynamically when `positionX` is changed.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>🔄 update</strong>: The <code style="color: #79c0ff;">update</code> function runs 20 times per second, creating a continuous loop for your game. Place any code that should run constantly, like moving the box, inside this function.<br><br>
      <strong>⬆️ Incrementing Variables</strong>: To increase a variable’s value by a specific amount, use this pattern:<br>
      <code style="color: #79c0ff;">variableName = variableName + amount;</code><br>
      This pattern is common in coding, especially in games, as it allows a player’s position or score to be updated repeatedly over time.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview the game** in Live Server to confirm the box is moving to the right constantly.
  - The box will keep moving to the right and go past the edge of the screen since `positionX` is constantly increasing. You’ll add a fix for this in a later step.
- Ensure your code calls `moveBoxTo(positionX);` in the `update` function so the box’s position is updated continuously.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 3: Reset `positionX` and Display Initial Text on Box Click**

🎯 **Goal:** Make the box return to the starting position and update the text on the box whenever it’s clicked.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `handleBoxClick` Function Declaration**

   - It can be found below the `update` function.

2. **Reset `positionX` to `0` in `handleBoxClick`**

   - Inside the `handleBoxClick` function, re-assign `positionX` to `0` to reset the box’s x-position.
   - **Reminder**: Since `positionX` was already declared earlier in your code, there’s no need to use the `var` keyword here—just reassign `positionX` directly to `0`.

3. **Display Text on the Box**

   - Below the line where you reset `positionX`, add a call to the `changeBoxText()` function with an argument of `0`. This will display `0` on the box to represent the starting score.

4. **Placeholder Value Reminder**
   - For now, `0` is just a **placeholder**; in the next TODO, you’ll replace it with a variable so the score on the box can change whenever the box is clicked.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>📥 handleBoxClick</strong>: The <code style="color: #79c0ff;">handleBoxClick</code> function executes whenever the box is clicked, due to an event listener tied to the box. Code within this function will only run in response to the box being clicked.
      <br><br>
      <strong>changeBoxText</strong>: This function displays a number or text on the box. By calling it with <code style="color: #79c0ff;">changeBoxText(0)</code>, the box will display <code style="color: #79c0ff;">0</code> when clicked, representing the starting score.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server, click the box, and confirm that it:
  - Resets to the left side of the screen, and
  - Displays the number `0`.
- Make sure the `handleBoxClick` function contains code to reset `positionX` and call `changeBoxText(0)`.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 4: Set Up and Update the Score**

🎯 **Goal:** Create a score-tracking variable that increases each time the box is clicked and displays the current score on the box.

---

### Step-by-Step Instructions

1. **Create the `points` Variable**

   - 🔍 Locate the section where the `positionX` variable is declared.
   - Below `positionX`, create a variable called `points` and set it to `0`. This variable will store the number of times the box has been clicked.

2. **Update `changeBoxText` to Use `points`**

   - 🔍 Locate the `changeBoxText` function call inside the `handleBoxClick` function
   - Update the `changeBoxText()` call by replacing the value `0` with the `points` variable. This way, the box will display the current score.

3. **Increment the `points` Variable on Each Click**
   - Inside `handleBoxClick`, add a line of code that increases `points` by `1`.
   - **Hint**: To increment a variable, you can use either of these methods:
     ```javascript
     variableName = variableName + 1; // Adds 1 to variableName
     ```
     ```javascript
     variableName++; // Increases variableName by 1
     ```
   - **Important**: The `++` operator is a shorthand for adding `1` to a variable, and is commonly used in coding to keep score or to count repetitive actions.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>changeBoxText</strong>: This function changes the text displayed on the box based on the number passed to it. By passing <code style="color: #79c0ff;">points</code> as its argument, we dynamically update the box’s display to show the current score each time the box is clicked.<br><br>
      <strong>📈 Incrementing Variables</strong>: Incrementing a variable (like <code style="color: #79c0ff;">points</code>) allows it to increase each time the code runs. This technique is common in games to keep score or track repeated actions.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server, click the box, and confirm that:
  - The displayed score on the box increases by `1` with each click.
  - The score persists on the box even after multiple clicks.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 5: Speeding Up**

🎯 **Goal:** Increase the speed of the box each time it is clicked to make the game more challenging.

---

### Step-by-Step Instructions

1. **Create a `speed` Variable**

   - 🔍 Locate the section where the `positionX` and `points` variables are declared.
   - Below `points`, create a variable called `speed` and set it to `10`. This variable will control how fast the box moves across the screen.

2. **Use `speed` to Replace the Hard-Coded Value in `update`**

   - 🔍 Locate the `update` function where `positionX` is increased by `10`.
   - Replace the hardcoded value `10` with the `speed` variable:
     ```javascript
     positionX = positionX + speed;
     ```
   - **Explanation**: By using the `speed` variable, the box’s speed can now be changed.

3. **Increase `speed` Each Time the Box is Clicked**
   - Inside `handleBoxClick`, add a line of code that increases `speed` by `3`.
   - **Hint**: To increase a variable by a set amount, you can use either of these methods:
     ```javascript
     variableName = variableName + 3; // Adds 3 to variableName
     ```
     ```javascript
     variableName += 3; // Another way to add 3 to variableName
     ```
   - **Important**: The `+=` operator is a shorthand for adding a value to a variable, and is commonly used in coding to keep score or to count repetitive actions.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Dynamic Variables</strong>: By using a variable like <code style="color: #79c0ff;">speed</code> instead of a hard-coded number, we can adjust the box’s speed throughout the game.<br><br>
      <strong>Variable Incrementing</strong>: The <code style="color: #79c0ff;">+=</code> operator is a shorthand for increasing a variable by a specific value. It’s commonly used to adjust variables in games, making interactions more dynamic.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview the game** in Live Server, click the box, and confirm that the box's speed increases with each click.
- If you find a bug or something doesn’t work as expected, review earlier TODOs for hints, explanations, and fixes.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 6: Make the Box Bounce off the Right Side**

🎯 **Goal:** Prevent the box from moving off the screen by making it bounce back in the opposite direction when it reaches the right edge.

---

### Step-by-Step Instructions

1. **🔍 Locate the `update` Function**

2. **Set Up an `if` Statement for the Right Boundary**

   - We want to stop the box from moving off the right side of the screen. Write an `if` statement that will run when `positionX`, which represents the location of the box, moves the box too far to the right.
   - **Fill in the Blank**: Add an `if` statement to check if `positionX` is greater than `boardWidth`.
     ```javascript
     if (positionX _____ boardWidth) {
       // Code to reverse speed goes here
     }
     ```
   - **Hint**: Think about which comparison operator (`>`, `<`) should go in the blank to check if `positionX` has gone past the right boundary. If you're not sure which operator to use, try and test both.

3. **Reverse `speed` to Make the Box Change Directions**
   - Inside the `if` statement's code block, make the box move in the opposite direction by changing `speed` to its opposite value. Multiply `speed` by `-1` to reverse it.
   - **Hint**: To multiply `speed` by `-1`, you can use **either** of the methods below. Both are valid, but the shorthand version (`*=`) is more commonly used in practice.
     ```javascript
     speed = speed * -1;
     ```
     ```javascript
     speed *= -1;
     ```
   - **Explanation**: Multiplying `speed` by `-1` changes its direction, causing the box to move left instead of continuing right.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Boundary Detection</strong>: By using <code style="color: #79c0ff;">boardWidth</code> as a reference for the right side of the screen, we can check when <code style="color: #79c0ff;">positionX</code> has moved too far.<br><br>
      <strong>Direction Reversal</strong>: Multiplying <code style="color: #79c0ff;">speed</code> by <code style="color: #79c0ff;">-1</code> flips its direction, making the box move in the opposite direction along the x-axis.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server, and observe what happens when the box reaches the right side of the screen.
  - Does the box change direction and move left when it reaches the right edge?
- Confirm that your `if` statement correctly detects the boundary and reverses `speed`.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 7: Make the Box Bounce off the Left Side**

🎯 **Goal:** Prevent the box from moving off the screen by making it bounce back when it reaches the left edge.

---

### Step-by-Step Instructions

1. **🔍 Locate the `update` Function**

2. **Set Up an `if` Statement for the Left Boundary**

   - **Below the first `if` statement's code block**, add a second `if` or an `else if` statement to detect when `positionX` has moved too far to the left.
   - **Fill in the Blank**: Choose the correct comparison operator that will check if `positionX` is less than `0`. Choose either example below to use as a model for this step:
     ```javascript
     if (positionX _____ 0) {
       // Code to reverse speed goes here
     }
     ```
     ```javascript
     else if (positionX _____ 0) {
       // Code to reverse speed goes here
     }
     ```
   - **Hint**: Think about which comparison operator (`>`, `<`) should go in the blank to detect if `positionX` has reached the left boundary.

3. **Reverse `speed` to Make the Box Turn Around**
   - Inside the new `if` statement’s code block, reverse the box’s direction by changing `speed` to its opposite value. Multiply `speed` by `-1` to reverse it:
     ```javascript
     speed *= -1;
     ```
   - **Explanation**: This reversal will make the box turn around whenever it reaches the left edge of the screen.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Boundary Detection</strong>: Setting <code style="color: #79c0ff;">positionX &lt; 0</code> checks if the box has moved too far left, reaching the boundary.<br><br>
      <strong>Direction Reversal</strong>: Multiplying <code style="color: #79c0ff;">speed</code> by <code style="color: #79c0ff;">-1</code> flips its direction, making the box move in the opposite direction.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server, and observe what happens when the box reaches the left side of the screen.
  - Does the box change direction and move right when it reaches the left edge?
- Confirm that your `if` statement correctly detects the boundary and reverses `speed`.

<br><br>

### 🐛 **Find a Bug**

- There is currently a small bug 🐛 in your game.
- Click on the box 2-3 times when it is moving to the right. You should notice it get faster.
- Next, click on the box when it is moving to the left, **after** it has already bounced off the right wall.
  - _What do you notice after clicking the box 2-3 times when it is moving left?_
  - _Why does it make sense mathematically that the box slows down in this manner?_
- This bug 🐛, where the box slows down when clicked, will be fixed in the next (and final) TODO.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 8: Fix the Speed Bug with a Linear Formula**

🎯 **Goal:** Use a formula to make `speed` increase in a consistent, predictable way based on the number of clicks.

In this TODO, we’ll fix the `speed` bug 🐛 by calculating `speed` using a linear formula. This approach is based on the equation `y = mx + b`.

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📐 Understanding Algebraic Connections
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      The formula <code style="color: #79c0ff;">speed = 3 * points + 10</code> is based on the linear equation <code style="color: #79c0ff;">y = mx + b</code><br><br>
      <strong>y</strong>: the value we want to calculate. In this case, <code style="color: #79c0ff;">speed</code><br>
      <strong>m</strong>: the slope, or the rate at which <code style="color: #79c0ff;">speed</code> should increase with each click. In this case, <code style="color: #79c0ff;">3</code><br>
      <strong>x</strong>: the number of points, which is determine by the number of box clicks<br>
      <strong>b</strong>: the initial value of <code style="color: #79c0ff;">speed</code>, or <code style="color: #79c0ff;">10</code><br><br>
      By calculating <code style="color: #79c0ff;">speed</code> based on this relationship, we can keep it consistent and predictable as <code style="color: #79c0ff;">points</code> increase.<br><br>
      Together, this equation means that for each additional click, <code style="color: #79c0ff;">speed</code> increases by <code style="color: #79c0ff;">3</code>.
    </td>
  </tr>
</table>

---

### Step-by-Step Instructions

1. **🔍 Locate the `handleBoxClick` Function**

2. **Remove the line of code** where speed is being increased by 3.

   - This line will be replaced by new code added in this TODO.

3. **Understand How `speed` Changes with `points`**

   - Here’s a table showing the values of `points` and `speed` using the formula described above:

   | Points (x) | Speed Calculation | Speed (y) |
   | ---------- | ----------------- | --------- |
   | 0          | `(3 * 0) + 10`    | 10        |
   | 1          | `(3 * 1) + 10`    | 13        |
   | 2          | `(3 * 2) + 10`    | 16        |
   | 3          | `(3 * 3) + 10`    | 19        |
   | 4          | `(3 * 4) + 10`    | 22        |

   - As `points` increases, this formula ensures that `speed` adjusts _linearly_ without additional conditions.

4. **Apply the Linear Formula**
   - Add a line of code that reassigns `speed` to `3` times the value of `points` plus `10`.
   - **Hint**: The equation below matches the required code **_exactly_** that will accomplish this step:
     ```javascript
     speed = 3 * points + 10;
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
      <strong>Linear Equation</strong>: The equation <code style="color: #79c0ff;">y = mx + b</code> allows us to calculate values in a linear relationship. Here, <code style="color: #79c0ff;">y</code> (speed) is determined by the slope <code style="color: #79c0ff;">m</code>, the initial value <code style="color: #79c0ff;">b</code>, and the number of clicks <code style="color: #79c0ff;">x</code>.<br><br>
      <strong>Direct Calculation</strong>: Using a formula to calculate <code style="color: #79c0ff;">speed</code> based on clicks avoids the need for additional <code style="color: #79c0ff;">if</code> statements, keeping the code simple and efficient.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your game** in Live Server, click the box, and observe how `speed` changes with each click.
  - Does `speed` increase by `3` with every click?
  - Click the box when it is moving from right to left. Ensure that the box does not slow down when this happens.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## Explore Bonus Challenges

We've compiled a list of optional **bonus challenges** for you to take this project to the next level.

- Access them on [GitHub here](https://github.com/OperationSpark/bouncing-box/blob/master/BONUS_CHALLENGES.md)

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 9: Go Live**

🎯 **Goal:** Push your changes to GitHub and make your bouncing box game go live.

---

### Step-by-Step Instructions

1. **Open the terminal in your codespace**

   - If the terminal isn’t visible, click the **Hamburger Menu > Terminal > New Terminal**.

2. **Enter the following commands one by one** in the terminal, pressing enter after each command to run it:

   ```bash
   git add .
   git commit -m "completed bouncing box project"
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

### 🎉🎉🎉 Your bouncing box game is live on your site and you can share it with others!  🎉🎉🎉
