📌 Learning Outcomes
After completing this experiment, you will be able to
Understand the concept of lazy loading and its importance in frontend performance optimization
Implement lazy loading in React using React.lazy() and Suspense
Apply lazy loading to routes using react-router-dom
Reduce the initial bundle size and improve application load time
Structure a React application efficiently for better scalability and performance

📖 What is Lazy Loading?
Lazy Loading is a performance optimization technique where components are loaded only when they are required, instead of loading the entire application at once.
In React, lazy loading helps to:

Reduce initial bundle size
Improve first load time
Enhance user experience, especially in large-scale applications
React provides built-in support for lazy loading using:
React.lazy()
Suspense

⚙️ How Lazy Loading Works in React
Components are split into separate chunks
These chunks are fetched only when the component or route is rendered
A fallback UI (such as a loading message or loader) is displayed while the component loads
