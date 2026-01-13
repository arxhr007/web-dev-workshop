# 04 - Tailwind CSS Styling (35-50 min)

## 🎯 Learning Goals
- Understand utility-first CSS
- Use Tailwind classes
- Style buttons, cards, and layouts
- Learn responsive design basics

---

## 🎨 What is Tailwind?

Tailwind = **Utility-first CSS framework**

Instead of writing CSS:
```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

Use classes:
```jsx
<button className="bg-blue-500 text-white px-5 py-2 rounded">
  Click me
</button>
```

---

## 🔵 Essential Tailwind Classes

### Colors
```jsx
<div className="bg-blue-500">Blue background</div>
<p className="text-red-500">Red text</p>
<div className="border-green-500">Green border</div>
```

**Color scale:** `50` (lightest) → `900` (darkest)

---

### Spacing (Padding & Margin)

```jsx
<div className="p-4">Padding all sides</div>
<div className="px-4 py-2">Padding x & y</div>
<div className="pt-4 pb-2 pl-3 pr-5">Individual sides</div>

<div className="m-4">Margin all sides</div>
<div className="mt-4 mb-2">Margin top & bottom</div>
```

**Scale:** `1` = 0.25rem (4px), `4` = 1rem (16px), etc.

---

### Text Styling

```jsx
<h1 className="text-2xl font-bold">Large Bold</h1>
<p className="text-sm font-light">Small Light</p>
<p className="text-center">Centered</p>
<p className="uppercase">UPPERCASE</p>
```

**Sizes:** `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.

---

### Borders & Rounded Corners

```jsx
<div className="border">Simple border</div>
<div className="border-2 border-blue-500">Thick blue border</div>
<div className="rounded">Small rounded</div>
<div className="rounded-lg">Large rounded</div>
<div className="rounded-full">Circle</div>
```

---

### Flexbox (Layout)

```jsx
<div className="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div className="flex justify-center">Centered</div>
<div className="flex justify-between">Space between</div>
<div className="flex items-center">Vertically centered</div>
<div className="flex gap-4">Gap between items</div>
```

---

### Hover Effects

```jsx
<button className="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>

<div className="opacity-50 hover:opacity-100">
  Fades in on hover
</div>
```

---

### Width & Height

```jsx
<div className="w-64">Fixed width (256px)</div>
<div className="w-full">Full width</div>
<div className="w-1/2">Half width</div>
<div className="h-32">Fixed height (128px)</div>
```

---

## 🎯 Common Patterns

### Styled Button
```jsx
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
```

### Card Component
```jsx
<div className="p-6 bg-white rounded-lg shadow-lg border">
  <h2 className="text-xl font-bold mb-2">Card Title</h2>
  <p className="text-gray-600">Card content goes here</p>
</div>
```

### Input Field
```jsx
<input 
  className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
  placeholder="Enter text..."
/>
```

---

## 🎬 Practice Exercise

Style a button with:
- Green background
- White text
- Padding
- Rounded corners
- Hover effect (darker green)

Try it!
