## **Portfolio Extra Challenges**

Congratulations on completing your portfolio page! Now, let's take it a step further with some extra challenges to enhance your skills and customize your site to be even more impressive.

### Challenge 1: Add Rounded Corners to Your Navigation

To add rounded corners to your navigation bar, follow these steps:

1. Open your CSS file and find the `nav` selector.
2. Add a `border-radius` property to give the `<nav>` element rounded corners. For example:

```css
nav {
  border-radius: 12px;
}
```

3. Try changing the value to make the corners more or less rounded.

If you want to learn more about this property, search for `CSS border radius` online and experiment with different values.

<br><hr><br>

### Challenge 2: Add a Tiled or Full-Screen Background

To add a tiled or full-screen background to your portfolio page, follow these steps:

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

<br><hr><br>

### Challenge 3: Add a Favicon

To add a favicon to your portfolio page, follow these steps:

1. Either use the existing favicon if you already added one for the first website, or create/download a new one. If you create or download one, you will want a small icon image (usually 16x16 or 32x32 pixels). Save it as `favicon.ico`.
2. Place the `favicon.ico` file in the root directory of your website.
3. Add the following line inside the `<head>` section of your `portfolio.html` file:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

If you want to learn more about favicons, you can read more <a href="https://www.w3schools.com/html/html_favicon.asp">here</a>.

<br><hr><br>

### Challenge 4: Make your site responsive

To make your portfolio site responsive, you can use CSS media queries. This allows your site to adapt to different screen sizes, such as mobile devices and tablets. Learn more about responsive design at <a href="https://www.w3schools.com/html/html_responsive.asp">W3Schools</a>.

Here's some CSS to get you started on making your website mobile responsive. You can add this code to the bottom of your CSS file.

```CSS
/* responsive web design */
@media screen and (min-width: 120px) and (max-width: 1080px) {
  main {
    height: 100ch;
    zoom: 1.5;
    display: grid;
  }

  h1 {
    font-size: 44px;
  }

  h2 {
    font-size: 42px;
  }

  h3 {
    font-size: 36px;
  }

  #all-contents {
    height: 100ch;
    margin: none;
  }

  a {
    font-size: 42px;
  }

  .sidebar {
    margin-right: 0px;
    justify-content: center;
    align-items: center;
  }

  .sidebar-img {
    width: 100%;
  }

  p,
  li {
    font-size: 24px;
  }

  .content {
    align-content: center;
    justify-content: center;
  }
}
```