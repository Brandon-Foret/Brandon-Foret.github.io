## **First Website Extra Challenges**

Congratulations on completing your first website! Now, let's take it a step further with some extra challenges to enhance your skills and customize your site to be even more impressive.

### Challenge 1: Add an Favicon

To add a favicon to your website, follow these steps:

1. Create or download a small icon image (usually 16x16 or 32x32 pixels) and save it as `favicon.ico`.
2. Place the `favicon.ico` file in the root directory of your website.
3. Add the following line inside the `<head>` section of your HTML file:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

<br><hr><br>

### Challenge 2: Create a Third Page

To create a third page for your website, follow these steps:

1. Create a new HTML file in your project directory, for example, `third-page.html`.
2. Add the basic HTML structure to this new file, similar to your other pages.
3. Include the content you want to display on this third page.
4. Add a link to this third page from your existing pages, for example:

```html
<a href="third-page.html">Third Page</a>
```

Optionally, it is a good idea to add a navigation link back to your home page on the third page for better user experience. For example:

```html
<a href="index.html">Home</a>
```

You also might want to add another favicon for the third page to maintain consistency across your website!

<br><hr><br>

### Challenge 3: Add an Image Gallery

This one is highly recommended to be done on a third (or fourth) page. If you haven't done challenge 2 yet, you might want to try that one first!

To add an image gallery, follow these steps:
1. On your third page HTML file, create a section where you want the image gallery to appear. For example:

```html
<div class="image-gallery">
  <img src="image1.jpg" alt="Image 1">
  <img src="image2.jpg" alt="Image 2">
  <img src="image3.jpg" alt="Image 3">
</div>
```

2. Make sure to replace `image1.jpg`, `image2.jpg`, and `image3.jpg` with the actual paths to your images.
3. You can style the gallery using CSS to make it look more appealing. For example:

```css
.image-gallery {
  display: flex;
  gap: 10px;
}
.image-gallery img {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
```

**Fun CSS challenge**: try out Flexbox Froggy (https://flexboxfroggy.com/). It is a fun and interactive way to learn how to use Flexbox for layout design.

**Image alternative**: if you want to add a video or another webpage to your gallery, you can use the HTML `iframe` element. You can also use a combination of both images and iframes to create a more dynamic gallery. For example, you could have a few images and then an iframe that displays a YouTube video or another webpage.

<br><hr><br>

### Challenge 4: Add a Tiled or Full-Screen Background

To add a tiled or full-screen background to your website, follow these steps:

1. Choose or create an image that you want to use as the background, for example, `background.jpg`.
2. Place the image in your project directory.
3. Add the following CSS to your stylesheet to apply the background:

For a tiled background:

```css
body {
  background-image: url('background.jpg');
  background-repeat: repeat;
}
```

For a full-screen background:

```css
body {
  background-image: url('background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
```
