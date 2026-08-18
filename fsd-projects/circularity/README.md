# Circularity

A motion poem using random number generation and velocity applied to circles...

**Table of Contents**

- [Overview](#overview)
- [Lesson Steps](#lesson-steps)
  - [Workflow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0: Preview your project with Live Server](#todo-0-preview-your-project-with-live-server)
  - [TODO 1: Declare Variables](#todo-1-declare-variables)
  - [TODO 2: Create a Function to Draw a Circle](#todo-2-create-a-function-to-draw-a-circle)
  - [TODO 3: Draw 5 Circles!](#todo-3-draw-5-circles)
  - [TODO 4: Move All Circles Across the Screen](#todo-4-move-all-circles-across-the-screen)
  - [TODO 5: Keep Your Circles on the Screen](#todo-5-keep-your-circles-on-the-screen)
  - [TODO 6: Loop from All Sides](#todo-6-loop-from-all-sides)
  - [TODO 7: Draw 50 Circles](#todo-7-draw-50-circles)
  - [TODO 8: Iterate over the Array](#todo-8-iterate-over-the-array)
  - [TODO 9: Keep Code DRY by Replacing Repetitive Function Calls](#todo-9-keep-code-dry-by-replacing-repetitive-function-calls)
  - [TODO 10: Go Live](#todo-10-go-live)

## Overview

In this project, you’ll create an interactive "motion poem" that combines random number generation, velocity, and vibrant colors to animate circles across the screen.

<br><br><br>

# Lesson Steps

## **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Learn how to follow the steps in this lesson to build and customize your project one step at a time.

---

### Step-by-Step Work Flow

1. 📂 **Open your Circularity project's `init.js` file** in your codespace to get started.

   - 🔍 Locate the file tree (the list of files and folders) in the left panel of your codespace.
   - Click the `fsd-projects` folder 📂 in your file tree to expand the list of projects.
   - Click on the `circularity` folder 📂 located within the `fsd-projects` folder.
   - Click on the `js` folder 📂 located within the `circularity` folder.
   - Click on the `init.js` file located within the `js` folder 📂. **_Coding for all steps will be done in this file._**

2. **Follow the instructions carefully** for each TODO.

3. 🖥️ **Preview your project regularly using Live Server** to see how your changes affect your page.

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
      - 🖥️ Preview frequently to make sure your project is working as expected.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **After each TODO**, double-check your code to ensure it matches the examples.
- **Preview your project** using Live Server to confirm there are no errors in your code and troubleshoot any bugs.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 0: Preview Your Project with Live Server**

🎯 **Goal:** Preview your circularity project in the browser to see how it looks and behaves as you make changes.

---

### Step-by-Step Instructions

There are two ways to open your project with **Live Server**:

1. **Option 1: Right-Click** your `index.html` file in the file tree and select **“Open with Live Server.”**
2. **Option 2: Use the Go Live button** in the bottom-right corner of your codespace.

<br>

### ✅ **Check Your Work!**

- **After launching Live Server**, your browser should open a new tab with your site.
- By default, Live Server will always load your home page. To view your circularity project:
  - Click the link to your Portfolio page to access your project links, then navigate to your Circularity project.

<!-- 4 line breaks between TODOs -->

<br><br><br><br>

## **TODO 1: Declare Variables**

🎯 **Goal:** Create variables to store our circles and prepare for animation.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 1` comment in the `PROGRAM SETUP` Section**

   - Your code for this TODO will go **below** this comment

2. **Declare Variables for Your Circle and Array**
   - Create a variable named `circles` and assign it to an empty array.
       - This variable will hold all of the circles you create.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Array Storage</strong>: The variable <code style="color: #79c0ff;">circles</code> is an array, and will store multiple circle objects. As you build this project, you’ll use this array to access, modify, and animate each circle.<br><br>
      <strong>Variable Naming</strong>: Descriptive variable names like <code style="color: #79c0ff;">circles</code> make the code easier to understand and maintain.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Open your console** and check for errors.
- Ensure there are no reference errors in the console before moving on.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 2: Create a Function to Draw a Circle**

🎯 **Goal:** Set up a reusable function that will draw a circle on the page each time it’s called.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 2` comment in the `PROGRAM SETUP` Section**

2. **Declare the `drawCircle` Function**

   - Declare a function named `drawCircle`.

     - This function will draw a circle on the canvas and store it in the `circles` array. It will also allow you to easily add multiple circles later.

   - **Syntax Hint**: To declare a function, use the following structure/syntax:

     ```javascript
     function exampleFunction() {

     }
     ```

3. **Add Code to Draw a Circle in `drawCircle`**

   - Inside the `drawCircle` function's code block, add code to:

     - Draw a random circle using `draw.randomCircleInArea()`.
     - Apply random velocity to the circle with `physikz.addRandomVelocity`.
     - Add the circle to the `view`.
     - Store the circle in the `circles` array.

   - **CODE** - copy and paste the code below into your `drawCircle` function's code block
     ```javascript
     var circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
     physikz.addRandomVelocity(circle, canvas, 5, 5);
     view.addChild(circle);
     circles.push(circle);
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
      <strong>Reusability</strong>: Wrapping code in a function (like <code style="color: #79c0ff;">drawCircle</code>) allows us to reuse it without retyping, making our code efficient and organized.<br><br>
      <strong>Array Storage</strong>: Each circle is saved in the <code style="color: #79c0ff;">circles</code> array when <code style="color: #79c0ff;">drawCircle</code> is called. Accessing circles from this array makes it easier to move multiple circles at once later in the project.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project using Live Server** and check that there are no errors in the console.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

---

## **TODO 3: Draw 5 Circles!**

🎯 **Goal:** Use the `drawCircle` function to add multiple circles to the canvas.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 3` comment in the `PROGRAM SETUP` Section**

2. **Add 5 Circles to Your Screen**

   - Call the `drawCircle` function five times to add five circles to the canvas. This step will draw multiple circles on your screen, and you’ll improve the code later later.

   - **Syntax Hint**: To call a function, use the following structure/syntax:
     ```javascript
     functionName();
     ```

3. **DRY Principle Reminder**
   - For now, this code is repetitive to get circles on the screen quickly.
   - Later, you’ll use a loop to rewrite it in a cleaner, more maintainable way.
   - Using loops is part of the **DRY principle**, which stands for “Don’t Repeat Yourself.”

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>DRY Principle</strong>: Although we’re repeating the same code here, we’ll improve this by using loops in a later step. For now, understand that repeating code can make it harder to maintain and debug.<br><br>
      <strong>Function Calls</strong>: Each call to <code style="color: #79c0ff;">drawCircle()</code> adds one circle to the canvas and stores it in the <code style="color: #79c0ff;">circles</code> array.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that you can see five circles on the screen before moving on.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 4: Move All Circles Across the Screen**

🎯 **Goal:** Call the `physikz.updatePosition` function for each circle in the `circles` array to move it across the screen.

---

<br>

### Read Before You Code: Understand Bracket Notation

- To access a single circle stored in the `circles` array, use **bracket notation** with an index number inside square brackets, like so:
  ```javascript
  circles[0]
  ```
- The code above accesses the first item in the array. Remember that array indices start at `0`, so `circles[1]` accesses the second circle, and so on.

---

<br>

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 4` comment in the `update` function's code block**

2. **Call `physikz.updatePosition` with Bracket Notation**

   - Use the following pattern to call `physikz.updatePosition()` for each circle:
     ```javascript
     physikz.updatePosition(/* bracket notation to access a circle from the circles array */);
     ```
   - This line tells JavaScript to update the position of the first circle in the array.

3. **Repeat for Each Circle (Placeholder for a Loop)**

   - Repeat the call to `physikz.updatePosition` for each of the 5 circles, using the correct index for each. You'll improve this with a loop in a later TODO to avoid repeating code.

   - **CODE**:

     ```javascript
     physikz.updatePosition(/* bracket notation to access the first circle */);
     physikz.updatePosition(/* bracket notation to access the second circle */);
     physikz.updatePosition(/* bracket notation to access the third circle */);
     physikz.updatePosition(/* bracket notation to access the fourth circle */);
     physikz.updatePosition(/* bracket notation to access the fifth circle */);
     ```

   - **Bracket Notation Reminder**
     - Remember, `circles[i]` accesses the circle at index `i` in the array. You’re currently using hard-coded numbers for each circle, but a loop will make this easier soon.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Bracket Notation</strong>: Bracket notation (e.g., <code style="color: #79c0ff;">circles[0]</code>) lets you access a specific item in an array by its position. This is useful when you need to manipulate or display specific items stored in a list.<br><br>
      <strong>Array Indices</strong>: Arrays start at index <code style="color: #79c0ff;">0</code>, so the first element is accessed with <code style="color: #79c0ff;">circles[0]</code>. Each successive element increases by one (e.g., <code style="color: #79c0ff;">circles[1]</code>, <code style="color: #79c0ff;">circles[2]</code>).
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that all circles are moving before moving on.
  - **NOTE**: Currently, circles will disappear off the sides of your screen. This is expected for now and will be fixed in the next two TODOs

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 5: Keep Your Circles on the Screen**

🎯 **Goal:** Ensure that circles reappear on the left side of the screen when they exit the right side.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 5` comment in the `update` function's code block**

2. **Call `game.checkCirclePosition()` for Each Circle**

   - Use `game.checkCirclePosition()` to make any circles that move off the screen reappear on the other side.
   - For now, access each circle in the `circles` array using bracket notation, similar to TODO 4. Later, you’ll replace these repetitive function calls with a loop.

   - **CODE**:

     ```javascript
     game.checkCirclePosition(/* bracket notation to access the first circle */);
     game.checkCirclePosition(/* bracket notation to access the second circle */);
     game.checkCirclePosition(/* bracket notation to access the third circle */);
     game.checkCirclePosition(/* bracket notation to access the fourth circle */);
     game.checkCirclePosition(/* bracket notation to access the fifth circle */);
     ```

   - **Important Note**
     > The `game.checkCirclePosition` function only affects circles that exit on the right side of the screen for now. You’ll add code to handle other sides in the next TODO.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Function Calls</strong>: Calling <code style="color: #79c0ff;">game.checkCirclePosition()</code> helps keep each circle in bounds. Currently, this function only affects circles exiting to the right.<br><br>
      <strong>Bracket Notation</strong>: Using <code style="color: #79c0ff;">circles[0]</code> accesses the first circle in the array. You’ll soon replace your repetitive code with a loop to make it more efficient.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that any circle moving off the right side of the screen reappears on the left side.
  - You may need to refresh your project one or more times to test your code if you have no circles moving to the right.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 6: Loop from All Sides**

🎯 **Goal:** Modify `game.checkCirclePosition` to handle circles that exit on all sides of the screen.

---

<br>

### Read Before You Code: Understand Circle and Canvas Boundaries

Each circle has `x` and `y` properties that represent its position on the canvas. The canvas itself has `width` and `height` properties that define its boundaries. Here’s a quick overview to help you understand how these properties work together!

---

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden; margin-top: 20px;">
  <tr>
    <th colspan="2" style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      🖼️ Canvas Boundary Properties
    </th>
  </tr>

  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <code style="color: #79c0ff;"><strong>canvas.width</strong> </code><br>
      The <strong>width</strong> of the canvas. Represents the maximum <code style="color: #79c0ff;">x</code> position for any circle before it exits on the right side.<br><br>
      <code style="color: #79c0ff;"><strong>canvas.height</strong></code><br>
      The <strong>height</strong> of the canvas. Represents the maximum <code style="color: #79c0ff;">y</code> position for any circle before it exits on the bottom side.
    </td>
  </tr>

</table>

<br><br>

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th colspan="2" style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      🔵 Circle Position Properties
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <code style="color: #79c0ff;"><strong>circle.x</strong></code><br>
      Represents the <strong>horizontal position</strong> of a circle on the canvas.
      <ul>
        <li>If <code style="color: #79c0ff;">circle.x</code> equals <code style="color: #79c0ff;">0</code>, the circle is at the <strong>left edge</strong>.</li>
        <li>If <code style="color: #79c0ff;">circle.x</code> equals <code style="color: #79c0ff;">canvas.width</code>, the circle is at the <strong>right edge</strong>.</li>
      </ul>
      <br>
      <code style="color: #79c0ff;"><strong>circle.y</strong></code><br>
      Represents the <strong>vertical position</strong> of a circle on the canvas.
      <ul>
        <li>If <code style="color: #79c0ff;">circle.y</code> equals <code style="color: #79c0ff;">0</code>, the circle is at the <strong>top edge</strong>.</li>
        <li>If <code style="color: #79c0ff;">circle.y</code> equals <code style="color: #79c0ff;">canvas.height</code>, the circle is at the <strong>bottom edge</strong>.</li>
      </ul>
    </td>
  </tr>
</table>

<br>

Understanding these properties will help you create conditions to keep circles on the screen by making them reappear from the opposite edge when they move off any side.

---

<br>

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 6` comment located inside the `game.checkCirclePosition` function**

2. **Add an `if` Statement for Each Edge**

   - The right side logic from TODO 5 already ensures that circles reappear on the left when exiting the right.
   - Add an `if` statement for each of the other edges to reposition the circle when it exits the boundary:
     - **Left Boundary**: Move circles from the left edge to the right.
     - **Top Boundary**: Move circles from the top edge to the bottom.
     - **Bottom Boundary**: Move circles from the bottom edge to the top.

3. **Guided Hints for Each Condition**

   - **Left Boundary**:
     - Think about the `x` position of a circle when it moves off the left side. What value should `circle.x` be set to in order to make the circle appear on the opposite edge?
   - **Top Boundary**:
     - Consider the `y` position of a circle moving off the top edge. What value should `circle.y` be set to so that it reappears at the bottom?
   - **Bottom Boundary**:
     - Similarly, when the `y` position moves off the bottom edge, what adjustment is needed for the circle to reappear at the top?

4. **Challenge**: Make the circles exit and reappear on the screen more smoothly!

   - Use the `circle.radius` property to adjust the conditions so that circles fully exit the screen before reappearing on the opposite side.
   - For example, instead of checking if `circle.x` is less than `0`, you can calculate the right edge of the circle using the following code:

     ```javascript
     var rightEdge = circle.x + circle.radius;
     ```

     This variable can then be used in your condition to check if the entire circle has exited the left side of the screen.

   - The circle is centered around its own `x` and `y` position, and you'll need to account for the radius when checking all four edges (and when repositioning the circle at the opposite edge of the screen).

---

### Visual Guide

<details>
<summary>Optional: Click here to see a helpful image that can provide futher insight into the conditions required for this TODO</summary>

<img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/circularity/screenBounds.png" height="300px" >

</details>

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Screen Boundaries</strong>: The <code style="color: #79c0ff;">canvas.width</code> and <code style="color: #79c0ff;">canvas.height</code> properties represent the right and bottom boundaries of the screen. The <code style="color: #79c0ff;">x</code> and <code style="color: #79c0ff;">y</code> positions of each circle will determine when it crosses these boundaries.<br><br>
      <strong>Independent Conditions</strong>: Each boundary check should be an independent <code style="color: #79c0ff;">if</code> statement so that circles can loop from any side.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that circles reappear on the opposite side when they cross any edge of the screen before moving on.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 7: Draw 50 Circles**

🎯 **Goal:** Use a loop to draw 50 circles with the `drawCircle` function.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 7` comment in the `PROGRAM SETUP` Section**

2. **Create a Loop to Simplify Your Code**

   - Use a `for` loop to replace the previous repetitive code and draw 50 circles.

   - **Syntax Hint**: To create a `for` loop that repeats 25 times, use the following structure/syntax:

     ```javascript
     for (var i = 0; i < 25; i++) {
      
     }
     ```

3. **Replace Your Repetitive Function Calls**

   - Inside of your `for` loop's code block, add a single call to the `drawCircle` function.
   - Delete or comment out the 5 repetitive `drawCircle()` calls you added in `TODO 3`.

4. **Test with Fewer Circles First**
   - You might want to test with a smaller number (e.g., `10` or `25`) initially to confirm everything works, then change the number to `50`.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Loops</strong>: Using a <code style="color: #79c0ff;">for</code> loop here helps us avoid repetitive code and easily create any number of circles.<br><br>
      <strong>Testing</strong>: Testing with fewer circles at first helps confirm that the code works correctly before scaling up.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that 50 circles appear on the screen before moving on.
  - **NOTE**: Only 5 circles will move, but that will be fixed in the next two TODOs

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 8: Iterate over the Array**

🎯 **Goal:** Use a loop to apply `physikz.updatePosition` to every circle in the `circles` array.

---

<br>

### **Read Before You Code: Understand Loop Structure**

Looping through arrays is one of the most common and important tasks in programming, as it allows you to efficiently process and manipulate large sets of data. This skill is used frequently in real-world coding projects.

In this step, you’ll use a `for` loop to loop through the `circles` array and update each circle’s position. Before diving into the code, let’s break down the structure of a `for` loop and understand how it works.

---

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      🔄 Anatomy of a <code style="color: #79c0ff;">for</code> Loop
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Statement 1: Variable Initialization</strong>  
      <br>This runs <strong>once</strong> at the start of the loop and sets up the loop counter variable. For example:
      <pre style="background-color: #333; padding: 5px;">var i = 0;</pre>
      Here, <code style="color: #79c0ff;">i</code> starts at <code style="color: #79c0ff;">0</code>, representing the first item in the array.
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Statement 2: Stop Condition</strong>  
      <br>This is checked <strong>before every iteration</strong>. The loop's code block runs as long as this condition is true. For example:
      <pre style="background-color: #333; padding: 5px;">i < circles.length;</pre>
      This ensures the loop stops after processing all items in the array.
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Statement 3: Variable Update</strong>  
      <br>This runs <strong>after each iteration</strong> to update the loop counter. For example:
      <pre style="background-color: #333; padding: 5px;">i++;</pre>
      This increases <code style="color: #79c0ff;">i</code> by 1, moving to the next item in the array.
    </td>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Putting It All Together</strong>  
      <br>The full loop might look like this:
      <pre style="background-color: #333; padding: 5px;">for (var i = 0; i < circles.length; i++) {<br>  // Code to update each circle<br>}</pre>
      This structure ensures that every circle in the array is updated one at a time.
    </td>
  </tr>
</table>

---

Understanding these three statements will help you write efficient `for` loops to loop through arrays, like the `circles` array in this project.

<br><br>

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 8` comment in the `update` function's code block**

2. **Set Up a Loop to Iterate Over Each Circle**
   - Create a for loop that will iterate over each circle in the `circles` array.
     - Reference the **`Read Before You Code`** section above if you need a refresher on iterating over arrays using `for` loops

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Iteration</strong>: A loop allows us to repeat code for each item in an array, making it easier to update multiple items without repetition.<br><br>
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server.
- Confirm that there are no errors in the console before moving on.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 9: Keep Code DRY by Replacing Repetitive Function Calls**

🎯 **Goal:** Call the `physikz.updatePosition` and `game.checkCirclePosition` functions to move all circles.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 8 / TODO 9` comment in the `update` function's code block**

   - This is where you will replace the repetitive function calls with a loop.

2. **Call `physikz.updatePosition` within the loop**

   - Copy one of your repetitive `physikz.updatePosition` function calls from TODO 4, and paste it into your loop's code block.
   - Replace the hard-coded number with the variable `i` so that your loop dynamically accesses each circle in the array using bracket notation (`circles[i]`).

3. **Add `game.checkCirclePosition` to the Loop**

   - After the `physikz.updatePosition` call inside your loop's code block, call the `game.checkCirclePosition` function to ensure each circle reappears if it exits the screen.
   - Use bracket notation with `circles[i]` when passing a circle to the `game.checkCirclePosition` function, just as you did with `physikz.updatePosition`.

4. **Remove the Previous Function Calls**
   - Delete or comment out the repetitive calls to `physikz.updatePosition` and `game.checkCirclePosition` that you added in TODOs 4 and 5.
   - This reduces redundancy and ensures your code follows the DRY principle.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Review Important Concepts
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Loop Efficiency</strong>: Using a single loop to update all circles ensures that your code runs efficiently and is easy to maintain.<br><br>
      <strong>Array Access with <code style="color: #79c0ff;">circles[i]</code></strong>: The loop retrieves each circle in order, applying <code style="color: #79c0ff;">physikz.updatePosition</code> and <code style="color: #79c0ff;">game.checkCirclePosition</code> to each one.
    </td>
  </tr>
</table>

---

<br>

## Bonus Challenges

Check for Bonus Challenges in the circularity project folder's BONUS_CHALLENGES.md file! Bonus challenges for this project include gamifying your project, adding interactivity, and more!

<br><br>

### ✅ **Check Your Work!**

- **Preview your project** in Live Server. Confirm that all circles move and stay within the screen boundaries by looping from one side to the other.

<!-- 4 line breaks between TODOS -->

<br><br><br><br>

## **TODO 10: Go Live**

🎯 **Goal:** Push your changes to GitHub and make your circularity project go live.

---

### Step-by-Step Instructions

1. **Open the terminal in your codespace**

   - If the terminal isn’t visible, click the **Hamburger Menu > Terminal > New Terminal**.

2. **Enter the following commands one by one** in the terminal, pressing enter after each command to run it:

   ```bash
   git add .
   ```

   ```bash
   git commit -m "completed circularity project"
   ```

   ```bash
   git push
   ```

3. **Wait a few minutes for the changes to go live at `your-username.github.io`.**

---

<br>

### ✅ **Check Your Work!**

- Visit the site `your-github-username.github.io` to see your website live on the internet. If it doesn’t appear immediately, wait a few minutes and try refreshing your page.
  - Make sure to replace the text `"your-github-username"` with your actual github username when entering the URL in your browser.
- Navigate to your Circularity link on your Portfolio page to ensure it is live on the web.
  - You might need to refresh your page for your changes to appear.

<br>
<hr>
<br>

### 🎉🎉🎉 Congratulations! You can now share your circularity project with others! 🎉🎉🎉

<!-- 4 line breaks between TODOS -->

<br><br><br><br>
