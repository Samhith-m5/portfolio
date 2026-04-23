# Samhith Reddy — Portfolio

A modern, dark-themed personal portfolio built with **React** and **React Router**. Inspired by [cosmos.so](https://cosmos.so), [wabi.ai](https://wabi.ai), and [flighty.com](https://flighty.com).

## 🚀 Quick Start

### Step 1: Install Dependencies
```bash
cd portfolio
npm install
```

### Step 2: Run Locally
```bash
npm start
```
Opens at [http://localhost:3000](http://localhost:3000)

## 📦 Deploy to GitHub Pages

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Samhith-m5/portfolio.git
git push -u origin main
```

### Step 2: Deploy
```bash
npm run deploy
```

### Step 3: Enable GitHub Pages
- Go to Repository → Settings → Pages
- Select branch: `gh-pages`
- Your site will be live at: **https://Samhith-m5.github.io/portfolio**

## 🗂 Project Structure
```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── Projects.js
│   │   └── Projects.css
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## ✨ Features
- ⚡ React Router with HashRouter (GitHub Pages compatible)
- 🎨 Premium dark theme with glassmorphism
- 📱 Fully responsive design
- 🌟 Smooth animations and micro-interactions
- 🔗 NavLink-based navigation with active states

## 🛠 Built With
- React 18
- React Router DOM v6
- Vanilla CSS (custom design system)
- Google Fonts (Inter + Space Grotesk)
