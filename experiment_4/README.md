# 📌 State Management in React

## 📖 What is State Management?

State Management is the process of handling and controlling application data (state) so that the UI updates correctly based on user actions and events.

---

## 🧩 Local State

Local State is state that is managed **within a single component** using React hooks like `useState`.

**Key Points:**

- Scoped to one component  
- Simple and easy to use  
- Not shared across components  

**Example Use Case:**  
Form inputs, local counters, toggles

---

## 🌐 Global State

Global State is state that needs to be **shared across multiple components** in an application.

---

### 🔹 Context API

Context API is a **built-in React feature** used to manage and share global state without prop drilling.

**Key Points:**

- Avoids passing props through multiple component levels  
- Suitable for small to medium-sized applications  
- Easy to implement and maintain  

**Example Use Case:**  
Theme management, authentication state, global counters

---

### 🔹 Redux (Library)

Redux is a **state management library** used for large and complex React applications.

**Key Points:**

- Centralized store for the entire application  
- Predictable state updates using reducers  
- Highly scalable and easier to debug  

**Example Use Case:**  
Applications with complex data flow and multiple shared states

---

## 🎯 Learning Outcomes

1. Understood the concept of **State Management** in React.  
2. Learned the difference between **Local State and Global State**.  
3. Implemented **Context API** for global state management.  
4. Implemented **Redux** for centralized state management.  
5. Compared **Local State, Context API, and Redux** to identify appropriate use cases.

--- 