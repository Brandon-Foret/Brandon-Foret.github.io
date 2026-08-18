# First Website

### 🎉🎉🎉 It's time to create your very own website! 🎉🎉🎉

## **Table of Contents**

- [Objectives](#objectives)
- [Lesson Steps](#lesson-steps)
  - [Work Flow](#work-flow-how-to-navigate-through-the-lesson-steps)
  - [TODO 0 : Preview Your Site](#todo-0-preview-your-site-with-live-server)
  - [TODO 1: Add a Title in index.html](#todo-1-add-a-title-in-indexhtml)
  - [TODO 2: Add Style to Your Site](#todo-2-add-style-to-your-site)
  - [TODO 3: Create Structure for the Main Content](#todo-3-create-structure-for-the-main-content)
  - [TODO 4: Add Your Name and Title](#todo-4-add-your-name-and-title)
  - [TODO 5: Add Your Interests](#todo-5-add-your-interests)
  - [TODO 6: Add an Image](#todo-6-add-an-image)
  - [TODO 7: Add Navigation](#todo-7-add-navigation)
  - [TODO 8: Go Live](#todo-8-go-live)

## **Objectives**

🎯 **Goal:** Build and publish your own website on the internet using GitHub Pages! 

In this project, you will:

- Learn how **HTML and CSS** work together to create a webpage.
- Add personalized content, such as your interests and photos, to make the website your own.

<br>
<br>
<br>

# Lesson Steps

### **Work Flow: How to Navigate Through the Lesson Steps**

🎯 **Goal:** Follow the steps in this lesson to build and customize your website one step at a time.

---

### Step-by-Step Work Flow

1. 📂 **Open the `index.html` file** in your codespace to get started.

2. **Look for TODO sections** in the README:
   - Each **TODO** has instructions for **what you need to do** next.
   - These steps will tell you **where to place new code** inside the existing tags.

3. **Follow the instructions carefully** for each TODO:
   - Pay attention to where code should go (inside `<head>` or `<body>`).
   - If a step asks you to **add or remove code**, **only make those changes**—don't change anything else unless instructed.

4. 🖥️ **Preview your site regularly using Live Server** to see how your changes affect the website.

5. **Build gradually**:
   - Each TODO builds on the previous one, so **complete them in order**.
   - Take your time to **double-check your code** before moving on to the next step.

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
      - 🎯 Only add code if a TODO step tells you to.<br>
      - 🖥️ Preview frequently to make sure everything is working correctly.
    </td>
  </tr>
</table>

<br>
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
2. **Right-click on `index.html`** and select **"Open with Live Server."**

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/first-website/open-with-live-server.png" alt="Right-click 'Open with Live Server'" style="max-width: 250px;">
</div>

---

#### **Option 2: Go Live Button in the Bottom Panel**

1. **Look at the bottom-right corner** of your codespace.
2. **Click the "Go Live" button** to launch Live Server.

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
- At the beginning of this project, you will have a completely blank webpage. You will add content to your page as you work through the project.

<br>
<br>
<br>
<br>

## **TODO 1: Add a Title in index.html**

🎯 **Goal:** Update the `<title>` element so your website has a unique and meaningful title. This title will appear in the browser tab when someone visits your site.

---

### Step-by-Step Instructions

1. 🔍 **Find the file tree**
   - Look to the **left side of your codespace** and find the list of project files and folders.

2. **Open the `index.html` file**
   - 📂 Inside the file tree, **click on `index.html`** to open it.

3. 🔍 **Locate the `<title>` element inside the `<head>` element**

4. **Update the text inside `<title>`**
   - **Replace** the text that says `CHANGE ME` with a creative name for your website.

Your updated code should look like this:

```html
<head>
  <title>My Awesome Website</title>
</head>
```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 16px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why Update the <code style="color: #79c0ff;">&lt;title&gt;</code>?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      The <code style="color: #79c0ff;">&lt;title&gt;</code> defines the name shown in the browser tab when someone visits your website. A good
      title helps visitors know what your site is about and makes your work look more polished.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server** to see the new title in the browser tab.
- The title will appear in the tab at the very top of the browser.

<br>
<br>
<br>
<br>

## **TODO 2: Add Style to Your Site**

🎯 **Goal:** Link a CSS file to your HTML file to style the layout with a customized theme.

---

1. **Add a `<link>` tag inside the `<head>` element** to connect the CSS file to your HTML page. The `<link>` tag should have these attributes: `rel="stylesheet"` and `href="style.css"`.
   - Your `<head>` tag should now look like this:

     ```html
     <head>
       <title>My Awesome Website</title>
       <link rel="stylesheet" href="style.css" />
     </head>
     ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What is a <code style="color: #79c0ff;">&lt;link&gt;</code> tag?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      The <code style="color: #79c0ff;">&lt;link&gt;</code> tag tells your HTML page where to find its stylesheet. The <code style="color: #79c0ff;">rel="stylesheet"</code> attribute says "this is a CSS file," and the <code style="color: #79c0ff;">href="style.css"</code> attribute says "here's where to find it." Without this link, your browser won't know your CSS file exists!
    </td>
  </tr>
</table>

---

<br>

2. **Customize your page's background color** by modifying the `background` property in the `body` selector.

   - Open the `style.css` file in your codespace.
   - Find this line of code:

     ```css
     background: #947706;
     ```

   - Change the color value to a color you like. You can use a hex code (like `#f5f5f5` for light gray) or a color name (like `lightblue`). You don't have to use these exact colors — pick colors that feel like **you**! Try the [MDN color picker](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Color_picker_tool) or search "hex color picker" in Google to find colors you love. Light backgrounds like `#f5f5f5`, `#faf8f5`, or `#eef1f5` all look great. Want to go with a dark-mode color choice? Try `#111` or `#0a0a0a`!

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why does the background color matter?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      Your background color sets the entire mood of your site. A light background feels clean and open — like a fresh canvas. A dark background feels bold and immersive. Either way, the key is making your content stand out against it. Try a few options and see what feels like <em>you</em>!
    </td>
  </tr>
</table>

---

### ✅ **Check Your Work!**

The `style.css` file originally added a puke green background color to your page. Use Live Server to ensure you've customized your background color before moving on.

---

<br>
<br>
<br>
<br>

## **TODO 3: Create Structure for the Main Content**

🎯 **Goal:** Add a `<main>` element with a sidebar and content area inside the preexisting `<div id="all-contents">`.

---

### Phase 1: Add the HTML

1. 🔍 **Find the `<div id="all-contents">` element** inside `index.html`
   - Look for this part of the code:

     ```html
     <!-- All content goes here -->
     <div id="all-contents">

     </div>
     ```

2. **Add a placeholder comment inside `<div id="all-contents">`**, just above where the `<main>` element will go.
   - Inside `<div id="all-contents">`, type this HTML comment on the first line:

     ```html
     <div id="all-contents">
       <!-- nav goes here (TODO 6) -->
     </div>
     ```

   - This comment is just a note to yourself — it won't appear on the page. It marks the spot where you'll add a navigation bar later in TODO 6.

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why Add Code Comments?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      HTML comments (written as <code style="color: #79c0ff;">&lt;!-- your note here --&gt;</code>) are invisible to anyone visiting your site — they only show up in the code. Developers use them to leave notes for themselves and others, mark spots where work still needs to be done, and make code easier to understand at a glance. Think of them like sticky notes inside your project. The comment you just added is a placeholder that says "hey, the nav bar goes here — come back to this in TODO 6!"
    </td>
  </tr>
</table>

---

3. **Add a `<main>` element inside `<div id="all-contents">`**, and place two `<div>` elements inside of it — one with `class="sidebar"` and one with `class="content"`.
   - Your updated code should look like this:

     ```html
     <div id="all-contents">
       <!-- nav goes here (TODO 6) -->

       <main>
         <div class="sidebar">

         </div>

         <div class="content">

         </div>
       </main>
     </div>
     ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Why doesn't the page look different yet?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      Right now, the <code style="color: #79c0ff;">&lt;main&gt;</code>, <code style="color: #79c0ff;">&lt;div class="sidebar"&gt;</code>, and <code style="color: #79c0ff;">&lt;div class="content"&gt;</code> elements are empty containers with nothing inside them. HTML elements without content or styling are invisible on the page. That's totally normal — you'll bring them to life with CSS in the next phase!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work! (Phase 1)**

- Open your `index.html` file. Use the inspector tools to confirm that the `<main>` element with its two inner `<div>` elements is **inside** `<div id="all-contents">`.
- **Preview your site** using **Live Server**. The page should still appear blank — that's expected!

---

<br>

### Phase 2: Style the main element

1. 🔍 **Open `index.html` and find the `<head>` element**

2. **Add the following CSS rules** at the bottom of the `style.css` file:

   ```css copy
   main {
     display: grid;
     grid-template-columns: minmax(220px, 1fr) minmax(420px, 1.6fr);
     align-items: center;
     min-height: calc(100vh - 160px);
     gap: clamp(32px, 5vw, 80px);
   }

   .sidebar {
     width: 100%;
   }

   .content {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     gap: 12px;
   }
   ```

<br>

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      🛠️ Best Practice: Change, Save, Observe, Repeat
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      Whenever you're experimenting with code, follow this cycle: <strong>change one thing</strong>, <strong>save the file</strong>, and <strong>check Live Server</strong> to see what happened. This is exactly how professional developers work — small changes, constant feedback. If something breaks, you'll know exactly which change caused it. This habit will serve you well throughout this project and beyond!
    </td>
  </tr>
</table>

<br>
<br>
<br>
<br>

## **TODO 4: Add Your Name and Title**

🎯 **Goal:** Add your name and a title or position inside the content area, then style the text to stand out.

---

### Phase 1: Add the HTML

1. 🔍 **Find the `<div class="content">` element** inside `index.html`
   - Look for this part of the code:
     ```html
     <div class="content">

     </div>
     ```

2. **Add an `<h2>` element** inside `<div class="content">` with your name.

3. **Add a `<p>` element** below the `<h2>` with your position or title (like `Student at Unicorn High` or `Future Software Engineer`).
   - Your updated code should look like this:

     ```html
     <div class="content">
       <h2>Halle Bot</h2>
       <p>Mascot at Operation Spark</p>
     </div>
     ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 Your text shows up! But why does it look so plain?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      Right now your name and title are using the browser's <strong>default styling</strong> — basic text with default sizing and spacing. That's because you haven't added any CSS rules for <code style="color: #79c0ff;">&lt;h2&gt;</code> or <code style="color: #79c0ff;">&lt;p&gt;</code> yet. You'll fix that in the next phase!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work! (Phase 1)**

- **Preview your site** using **Live Server**. You should see your name and title displayed in the content area on the right side of the layout.
- The text will look plain with default browser styling — that's expected for now!

---

<br>

### Phase 2: Add CSS for Text

1. **Open `style.css`** and add the following CSS rules at the bottom of the file:

   ```css copy
   h2 {
     margin: 0;
     font-size: clamp(4rem, 10vw, 7rem);
     line-height: 0.9;
     font-weight: 900;
     letter-spacing: -0.04em;
     text-transform: uppercase;
     color: #000;
   }

   .content > p {
     margin: 0;
     color: #999;
     font-size: 0.9rem;
     text-transform: uppercase;
     letter-spacing: 0.15em;
     line-height: 1.4;
   }
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What does <code style="color: #79c0ff;">.content p</code> mean?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      The selector <code style="color: #79c0ff;">.content p</code> targets only <code style="color: #79c0ff;">&lt;p&gt;</code> elements that are <strong>inside</strong> an element with <code style="color: #79c0ff;">class="content"</code>. This way, you can style the paragraph in your content area without accidentally changing paragraphs in other parts of your page.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work! (Phase 2)**

- **Preview your site** using **Live Server**. Your name should appear large and bold black, and your title should appear in a softer gray tone below it.
- The contrast between the bold name and muted title creates visual hierarchy — your eye goes to the name first!

---

<br>

### Phase 3: Customize Your Text Colors

Open `style.css` and update the `color` values for `h2` and `.content p` to match your theme.

Here's an example:

```css copy
h2 {
  color: #e94560; /* bright accent */
}

.content p {
  color: #a8b2d8;
}
```

Choose colors that complement the background you picked in TODO 2. Your name should stand out — try a bold or bright color for the `<h2>`. Your title can be a softer or lighter shade.

---

<br>

### ✅ **Check Your Work! (Phase 3)**

- **Preview your site** using **Live Server**. Your name and title should now display in the custom colors you chose.
- Make sure the text is still easy to read against your background. If it's hard to see, try a darker or brighter color.

<br>
<br>
<br>
<br>

## **TODO 5: Add Your Interests**

🎯 **Goal:** Add a section that lists your personal interests inside the content area. You'll write the HTML first, then style it with CSS, and finally add an interactive hover effect.

---

### Phase 1: Add the HTML

1. 🔍 **Find the `<div class="content">` element** in `index.html`
   - Look for this section in your code (it should already have your `<h2>` name and `<p>` position from TODO 3):
     ```html
     <div class="content">
       <h2>Halle Bot</h2>
       <p>Mascot at Operation Spark</p>
     </div>
     ```

2. **Add a new `<div id="interests">` section below your `<p>` element**, inside `<div class="content">`.
   - Inside this new div, add an `<h3>` heading and a `<ul>` with three `<li>` items listing your interests.

   - Your updated code should look like this:

     ```html
     <div class="content">
       <h2>Halle Bot</h2>
       <p>Mascot at Operation Spark</p>

       <div id="interests">
         <h3>Interests</h3>
         <ul>
           <li>Coding</li>
           <li>Football</li>
           <li>Sleeping</li>
         </ul>
       </div>
     </div>
     ```

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- You should see your interests listed with default browser bullet points below your name and position.
- It will look plain — that's expected! You'll style it next.

---

### Phase 2: Add the CSS

Now let's make the interests section look clean and modern.

1. 🔍 **Open your `style.css` file**

2. **Add the following CSS rules** at the bottom of the file:

   ```css copy
   #interests {
     margin-top: 32px;
     width: 100%;
   }

   #interests h3 {
     margin: 0 0 12px;
     font-size: 0.75rem;
     font-weight: 700;
     text-transform: uppercase;
     letter-spacing: 0.2em;
     color: #aaa;
   }

   #interests ul {
     list-style: none;
     margin: 0;
     padding: 0;
     display: flex;
     flex-wrap: wrap;
     gap: 8px;
   }

   #interests li {
     color: #555;
     font-size: 1rem;
     font-weight: 600;
     padding: 10px 20px;
     background: #fff;
     border: 1px solid #ddd;
     border-radius: 100px;
     transition:
       background 0.25s ease,
       color 0.25s ease,
       transform 0.25s ease;
     cursor: default;
   }

   #interests li:hover {
     background: #000;
     color: #fff;
     border-color: #000;
     transform: translateY(-2px);
   }
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What's Happening Here?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      <code style="color: #79c0ff;">list-style: none</code> removes the default bullet points. <code style="color: #79c0ff;">border-radius: 100px</code> turns each item into a pill shape. <code style="color: #79c0ff;">flex-wrap: wrap</code> lets the pills flow onto multiple lines. The <code style="color: #79c0ff;">transition</code> property makes the hover effect smooth instead of snapping — and <code style="color: #79c0ff;">:hover</code> tells the browser what to do when the mouse is over each item!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your interests should appear as pill-shaped tags with white backgrounds and a styled heading.
- **Hover your mouse over each interest** — they should smoothly flip to black with white text and lift up! This makes your page feel interactive and alive.

---

### Phase 3: Customize with Your Own Colors

Now make the interests section **yours**. Pick colors that match your personality!

1. 🔍 **Find the CSS rules you just added** in `style.css`

2. **Update these properties** with any colors you like:
   - Change the **heading color** on `#interests h3`
   - Change the **pill background** on `#interests li`
   - Change the **hover background** on `#interests li:hover`

   Here's an example — but use your own colors!

   ```css copy
   #interests h3 {
     color: #e94560;
   }

   #interests li {
     background: #ffe8ec;
     border-color: #e94560;
     color: #e94560;
   }

   #interests li:hover {
     background: #e94560;
     color: #fff;
   }
   ```

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your interests section should now pop with your custom colors.
- Make sure the hover effect still works — try different color combos until you find one you love!

<br>
<br>
<br>
<br>

## **TODO 6: Add an Image**

🎯 **Goal:** Add an image to your sidebar section. You'll place the HTML first, style it with a black-and-white filter, and then optionally reveal it in full color.

---

### Phase 1: Add the HTML

1. 🔍 **Find the `<div class="sidebar">` element** in `index.html`
   - Look for this part of the code inside the `<main>` element:
     ```html
     <div class="sidebar">

     </div>
     ```

2. **Add an `<img>` tag inside the `<div class="sidebar">` element**
   - Remember that `<img>` elements do not need closing tags!
   - Add a `class="sidebar-img"` attribute, a `src="CHANGE_ME"` attribute, and an `alt` attribute:
     ```html
     <div class="sidebar">
       <img class="sidebar-img" src="CHANGE_ME" alt="My image" />
     </div>
     ```

3. **Get a good image URL from Google Images**
   - **Open Google Images** and search for an image that fits your website.
   - **Right-click the image** you want to use, then **select "Copy image address."**

<div style="text-align: center;">
  <img src="https://raw.githubusercontent.com/OperationSpark/images/refs/heads/master/hs-curriculum/fsd-projects/first-website/copy-image-address.png" alt="Copy Image Address from Google" style="max-width: 250px;">
</div>

<br>

4. **Paste the copied URL into the `src` attribute** of your `<img>` tag, replacing `CHANGE_ME`.
   - Example:
     ```html
     <div class="sidebar">
       <img class="sidebar-img" src="https://example.com/image.jpg" alt="My image">
     </div>
     ```

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- You should see your image, but it's probably way too big and overflows the sidebar. Don't worry — CSS will fix that next!

---

### Phase 2: Add the CSS (Black & White Filter)

Let's tame that image and give it a curated, editorial look — like a photo in a magazine.

1. 🔍 **Open your `style.css` file**

2. **Add the following CSS rule** at the bottom of the file:

   ```css copy
   .sidebar-img {
     width: 100%;
     max-width: 760px;
     aspect-ratio: 3 / 4;
     object-fit: cover;
     display: block;
     border-radius: 16px;
     filter: grayscale(100%);
     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
     transition:
       filter 0.4s ease,
       transform 0.4s ease,
       box-shadow 0.4s ease;
   }

   .sidebar-img:hover {
     filter: grayscale(0%);
     transform: translateY(-4px);
     box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
   }
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What Does <code style="color: #79c0ff;">filter</code> Do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      The <code style="color: #79c0ff;">filter</code> property applies visual effects to an element — like Instagram filters but in CSS! <code style="color: #79c0ff;">grayscale(100%)</code> turns the image fully black and white. On hover, <code style="color: #79c0ff;">grayscale(0%)</code> reveals the full color — try it! <code style="color: #79c0ff;">border-radius: 16px</code> rounds the corners and <code style="color: #79c0ff;">box-shadow</code> adds a soft drop shadow. The hover also lifts the image up with <code style="color: #79c0ff;">translateY(-4px)</code>. One block of CSS, huge visual impact!
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your image should now fit neatly in the sidebar with rounded corners, a shadow, and a black-and-white filter. **Hover over it** — it should reveal full color and lift up!

---

### Phase 3: Customize Your Image Style

You can keep the black-and-white-to-color hover effect or try different options:

1. 🔍 **Find the `.sidebar-img` rule** in `style.css`

2. **Try one of these filter options:**
   - **Keep black & white** (already applied — skip this step if you like it!)
   - **Remove the filter entirely** to show full color: delete the `filter` line
   - **Try a warm tone**: `filter: sepia(0.3) contrast(1.05);`

3. **Optionally add `border-radius: 8px`** for rounded corners.

   Here's an example with full color and a bigger border radius:

   ```css copy
   .sidebar-img {
     width: 100%;
     max-width: 760px;
     aspect-ratio: 3 / 4;
     object-fit: cover;
     display: block;
     border-radius: 24px;
     box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
   }
   ```

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your image should look polished — whether in black & white, warm tone, or full color.
- The sidebar should feel intentional and designed!

<br>
<br>
<br>
<br>

## **TODO 7: Add Navigation**

🎯 **Goal:** Add a navigation bar at the top of your page. Your page already looks great — adding the nav is the finishing touch that makes it feel like a REAL website!

Your page already has a name, interests, and an image. Now let's add the finishing touch: a navigation bar at the top.

---

### Phase 1: Add the HTML

1. 🔍 **Find the `<div id="all-contents">` element** in `index.html`
   - The `<nav>` section will be nested **inside the `<div id="all-contents">` opening tag** but **above the opening `<main>` tag**:

2. **Add a `<nav>` element** with an `<h1>` site title and a `<ul id="nav-ul">` containing two navigation links.
   - Your updated code should look like this:

     ```html
     <div id="all-contents">
       <nav>
         <h1>Your Name's Website</h1>
         <ul id="nav-ul">
           <li class="nav-li"><a href="index.html">Home</a></li>
           <li class="nav-li"><a href="portfolio.html">Portfolio</a></li>
         </ul>
       </nav>

       <main>
         <!-- Other HTML you've already added -->
       </main>
     </div>
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
      A navigation menu helps visitors move between pages on your site. Almost every website on the internet has one! The <code style="color: #79c0ff;">&lt;a&gt;</code> (anchor) tags create clickable links that take visitors to different pages.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- You should see your site title and two links (Home and Portfolio) at the top of the page with default browser styles — bulleted and unstyled. The page structure is nearly complete!

---

### Phase 2: Add the CSS

Let's turn that plain list of links into a clean, minimal navigation bar. Notice how the site title uses `text-transform: uppercase` and small `letter-spacing` — this creates contrast with your big headline below.

1. 🔍 **Open your `style.css` file**

2. **Add the following CSS rules** at the bottom of the file:

   ```css copy
   nav {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 48px;
     padding: 16px 24px;
     background: #fff;
     border: 1px solid #e0e0e0;
     border-radius: 12px;
   }

   nav h1 {
     margin: 0;
     font-size: 0.8rem;
     font-weight: 700;
     text-transform: uppercase;
     letter-spacing: 0.2em;
     color: #000;
   }

   #nav-ul {
     list-style: none;
     display: flex;
     gap: 8px;
     margin: 0;
     padding: 0;
   }

   .nav-li a {
     color: #666;
     text-decoration: none;
     font-size: 0.85rem;
     font-weight: 500;
     padding: 6px 14px;
     border-radius: 8px;
     transition:
       background 0.25s ease,
       color 0.25s ease;
   }

   .nav-li a:hover {
     background: #000;
     color: #fff;
   }
   ```

---

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      💡 What's New Here?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      <code style="color: #79c0ff;">text-transform: uppercase</code> makes the site title ALL CAPS without changing your HTML. <code style="color: #79c0ff;">letter-spacing: 0.2em</code> spreads the letters apart for a clean look. <code style="color: #79c0ff;">border-radius: 12px</code> rounds the nav bar corners and <code style="color: #79c0ff;">border-radius: 8px</code> rounds the link buttons. On hover, the links flip to a black background with white text — try it! The small title vs. big headline below creates the kind of contrast you see on real studio websites.
    </td>
  </tr>
</table>

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your navigation should be a clean white card with your small uppercase site title on the left and links on the right.
- **Hover over the links** — they should flip to black pill buttons!
- Take a moment to look at your full page — you now have a header, sidebar, content area, and nav. It looks like a real website!

---

### Phase 3: Make the Nav Yours

Now your website has a header, content, sidebar, and nav — it's a REAL website. Customize the nav to match your style!

1. 🔍 **Find the nav CSS rules** in `style.css`

2. **Update the colors** to match your theme.

   Here's an example — but pick colors that represent YOU:

   ```css copy
   nav {
     background: #1a1a2e;
     border-color: #1a1a2e;
   }

   nav h1 {
     color: #e94560;
   }

   .nav-li a {
     color: #a8b2d8;
   }

   .nav-li a:hover {
     background: #e94560;
     color: #fff;
   }
   ```

---

<br>

### ✅ **Check Your Work!**

- **Preview your site** using **Live Server**.
- Your nav bar should now match your personal color scheme.
- Scroll through your entire page — you built this! A navigation bar, a sidebar with an image, a content area with your name and interests, all styled with your own colors.

<br>

---

<br>

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;">
      🎉 Great Job!
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #ccc;">
      You've finished all the content TODOs! Your website has a navigation bar, a sidebar image, your name, your position, and a styled interests section. That's a real, functioning website you built from scratch. Next up: going live so the whole world can see it!
    </td>
  </tr>
</table>

<br>
<br>
<br>
<br>

## **TODO 8: Go Live**

🎯 **Goal:** Host your website online using **GitHub Pages**.

---

### Step-by-Step Instructions

1. **Open the terminal in your codespace**
   - If the terminal isn't visible, click the **Hamburger Menu > Terminal > New Terminal**.

2. **Enter the following commands one by one** in the terminal, pressing enter after each command to run it:

   ```bash copy
   git add .
   git commit -m "finished first website"
   git push
   ```

3. **Wait a few minutes for the changes to go live at your-username.github.io.**

<table style="width: 80%; margin-left: auto; margin-right: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;"> <tr> <th style="text-align: left; padding: 10px; background-color: #444; color: white; border-bottom: 1px solid #666;"> 💡 What Is GitHub Pages? </th> </tr> <tr> <td style="padding: 10px; color: #ccc;"> GitHub Pages allows you to publish websites directly from your GitHub repositories. It's a great way to share your projects online without needing any special hosting services. </td> </tr> </table>

### ✅ **Check Your Work!**

- Visit the site `your-github-username.github.io` to see your website live on the internet. If it doesn't appear immediately, wait a few minutes and try refreshing your page.
  - Make sure to replace the text `"your-github-username"` with your actual github username when entering the URL in your browser.