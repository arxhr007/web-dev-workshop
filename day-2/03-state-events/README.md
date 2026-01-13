# 03 - State & Events (20-35 min) ⭐ MOST IMPORTANT

## 🎯 Learning Goals
- Understand what state is
- Use `useState` hook
- Handle button clicks
- Update UI dynamically

---

## 🔄 What is State?

State = **data that can change** in your component.

When state changes → React **re-renders** → UI updates automatically!

---

## 🪝 The useState Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return <p>Count: {count}</p>;
}
```

**Breaking it down:**

```jsx
const [count, setCount] = useState(0);
//     ↑       ↑            ↑
//   value  updater    initial value
```

---

## 🖱️ Handling Clicks

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

**Every click:**
1. `setCount` updates the state
2. React re-renders the component
3. Button shows new count

---

## 📝 Text Input Example

```jsx
import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");
  
  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}!</p>
    </div>
  );
}
```

---

## 🔘 Toggle Example (True/False)

```jsx
import { useState } from "react";

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);
  
  return (
    <button onClick={() => setIsOn(!isOn)}>
      {isOn ? "ON 🟢" : "OFF 🔴"}
    </button>
  );
}
```

---

## 🎨 Multiple State Variables

```jsx
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [city, setCity] = useState("");
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      
      <p>{name}, {age}, {city}</p>
    </div>
  );
}
```

---

## 🚨 Common Mistakes

❌ **DON'T modify state directly:**
```jsx
count = count + 1;  // WRONG!
```

✅ **DO use the setter function:**
```jsx
setCount(count + 1);  // CORRECT!
```

---

## 🎬 Practice Exercise

Create a **Like Button**:
- Shows number of likes
- Click to increase
- Starts at 0

Try it yourself!
