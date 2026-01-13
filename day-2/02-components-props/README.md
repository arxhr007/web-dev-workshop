# 02 - Components & Props (10-20 min)

## 🎯 Learning Goals
- Create reusable components
- Pass data using props
- Use props in components
- Build component composition

---

## 🧩 What are Components?

Components are **reusable UI pieces**.

Instead of writing the same code multiple times, create a component once and reuse it!

---

## 📦 Creating a Component

```jsx
function Card({ title }) {
  return <h2>{title}</h2>;
}
```

**Using it:**

```jsx
function App() {
  return (
    <div>
      <Card title="React is cool" />
      <Card title="Props are awesome" />
      <Card title="Components rock!" />
    </div>
  );
}
```

---

## 🎁 What are Props?

Props = **Properties** (data you pass to components)

Think of props as **function arguments**.

```jsx
// Component definition
function UserCard({ name, age, city }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </div>
  );
}

// Using the component
<UserCard name="John" age={25} city="New York" />
```

---

## 🔑 Props Rules

1. **Props are read-only** (you can't change them)
2. **Pass anything**: strings, numbers, arrays, objects
3. **Use curly braces** for non-strings: `age={25}`
4. **Destructure** in function parameter: `{ name, age }`

---

## 🎨 Multiple Props Example

```jsx
function Product({ name, price, inStock }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>${price}</p>
      <p>{inStock ? "✅ Available" : "❌ Out of stock"}</p>
    </div>
  );
}
```

**Usage:**

```jsx
<Product name="Laptop" price={999} inStock={true} />
<Product name="Mouse" price={25} inStock={false} />
```

---

## 🎬 Practice Exercise

Create a `MovieCard` component that accepts:
- `title`
- `year`
- `rating`

Display them nicely!
