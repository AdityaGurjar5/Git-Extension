# GitHub Users Viewer - Chrome Extension

A lightweight Chrome Extension that fetches and displays public GitHub users using the GitHub API. It allows you to:

- View a list of GitHub users
- Click on a user to see detailed profile information
- Search users by username with debounced input for better performance

---

## Features

- Built using Manifest V3
- Simple and responsive Popup UI
- Fetches users from GitHub’s public API
- Shows user avatar, username, location, bio, and profile link
- Search functionality with debouncing

---

## Tech Stack

- JavaScript
- HTML/CSS
- Chrome Extension (Manifest V3)

---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AdityaGurjar5/Git-Extension.git
cd Git-Extension
```

2. Load the extension in Chrome:

- Open Chrome and go to: `chrome://extensions`
- Enable Developer Mode (top right)
- Click **Load unpacked**
- Select the folder where this extension's files are located

---

## Project Structure

```bash
git-extension/
│
├── popup.html        # Extension popup UI
├── popup.js          # Handles fetching, rendering, search logic
├── utils.js          # Contains reusable helper code
├── popup.css         # Styles for popup layout
├── manifest.json     # Extension metadata and permissions
├── icons/            # Folder for extension icons (16x16, 48x48, etc.)
│   ├── icon_16.png
│   ├── icon_48.png
│   └── icon_128.png
```

---

## GitHub Public APIs Used

- List Users: [https://api.github.com/users](https://api.github.com/users)
- User Details: [https://api.github.com/user/{id}](https://api.github.com/user/{id})
