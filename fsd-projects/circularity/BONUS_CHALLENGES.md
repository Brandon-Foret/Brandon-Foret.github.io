## **BONUS TODO: Unlock Gamification Features**

🎯 **Goal:** Enable interactive game features including player controls and multiplayer mode by initializing the gamification system.

---

### Prerequisites

Before you can unlock the gamification features, make sure you have completed:
- ✅ **TODO 7**: Created 50 circles on the screen
- ✅ **TODO 9**: Implemented the loop to iterate over the array

These educational objectives must be met before the game features become available!

---

### Step-by-Step Instructions

1. 🔍 **Locate the `// TODO 2` comment in the `PROGRAM SETUP` Section**
   - Find where you declared the `drawCircle` function.

2. **Initialize the Gamification System**
   - After your `drawCircle` function declaration, add the gamification initialization code:

   - **CODE**:
     ```javascript
     // Initialize gamification features (unlocked after completing educational TODOs)
     Gamification.init({
         canvas: canvas,
         view: view,
         draw: draw,
         physikz: physikz,
         circles: circles,
         game: game
     });
     ```

3. 🔍 **Locate the `update` function**
   - Find the `update` function where you added your loop in TODO 9.

4. **Add Gamification Updates**
   - At the end of the `update` function, after your loop, add the gamification update call:

   - **CODE**:
     ```javascript
     // Update gamification features each frame
     Gamification.update();
     ```

5. **Fix Any Errors**
   - Things get a bit wonky when your circle starts taking up a large portion of the screen. Check out the code in the `Gamification.js` file to see how we handle that! Make slight changes in the `Gamification.js` file if needed to create more smooth gameplay.

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      🎮 What This Unlocks
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong>Player Controls</strong>: Use WASD or arrow keys to control your circle<br><br>
      <strong>Multiplayer Mode</strong>: Share a link with friends to play together<br><br>
      <strong>Game UI</strong>: Interactive instructions and game controls will appear<br><br>
      <strong>Circle Absorption</strong>: Absorb smaller circles to grow larger!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**
- **Preview your project** in Live Server.
- If you've completed TODOs 7 and 9, you should now see game controls and instructions appear!
- Try using WASD or arrow keys to control your circle.
- Look for the multiplayer button to share with friends.

<br>
<hr>
<br>