## **Extra Challenges**

Congratulations on completing your second game! Here are some optional challenges that can make your game even more exciting. These are opportunities for you to explore new coding techniques and try tasks you may not be familiar with yet. Rising to these challenges will strengthen your problem-solving skills and make you a better coder!

### Challenge 1: Change Your Box or Background

- Use the [background-image](http://www.w3schools.com/cssref/pr_background-image.asp) CSS property to add an image to your box or background.

<!-- 3 line breaks between challenges -->
<br><br><br>

### Challenge 2: Can You Move the Box Up and Down?

- **Hints:**

  - Completing this challenge requires creating new variables to track the **vertical** `positionY` and `speedY` of the box. Declare these new variables:

    ```javascript
    var positionY;
    var speedY;
    ```

  - To change the vertical position of the box, you can modify the `moveBoxTo` function to adjust the `top` CSS property of the box using a `newPositionY` argument:

    ```javascript
    function moveBoxTo(newPositionX, newPositionY) {
      box.css("left", newPositionX);
      box.css("top", newPositionY);
    }
    ```

  - When calling `moveBoxTo()` inside the `update` function, add `positionY` as a second argument:

    ```javascript
    moveBoxTo(positionX, positionY);
    ```

  - To know when the box hits the bottom of the screen, add a variable to calculate the height of the window. At the top of your code, where variables are declared, add:

    ```javascript
    var boardHeight = jQuery(window).height();
    ```

  - You’ll need a few more changes to make the vertical movement behave like the horizontal movement. Can you figure it out on your own?

<!-- 3 line breaks between challenges -->
<br><br><br>

### Challenge 3: Can You Make the Box Start at a Random Location on Every Click?

- To create a random number, you can use `Math.random()`, which returns a number between `0` and `0.9999`. To get a random number between `0` and `100`, write:

  ```javascript
  var randNum = Math.random() * 100;
  ```

- If the x-axis boundaries of the game are between `0` and `boardWidth`, how could you modify this pattern to generate a random x-coordinate within those bounds?

- Once you generate a random number, where would you use it to set a new, random x-position each time the box is clicked?

<!-- 3 line breaks between challenges -->
<br><br><br>

### Challenge 4: Can You Make the Box Change Color with Each Click? How About Every 3 Clicks?

To change the box’s color, use the `box.css()` method:

```javascript
var colorStr = "rgb(50, 25, 250)";
box.css("background-color", colorStr);
```

- RGB colors use three numbers ranging from `0` to `255`. The first value represents red, the second green, and the third blue. The above combination is high in blue and low in red and green.

- **Create a Function** called `getRandomColor()` that generates and returns a random `colorStr`. You’ll need to combine the random values you generate into a proper `rgb` format using String concatenation.

  - To generate a random number between `0` and `10`, you can use `Math.random()` like so:

    ```js
    var randomNumberBetween0and10 = Math.random() * 10;
    ```

- How can you modify this to generate a random number between `0` and `255`?

- Once you’ve written `getRandomColor()`, call it in `handleBoxClick` and pass the returned `colorStr` to `box.css` to update the `background-color` each time the box is clicked.

<!-- 3 line breaks between challenges -->
<br><br><br>

### Challenge 5: Can You Make the Amount that the Box Speeds Up Increase Every 3 Clicks?

- Think about how you could use an `if` statement to check if the number of clicks (or `points`) is a multiple of 3. What could you use to increase `speed` every time this condition is met?

<!-- 3 line breaks between challenges -->
<br><br><br>

### Challenge 6: Can You Make the Game End if You Mis-click 10 Times?

To end the game, we need to turn off the interval timer that continuously calls the `update` function.

1. At the bottom of your project, locate this line:

   ```javascript
   setInterval(update, 50);
   ```

2. Update it to store the interval in a variable:

   ```javascript
   var interval = setInterval(update, 50);
   ```

3. Create a function to stop the game by clearing the interval:

   ```javascript
   function endGame() {
     clearInterval(interval);
   }
   ```

Now that you have this function, you need to decide when to call it.

- If you want the game to end after 10 mis-clicks, how can you keep track of the number of mis-clicks? Will you need a new variable for this? If so, what should its initial value be?

- Think about what happens when you click anywhere on the screen that isn’t the box. Could you use the code handling the box click as a starting point for tracking clicks on the game area?

- **Hint**: Avoiding ending the game from clicking the box may require 'out of the box' thinking
