# **Saving Your Code to GitHub**

When working on coding projects, it's important to save and track your changes using **Git**. Follow these three commands in your terminal to save your work and upload it to GitHub.

<br><hr><br>

## 3-Step Process for Submitting Code

Type each command into your terminal, and press **Enter** after each one.

### Command #1 (Don't forget the period at the end!):

```bash
git add .
```

### Command #2

When typing out the commit message, replace the text in quotes with a short description of what you changed.

```bash
git commit -m "replace me!"
```

### Command #3

```bash
git push
```

<br><hr><br>

## What do these commands do?

1. `git add .` is used to stage your changes, telling Git which files to track.

2. `git commit -m "customize this message"` is used to name the changes you’ve made.

3. `git push` is used to upload your changes to GitHub, where your code is saved and can be shared and accessed by others.

<br><hr><br>

## Other Useful Git Commands

### **Pulling Changes from GitHub**

If you want to update your local repository with the latest changes from GitHub, you can run:

```bash
git pull
```

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📌 What does this do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">

- Downloads the latest changes from your GitHub repository to your local machine.
- If you ever see an error when trying to push your changes, you may need to pull first to ensure your local repository is up-to-date.
</td>
  </tr>
</table>

---

### **Checking the Status of Your Repository**

If you want to see the current status of your Git repository, you can run:

```bash
git status
```

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📌 What does this do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">

- Displays the current state of your repository if you are unsure about which files have been changed.
- Shows which files are staged, unstaged, or untracked.
</td>
  </tr>
</table>

<br><hr><br>

Now your code can be safely stored and retrieved from GitHub! 🎉
