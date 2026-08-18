# Your Portfolio Page

Show off your peacock feathers as you begin to spread your wings and take flight into the world software development. Okay, peacocks can't fly, but you get the point - your portfolio will give you a place to work and show off your coding projects!

## **Table of Contents**

- [Prerequisites](#prerequisites)
- [Overview](#overview)
  - [Specs](#specs)
  - [Type of App](#type-of-app)
- [Lesson Steps](#lesson-steps)
  - [Work Flow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0 : Preview Your Site](#todo-0-preview-your-site-with-live-server)
  - [TODO 1: Create Portfolio Page](#todo-1-create-portfolio-page)
  - [TODO 2: Add a Title](#todo-2-add-a-title)
  - [TODO 3: Create Sections for the Menu and Main Content](#todo-3-create-sections-for-the-menu-and-main-content)
  - [TODO 4: Navigation and Site Title](#todo-4-add-a-site-title-and-navigation)
  - [TODO 5: Create Section for Main Content](#todo-5-create-the-main-content)
  - [TODO 6: Add Links for Projects](#todo-6-link-your-future-projects)
  - [TODO 7: Add CSS](#todo-7-add-css)
  - [Extra CSS Challenges](#extra-css-challenges)
  - [TODO 8: Go Live](#todo-8-go-live)

<br>

## **Overview**

🎯 **Goal:** Create a portfolio page for your website. This page will contain links to your projects and serve as a showcase for your coding skills.

- At the end of this project, you’ll have a **portfolio page** added to your website.
- The portfolio will list your projects and help build a professional-looking resume of your coding experience.
- You’ll explore **Cascading Style Sheets (CSS)** in more depth and learn how to link pages with **hyperlinks**.
- You can optionally explore the basics of **Responsive Design** to make your site look good on all devices.

<br>
<br>
<br>
<br>
<br>

# Lesson Steps

## **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Follow the steps in this lesson to build and customize your website one step at a time.

---

### Step-by-Step Work Flow

1. 📂 **Open the `portfolio.html` file** in your codespace to get started.
   
2. **Look for TODO sections** in the README:  
   - Each **TODO** has instructions for **what you need to do** next.
   - These steps will tell you **where to place new code** inside the existing tags.

3. 🖥️ **Preview your site regularly using Live Server** to see how your changes affect the website.

4. **Build gradually**:  
   - Each TODO builds on the previous one, so **complete them in order**.  
   - Take your time to **double-check your code** before moving on to the next step.

---

<br>

### ✅ **Check Your Work!**  
- **After each TODO**, double-check your code to ensure it matches the examples.
- If you encounter issues, **preview your site** using Live Server to troubleshoot.

<br>
<br>
<br>
<br>

## **TODO 0: Preview Your Site with Live Server**

🎯 **Goal:** Preview your site in the browser to see how it looks and behaves as you make changes.

---

### Step-by-Step Instructions

There are two ways to open your project with **Live Server**:

---

#### **Option 1: Right-Click Method**

1. 📂 **Find the `index.html` file** in the file tree on the left side of your codespace.
2. **Right-click on `index.html`** and select **“Open with Live Server.”**

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/first-website/open-with-live-server.png" alt="Right-click 'Open with Live Server'" style="max-width: 250px;">
</div>

---

#### **Option 2: Go Live Button in the Bottom Panel**

1. **Look at the bottom-right corner** of your codespace.  
2. **Click the “Go Live” button** to launch Live Server.

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/first-website/go-live-button.png" alt="Go Live button in GitHub Codespaces" style="max-width: 300px;">
</div>

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why Use Live Server?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      Live Server allows you to instantly preview your website as you edit the code. It automatically refreshes the browser every time you update your code, so you can see changes right away without needing to reload manually.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**  
- **After launching Live Server**, your browser should open a new tab with your site.
- By default, Live Server will always load your home page. You can click the link to your Portfolio page to monitor your progress for this project.

<br>
<br>
<br>
<br>

## **TODO 1: Create Portfolio Page**

🎯 **Goal:** Build a new portfolio page from scratch.

---

### Step-by-Step Instructions

1. 🔍 **Find the file tree**

   - Look to the **left side of your codespace** and find the list of project files and folders.

2. **Open the `portfolio.html` file**

   - 📂 Inside the file tree, **click on `portfolio.html`** to open it.

3. **Add the following boilerplate HTML** to your file to set up the basic structure:

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>CHANGE ME</title>
     </head>

     <body>
       <!-- All content goes here -->
       <div id="all-contents">
         
       </div>
     </body>
   </html>
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Use Boilerplate Code?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      Boilerplate code is useful when working on similar projects. Because the portfolio page will match styles with the home page, you can use the same starter code for both files.
    </td>
  </tr>
</table>

<br>
<br>
<br>
<br>
<br>

## **TODO 2: Add a Title**

🎯 **Goal:** Add a title to your portfolio page to match the one on your homepage.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `<title>` element inside the `<head>` element**

2. **Update the text inside `<title>`**
   - **Replace** the text that says `CHANGE ME` with to match the title you added to your home page.

Your updated `<head>` tag should look like this:

```html
<head>
  <title>My Awesome Website</title>
</head>
```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Add a Title?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      The title defines what appears in the browser tab. A meaningful title gives visitors an idea of what your site is about.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**
- Make sure the title appears in the browser tab.

<br>
<br>
<br>
<br>

## **TODO 3: Create Sections for the Menu and Main Content**

🎯 **Goal:** Organize your webpage by adding two key sections — a **navigation menu** and a **main content area**. You’ll do this by placing `<nav>` and `<main>` elements inside the `<div id="all-contents">` element.

---

### Step-by-Step Instructions

1. 🔍 **Locate the `<div id="all-contents">` element**

   - Find this part of the code:

     ```html
     <!-- All content goes here -->
     <div id="all-contents">
       
     </div>
     ```

2. **Place the `<nav>` and `<main>` elements inside the `<div id="all-contents">` element**

   - Your code should now look like this:

     ```html
     <div id="all-contents">
       <nav>

       </nav>

       <main>

       </main>
     </div>
     ```

---

<table style="width: 80%; border-collapse: collapse; margin-top: 15px; margin-left: auto; margin-right: auto; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What’s the Purpose of <code>&lt;nav&gt;</code> and <code>&lt;main&gt;</code>?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      <strong>&lt;nav&gt;</strong>: Holds links to other parts of your website (like a menu).<br>
      <strong>&lt;main&gt;</strong>: Contains the primary content visitors will see. Separating these sections helps 
      organize your code and makes it easier to style with CSS.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Make sure the `<nav>` and `<main>` elements are **inside the `<div id="all-contents">` element**.

<br>
<br>
<br>
<br>

## **TODO 4: Add a Site Title and Navigation**

🎯 **Goal:** Give your site a title and create a navigation menu to help visitors move between pages.

---

### Step-by-Step Instructions

1. 🔍 **Find the `<nav>` element**

   - Look for the following section in your code:

     ```html
     <nav>
     
     </nav>
     ```

2. **Add a title inside the `<nav>` element**

   - **Place an `<h1>` element** inside `<nav>`. Between the opening and closing `<h1>` tags, type the title of your website. Use the same text you used for your home page to stay consistent.
     ```html
     <h1>Your Name's Amazing Website</h1>
     ```

3. **Create an unordered list for your navigation menu**

   - **Below the `<h1>` element**, add a `<ul id="nav-ul">` element:

     ```html
     <ul id="nav-ul">

     </ul>
     ```

4. **Add two list items for the menu**

   - **Inside the `<ul>` element**, add the following two `<li>` elements:

     1. One to link to your home page

        ```html
        <li class="nav-li">
          <a href="index.html">Home</a>
        </li>
        ```

     2. Another to link to your portfolio page

        ```html
        <li class="nav-li">
          <a href="portfolio.html">Portfolio</a>
        </li>
        ```

After completing this TODO, your `<nav>` section should look like this:
```html
<nav>
  <h1>Your Name's Amazing Website</h1>
  <ul id="nav-ul">
    <li class="nav-li">
      <a href="index.html">Home</a>
    </li>
    <li class="nav-li">
      <a href="portfolio.html">Portfolio</a>
    </li>
  </ul>
</nav>
```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why Add a Navigation Menu?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      A navigation menu makes it easy for visitors to move between different parts of your site. It’s also a great way to learn how to link pages together using anchor tags (<code>&lt;a&gt;</code>).
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Make sure the `<h1>` and `<ul>` elements are **inside the `<nav>` element**.
- **Preview your site** using **Live Server** to ensure your title and links appear on the site.

<br>
<br>
<br>
<br>

## **TODO 5: Create the Main Content**

🎯 **Goal:** Add a section to display your projects.

---

### Step-by-Step Instructions

1. 🔍 **Find the existing `<main>` element** in `portfolio.html`.

   - It should look like this:

     ```html
     <main>

     </main>
     ```

2. **Create a new section** to hold the content:

   - Add a new `<div>` element inside the `<main>` element.
   - Add a `class="content"` attribute to the new `<div>`.

3. **Add a header inside the new `<div>`** to label this section:

   - Place an `<h1>` tag inside the `<div class="content">`
   - Add the text `Portfolio` inside the new `<h1>`.

4. **Add a subheading for your first group of projects**:
   - Add an `<h3>` tag below the `<h1>` tag.
   - Add the text `FSD Projects` inside the `<h3>`.

5. **Create an empty unordered list** to display your projects later:
   - Add a `<ul>` element below the `<h3>` tag.
   - Add an `id="portfolio"` attribute to the `<ul>` element.

6. **Add a placeholder comment** for future projects:
   - Below the closing `</ul>` tag, add the comment `<!-- ASD Projects will go here -->`.

After completing these steps, your `<main>` section should look like this:
```html
<main>
  <div class="content">
    <h1>Portfolio</h1>
    <h3>FSD Projects</h3>
    <ul id="portfolio">

    </ul>

    <!-- ASD Projects will go here -->

  </div>
</main>
```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Add Headers and Lists?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      Headers help organize your content and make it easier to read. Unordered lists are great for displaying items, such as project links or features.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server** to make sure the "Portfolio" text is visible.

<br>
<br>
<br>
<br>

## **TODO 6: Link Your Future Projects**

🎯 **Goal:** Add links to your upcoming projects.

---

### Step-by-Step Instructions

1. 🔍 **Find the `<ul id="portfolio">` element** you added in the previous step (below the `<h3>FSD Projects</h3>` header).

2. **Add these three `<li>` elements** with links to your projects into the `<ul>` element:
   ```html
   <li>
     <a href="fsd-projects/platformer/">Platformer: A cannon-dodging adventure game for Halleb0t</a>
   </li>
   <li>
     <a href="fsd-projects/bouncing-box/">Bouncing Box: A fun introduction to web game development</a>
   </li>
   <li>
     <a href="fsd-projects/circularity/">Circularity: A poetic motion experiment with circles</a>
   </li>
   <li>
    <a href="fsd-projects/runtime/">Runtime : Fearless HalleBot goes on a side-scrolling adventure!</a>
   </li>
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Link Projects?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      Adding project links showcases your work and makes it easy for visitors to explore your creations.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** to ensure all links are clickable.
- Check to make sure your website looks like the image below before moving on:

<br>

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/portfolio/portfolio-with-links.png" style="max-width: 300px;">
</div>

<br>
<br>
<br>
<br>

## **TODO 7: Add CSS**

🎯 **Goal:** Link your CSS stylesheet and style the portfolio page.

---

### Step-by-Step Instructions

1. 🔍 **Find the `<head>` tag** inside `portfolio.html`.

2. **Add a `<link>` tag inside the `<head>` element** to link the CSS file.

   - Note that the link tag does not require a closing tag

3. **Add a `rel="stylesheet"` attribute and `href="style.css"` attribute** inside the `<link>` tag
   - Your code should now look like this:
     ```html
     <head>
       <title>Your Name's Website</title>
       <link rel="stylesheet" href="style.css" />
     </head>
     ```

4. **Open the `style.css` file** and add the following styles to the bottom of the file:
   ```css
   /* Portfolio styles */
   .content h1 {
     color: black;
   }

   #portfolio {
     list-style: none;
     margin: 0;
     padding: 0;
     width: 100%;
     display: flex;
     flex-direction: column;
     gap: 8px;
   }

   #portfolio li {
     border-radius: 12px;
     overflow: hidden;
   }

   #portfolio a {
     display: flex;
     justify-content: space-between;
     align-items: center;
     text-decoration: none;
     color: #444;
     padding: 16px 20px;
     font-size: 1.1rem;
     font-weight: 500;
     background: #fff;
     border: 1px solid #e0e0e0;
     border-radius: 12px;
     transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease;
   }

   #portfolio a:hover {
     background: #000;
     color: #fff;
     transform: translateX(4px);
   }

   #portfolio a::after {
     content: "->";
     font-size: 0.85rem;
     opacity: 0.4;
     transition: opacity 0.25s ease;
     white-space: nowrap;
   }

   #portfolio a:hover::after {
     opacity: 1;
   }
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 Why Add CSS?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      CSS makes your site look polished by controlling colors, layouts, and fonts. Styling helps create a better user experience.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server** to ensure the new styles are applied.

<br>
<br>
<br>
<br>

## **TODO 8: Go Live**

🎯 **Goal:** Push your changes to GitHub and make your portfolio go live.

---

### Step-by-Step Instructions

1. **Open the terminal in your codespace**

   - If the terminal isn’t visible, click the **Hamburger Menu > Terminal > New Terminal**.

2. **Enter the following commands one by one** in the terminal, pressing enter after each command to run it:

   ```bash
   git add .
   git commit -m "add portfolio page to website"
   git push
   ```

3. **Wait a few minutes for the changes to go live at your-username.github.io.**

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      💡 What is Git?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      Git is a tool that tracks changes to your code. It helps you manage different versions of your project and makes it easier to collaborate with others.
    </td>
  </tr>
</table>

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      🛠️ Basic Git Commands Explained
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
      <strong><code>git add</code></strong>: Stages (or prepares) your changes, telling Git which files you want to track.  
      <br><br>
      <strong><code>git commit</code></strong>: Saves a snapshot of the changes you’ve staged. It’s like taking a picture of your work at a specific moment in time.<br><ul><li>The message added to the <code>git commit</code> command should always be customized to describe the work you've completed.</li></ul>
      <br>
      <strong><code>git push</code></strong>: Sends your committed changes to the remote repository (e.g., GitHub) so others can see or use your work.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- Visit the site `your-github-username.github.io` to see your website live on the internet. If it doesn’t appear immediately, wait a few minutes and try refreshing your page.
  - Make sure to replace the text `"your-github-username"` with your actual github username when entering the URL in your browser.
- Click the link to your "Portfolio" from your home page to ensure your Portfolio is live on the web

<br>

<hr>

<br>

### 🎉🎉🎉 Congratulations! You can now share your project portfolio with others! 🎉🎉🎉
