1...Project Name: DevStack – Development Technology Stack Explorer

2...Description: DevStack is a web-based platform that helps developers explore, compare, and select technologies for their projects. It provides detailed information about frontend, backend, database, and development tools, allowing users to build their ideal technology stack with ease.

3....Technologies Used: React.js – Building interactive user interfaces. TypeScript – Ensuring type safety and better code quality. Tailwind CSS – Styling and creating responsive layouts. DaisyUI – Ready-made UI components. React Icons – Adding technology icons. JavaScript (ES6+) – Application logic and functionality. Vite – Fast development server and build tool.

three features:
Technology Exploration: Explore various frontend, backend, database, and development tools with detailed descriptions, ratings, and difficulty levels.
Technology Comparison: Compare technologies side by side based on their features, ratings, categories, and learning difficulty to make informed decisions.
Custom Stack Builder: Select and organize technologies from different categories to build and visualize your ideal development stack for future projects.
React Questions & Answers
1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to write, read, and manage.

2. What is the difference between props and state?
Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows us to store and update data in a component. I used it to manage selected technologies in the custom stack builder and update the UI when users add or remove technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook runs side effects in a component. I used it to load technology data from a JSON file when the component first renders.

5. Why does every item in a .map() list need a unique key prop?
A unique key helps React identify which items have changed, been added, or been removed. It helps React update the UI efficiently.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying different UI elements based on a condition. I used it in the stack builder to show an empty stack message when no technologies are selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent passes data to a child using props. A child can communicate back to the parent by calling a function passed through props. In my project, I used this approach to handle technology selection and update the stack in the parent component.
