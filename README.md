# 🎮 Citrubrain (https://citrubrain.vercel.app/)

Citrubrain is a playful educational platform where elementary and high school students can learn game mechanics by interacting with fun, logic-based mini-games. This project is built with **Next.js**, using modern front-end best practices including **CSS Modules**, **modular components**, and responsive design.

---

## ✅ Work Completed (June 25, 2025)

### 🧠 Project Foundation
- Initialized a Next.js project
- Created a **clean project structure** with:
  - `pages/` for route-based components
  - `components/` for reusable UI
  - `styles/` for global and modular CSS

### 🎨 Styling
- Split CSS into **modular styles** (`Home.module.css`, `Navbar.module.css`)
- Global styles are separated in `global.css` for resets, font settings, and shared layout (footer, etc.)
- Used accessible, student-friendly fonts and bright color schemes

### 🌐 Meta Tags & SEO
- Set `<head>` meta tags with appropriate title, description, OpenGraph, and viewport settings
- Added favicon and social media image metadata

### 🧭 Navigation Bar
- Built a **responsive, mobile-friendly nav bar**:
  - Links to: `Home`, `Games`, `About`, `Contact`
  - Collapsible hamburger menu on small screens
- Navigation componentized via `Navbar.js` + `Navbar.module.css`

### 🏠 Homepage (Landing)
- Developed the main homepage structure:
  - Welcome banner + tagline
  - Game section featuring future mini-games (e.g., *Mastermind*, *Memory Match*)
  - Buttons styled as placeholders for “Coming Soon”

### 🧱 Layout System
- Created `Layout.js` to wrap all pages with consistent structure
  - Includes shared **Navbar** and **Footer**
  - Connected via `_app.js` to maintain a clean architecture

### 🔍 Search Bar Functionality
- Input field tied to state using `useState`
- Search icon replaced with a clean **inline SVG** for scalability and styling
- Form is ready to support future features:
  - Search routing (e.g., `/search?q=...`)
  - Live filtering or autocomplete

---

## 💡 Future Features / Ideas

### 🚧 Gameplay & Routing
- Build actual game pages (`/games/mastermind`, `/games/memory`)
- Implement game logic with React state/hooks
- Possibly integrate WebAssembly or Canvas for complex games

### 🧩 Navigation Improvements
- Highlight active routes (`/home`, `/about`, etc.)
- Add dropdowns under "Games" for "By Grade", "By Skill", etc.

### 📱 Responsive UX
- Improve touch/mobile interactions
- Add animations or transitions for game cards and buttons

### 📊 Analytics & Feedback
- Collect basic usage analytics
- Add a simple contact/feedback form

### 🧠 Educational Tools
- Show underlying game logic after each round (e.g., how the algorithm cracked the code)
- “Learn Mode” vs “Play Mode”

---

## 🛠 Tech Stack

- **Next.js** – React framework for hybrid static & dynamic sites
- **CSS Modules** – Scoped styling per component
- **Image Optimization** – Built-in support via `next/image`
- **Modular Architecture** – Reusable and isolated UI components

---

## 👨‍💻 Author

Built with ❤️ by Victor Wong  
Senior Web Developer | [LinkedIn](https://linkedin.com/in/victor-wong) (optional link)

---

## 📁 Getting Started

```bash
npm install
npm run dev
