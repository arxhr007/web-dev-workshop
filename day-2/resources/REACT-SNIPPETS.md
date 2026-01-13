# ⚛️ React Snippets Quick Reference

Copy-paste snippets for fast React development.

---

## 🧩 Basic Components

### Functional Component
```jsx
function ComponentName() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default ComponentName;
```

**Shortcut in VS Code:** `rafce` (with ES7 snippets extension)

---

### Component with Props
```jsx
function Card({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
```

**Usage:**
```jsx
<Card title="React" description="JavaScript library" />
```

---

## 🪝 useState Snippets

### Simple Counter
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

---

### Text Input
```jsx
import { useState } from "react";

function InputExample() {
  const [text, setText] = useState("");
  
  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
```

---

### Toggle/Boolean
```jsx
import { useState } from "react";

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <p>Content is visible!</p>}
    </div>
  );
}
```

---

### Array State (Todo List)
```jsx
import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  
  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };
  
  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
```

---

### Object State (Form)
```jsx
import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: ""
  });
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div>
      <input 
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <input 
        name="age"
        type="number"
        value={form.age}
        onChange={handleChange}
      />
    </div>
  );
}
```

---

## 🎯 Event Handlers

### Button Click
```jsx
<button onClick={() => console.log('Clicked!')}>
  Click me
</button>
```

### With Function
```jsx
function handleClick() {
  console.log('Button clicked!');
}

<button onClick={handleClick}>Click me</button>
```

### With Parameters
```jsx
function handleClick(id) {
  console.log('Clicked item:', id);
}

<button onClick={() => handleClick(123)}>Click</button>
```

### Form Submit
```jsx
function handleSubmit(e) {
  e.preventDefault(); // Important!
  console.log('Form submitted');
}

<form onSubmit={handleSubmit}>
  <button type="submit">Submit</button>
</form>
```

---

## 🔄 Conditional Rendering

### If-Else (Ternary)
```jsx
{isLoggedIn ? (
  <p>Welcome back!</p>
) : (
  <p>Please log in</p>
)}
```

### Show Only If True
```jsx
{isVisible && <p>This shows when isVisible is true</p>}
```

### Multiple Conditions
```jsx
{status === 'loading' && <p>Loading...</p>}
{status === 'success' && <p>Success!</p>}
{status === 'error' && <p>Error occurred</p>}
```

---

## 🔁 Lists & Mapping

### Simple List
```jsx
const items = ['Apple', 'Banana', 'Orange'];

{items.map((item, index) => (
  <li key={index}>{item}</li>
))}
```

### Object Array
```jsx
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' }
];

{users.map(user => (
  <div key={user.id}>
    <p>{user.name}</p>
  </div>
))}
```

### With Components
```jsx
const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 }
];

{products.map(product => (
  <ProductCard 
    key={product.id}
    name={product.name}
    price={product.price}
  />
))}
```

---

## 🎨 Styling Snippets

### Inline Styles
```jsx
<div style={{ 
  backgroundColor: 'blue',
  color: 'white',
  padding: '20px'
}}>
  Styled div
</div>
```

### Conditional Classes
```jsx
<button className={isActive ? 'active' : 'inactive'}>
  Button
</button>
```

### Multiple Classes
```jsx
<div className={`card ${isSelected ? 'selected' : ''} ${size}`}>
  Content
</div>
```

---

## 🔥 Common Patterns

### Loading State
```jsx
function DataDisplay() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <p>Data: {data}</p>
      )}
    </div>
  );
}
```

---

### Like Button
```jsx
function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  
  return (
    <button onClick={handleLike}>
      {isLiked ? '❤️' : '🤍'} {likes}
    </button>
  );
}
```

---

### Search/Filter
```jsx
function SearchList() {
  const [search, setSearch] = useState("");
  const items = ['Apple', 'Banana', 'Orange', 'Mango'];
  
  const filtered = items.filter(item => 
    item.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div>
      <input 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      {filtered.map(item => <p key={item}>{item}</p>)}
    </div>
  );
}
```

---

### Modal/Popup
```jsx
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Usage:
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <h2>Modal Title</h2>
  <p>Modal content</p>
</Modal>
```

---

## 🧪 VS Code Snippets

Install **ES7+ React/Redux/React-Native snippets** extension.

### Useful Shortcuts:

- `rafce` → React Arrow Function Component Export
- `rfc` → React Functional Component
- `useS` → useState
- `useE` → useEffect
- `clg` → console.log()

---

## 📋 Template: Complete Component

```jsx
import { useState } from "react";

function ComponentName({ propName }) {
  const [state, setState] = useState(initialValue);
  
  const handleEvent = () => {
    // Handle logic
    setState(newValue);
  };
  
  return (
    <div className="container">
      <h1>{propName}</h1>
      <button onClick={handleEvent}>
        {state}
      </button>
    </div>
  );
}

export default ComponentName;
```

---

**Copy, paste, and customize! 🚀**
