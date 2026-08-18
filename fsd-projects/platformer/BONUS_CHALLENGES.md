## **Extra Challenges**

Congratulations on completing your first platformer game! Here are some optional bonus challenges that can make your game even more exciting. Use these to make your game even more dynamic and engaging while also practicing more complex coding skills. Rising to these challenges will strengthen your problem-solving skills and make you a better coder!

### Challenge 1: Bad Platform Challenge:

- Create a new type of platform that harms the player on contact
- Arguments: `x`, `y`, `width`, `height`, `color`
- Example: `createBadPlatform(500, 400, 100, 20, "red")`
- When the player touches this platform, they should lose a life or restart the level

### Challenge 2: Moving Collectable Challenge:

- Create a collectable that moves horizontally between two points (100 and 300 pixels)
- Arguments: `type`, `x`, `y`, `gravity`, `bounce`, `minX`, `maxX`, `speed`
- Example: `createCollectable("gem", 200, 100, 0, 1, 100, 300, 2)`
- The collectable should smoothly move back and forth at a reasonable speed

### Challenge 3: Moving Platform Challenge:

- Design a platform that moves horizontally and/or vertically within specified boundaries
- Arguments: `x`, `y`, `width`, `height`, `color`, `minX`, `maxX`, `speed`, `minY`, `maxY`, `speedY`
- Example Horizontal: `createPlatform(100, 300, 200, 20, "green", 100, 400, 2, 0, 0, 0)`
- Example Vertical: `createPlatform(300, 200, 200, 20, "orange", 0, 0, 0, 200, 400, 1)`
- Example Both: `createPlatform(400, 300, 200, 20, "blue", 300, 500, 1, 100, 400, 1)`
- The platform will not necessarily move in a set path. It will instead bounce between the min and max values for both axes.
- Note: For pure horizontal movement, you can leave the vertical `minY`, `maxY`, and `speedY` arguments blank to save time, but for vertical or both axis movement, all arguments must be provided.

### Challenge 4: Different Sized Projectiles Challenge:

- Create projectiles of varying sizes that the player can shoot
- Arguments: `wallLocation`, `position`, `timeBetweenShots`, `width`, `height`
- Example: `createProjectile("left", 100, 1000, 10, 5)`
- Default projectile size is 24x24; experiment with different sizes to see how it affects gameplay

### Challenge 5: Moving Cannon Challenge:

- Create a cannon that moves back and forth horizontally
- Arguments: `wallLocation`, `position`, `timeBetweenShots`, `width`, `height`, `minPos`, `maxPos`, `speed`
- Example: `createCannon("top", 200, 2000, 20, 10, 100, 400, 2)`
- Cannons on the left and right walls always start moving downwards, while cannons on the top and bottom walls always start moving to the left.
- The cannon will move between the `minPos` and `maxPos` values at the specified `speed`, reversing direction when it hits either boundary.