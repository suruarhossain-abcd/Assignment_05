# 🚀 DevStack – Development Technology Stack Explorer

<p align="center">
  <b>Explore. Compare. Build Your Perfect Tech Stack.</b>
</p>

## 📌 About The Project

**DevStack** is a web-based platform that helps developers explore, compare, and select technologies for their projects.

It provides detailed information about frontend, backend, database, and development tools, allowing users to build their ideal technology stack with ease.

## 🛠️ Technologies Used

| Technology           | Purpose                                      |
| -------------------- | -------------------------------------------- |
| ⚛️ React.js          | Building interactive user interfaces         |
| 📘 TypeScript        | Ensuring type safety and better code quality |
| 🎨 Tailwind CSS      | Creating responsive and modern designs       |
| 🌼 DaisyUI           | Using ready-made UI components               |
| 🎯 React Icons       | Adding beautiful icons                       |
| 💛 JavaScript (ES6+) | Application logic and functionality          |
| ⚡ Vite               | Fast development server and build tool       |

## ✨ Key Features

### 🔍 1. Technology Exploration

Explore various frontend, backend, database, and development tools with detailed descriptions, ratings, categories, and difficulty levels.

### ⚖️ 2. Technology Comparison

Compare technologies side by side based on their features, ratings, categories, and learning difficulty to make informed decisions.

### 🧩 3. Custom Stack Builder

Select and organize technologies from different categories to build and visualize your ideal development stack for future projects.

---

# 📚 React Questions & Answers

### 1️⃣ What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write, read, and manage.

### 2️⃣ What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3️⃣ What does the `useState` hook do, and where did you use it in this project?

The `useState` hook allows us to store and update data in a component. I used it to manage selected technologies in the custom stack builder and update the UI when users add or remove technologies.

### 4️⃣ What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook runs side effects in a component. I used it to load technology data from a JSON file when the component first renders.

### 5️⃣ Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify which items have changed, been added, or been removed. It helps React update the UI efficiently.

### 6️⃣ What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different UI elements based on a condition. I used it in the stack builder to show an empty stack message when no technologies are selected.

### 7️⃣ How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can communicate back to the parent by calling a function passed through props. In my project, I used this approach to handle technology selection and update the stack in the parent component.

---

<p align="center">
  💻 <b>Built with ❤️ using React, TypeScript, and Tailwind CSS.</b>
</p>
