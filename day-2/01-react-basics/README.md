# 01 - React Basics (0-10 min)

## 🎯 Learning Goals
- Understand what React is
- Learn JSX basics
- Create a simple component
- Understand file structure

---

## 📖 What is React?

React is a **JavaScript library** for building user interfaces using **components**.

Think of components as **LEGO blocks** - small pieces you combine to build something big.

---

## 🧩 Your First Component

```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

**Key Points:**
- Components are functions
- They return JSX (looks like HTML)
- Must start with capital letter
- Export to use in other files

---

## 🏗️ JSX Basics

JSX = JavaScript + XML (HTML-like syntax)

```jsx
function Greeting() {
  const name = "Aaron";
  
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Welcome to React</p>
    </div>
  );
}
```

**Rules:**
- Use `{}` for JavaScript expressions
- One parent element (wrap in `<div>` or `<>`)
- `className` instead of `class`
- Self-closing tags: `<img />`, `<br />`

---

## 📁 File Structure

```
my-app/
├── public/
├── src/
│   ├── App.jsx        ← Main component
│   ├── main.jsx       ← Entry point
│   └── index.css
├── package.json
└── vite.config.js
```

---

## 🎬 Practice Exercise

Create a component that displays:
- Your name
- Your favorite color
- A welcome message

Try it in `App.jsx`!
