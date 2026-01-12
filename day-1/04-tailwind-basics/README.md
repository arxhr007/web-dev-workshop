# ⚡ 04 — Tailwind CSS Basics

**Duration:** 40–58 minutes  
**Goal:** Learn essential Tailwind utility classes and build real components

---

## 🎯 What You'll Learn

- Setting up Tailwind (CDN method)
- Core utility classes
- Building cards, tables, and buttons
- Responsive design basics
- Hover effects

---

## 🚀 Setup: Using Tailwind CDN

The fastest way to get started (no installation needed):

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <!-- Your Tailwind-styled content here -->
</body>
</html>
```

**📄 See:** [01-tailwind-setup.html](01-tailwind-setup.html)

---

## 🔑 Core Utility Classes

### 🎨 Colors

```html
<!-- Background colors -->
<div class="bg-red-500">Red background</div>
<div class="bg-blue-500">Blue background</div>
<div class="bg-green-500">Green background</div>

<!-- Text colors -->
<p class="text-red-500">Red text</p>
<p class="text-blue-500">Blue text</p>
<p class="text-gray-700">Gray text</p>
```

**Color scale:** `50` (lightest) to `900` (darkest)  
**Colors available:** `gray`, `red`, `yellow`, `green`, `blue`, `indigo`, `purple`, `pink`

---

### 📏 Spacing (Padding & Margin)

**Pattern:** `p-{size}` or `m-{size}`

```html
<!-- Padding -->
<div class="p-4">Padding all sides</div>
<div class="px-4">Padding left & right</div>
<div class="py-4">Padding top & bottom</div>
<div class="pt-4">Padding top only</div>

<!-- Margin -->
<div class="m-4">Margin all sides</div>
<div class="mx-auto">Margin auto (center)</div>
<div class="mt-8">Margin top</div>
```

**Size scale:**
- `1` = 0.25rem (4px)
- `2` = 0.5rem (8px)
- `4` = 1rem (16px)
- `8` = 2rem (32px)
- `16` = 4rem (64px)

---

### 🔤 Typography

```html
<!-- Font size -->
<p class="text-xs">Extra small</p>
<p class="text-sm">Small</p>
<p class="text-base">Base (16px)</p>
<p class="text-lg">Large</p>
<p class="text-xl">Extra large</p>
<p class="text-2xl">2X large</p>
<p class="text-3xl">3X large</p>

<!-- Font weight -->
<p class="font-light">Light</p>
<p class="font-normal">Normal</p>
<p class="font-semibold">Semibold</p>
<p class="font-bold">Bold</p>

<!-- Text alignment -->
<p class="text-left">Left aligned</p>
<p class="text-center">Centered</p>
<p class="text-right">Right aligned</p>
```

---

### 🎁 Borders & Rounded Corners

```html
<!-- Borders -->
<div class="border">1px border</div>
<div class="border-2">2px border</div>
<div class="border-4 border-blue-500">Blue border</div>

<!-- Rounded corners -->
<div class="rounded">Small radius</div>
<div class="rounded-lg">Large radius</div>
<div class="rounded-full">Fully rounded (circle/pill)</div>
```

---

### 💎 Shadows

```html
<div class="shadow-sm">Small shadow</div>
<div class="shadow">Default shadow</div>
<div class="shadow-md">Medium shadow</div>
<div class="shadow-lg">Large shadow</div>
<div class="shadow-xl">Extra large shadow</div>
```

---

### 📐 Layout (Flexbox)

```html
<!-- Flex container -->
<div class="flex">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Horizontal alignment -->
<div class="flex justify-start">Start</div>
<div class="flex justify-center">Center</div>
<div class="flex justify-between">Space between</div>
<div class="flex justify-around">Space around</div>

<!-- Vertical alignment -->
<div class="flex items-start">Top</div>
<div class="flex items-center">Middle</div>
<div class="flex items-end">Bottom</div>

<!-- Gap between items -->
<div class="flex gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

---

### 🎭 Hover Effects

```html
<button class="bg-blue-500 hover:bg-blue-600">
  Hover me
</button>

<div class="transform hover:scale-105 transition">
  Scales on hover
</div>

<p class="text-gray-700 hover:text-blue-500 cursor-pointer">
  Clickable text
</p>
```

**Common hover patterns:**
- `hover:bg-{color}` → Change background
- `hover:text-{color}` → Change text color
- `hover:scale-{number}` → Scale transform
- `hover:shadow-lg` → Add shadow

---

## 🏗️ Live Build Examples

### 1️⃣ Button Component

```html
<button class="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
  Click Me
</button>

<button class="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 shadow-md">
  Rounded Button
</button>

<button class="border-2 border-purple-500 text-purple-500 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition">
  Outline Button
</button>
```

---

### 2️⃣ Card Component

```html
<div class="bg-white rounded-lg shadow-md p-6 max-w-sm">
  <h2 class="text-2xl font-bold mb-2 text-gray-800">Card Title</h2>
  <p class="text-gray-600 mb-4">
    This is a card component built entirely with Tailwind CSS utility classes.
  </p>
  <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
    Action
  </button>
</div>
```

---

### 3️⃣ Table with Tailwind

```html
<table class="w-full border-collapse mt-4">
  <thead>
    <tr class="bg-gray-200">
      <th class="p-3 border text-left">Name</th>
      <th class="p-3 border text-left">Role</th>
      <th class="p-3 border text-left">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr class="hover:bg-gray-50">
      <td class="p-3 border">Alice</td>
      <td class="p-3 border">Developer</td>
      <td class="p-3 border">
        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
          Active
        </span>
      </td>
    </tr>
    <tr class="hover:bg-gray-50">
      <td class="p-3 border">Bob</td>
      <td class="p-3 border">Designer</td>
      <td class="p-3 border">
        <span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
          Away
        </span>
      </td>
    </tr>
  </tbody>
</table>
```

**📄 See:** [03-live-build.html](03-live-build.html)

---

## 📱 Responsive Design with Tailwind

Tailwind makes responsive design **incredibly easy** with **breakpoint prefixes**!

### 🎯 Mobile-First Approach

Tailwind uses a **mobile-first** strategy:
- Base classes apply to **all screen sizes**
- Add prefixes to override at **larger screens**

```html
<!-- This is mobile-first: -->
<div class="text-sm md:text-base lg:text-lg">
  Small on mobile → Base on tablet → Large on desktop
</div>
```

---

### 📐 Breakpoint System

**Breakpoints:**
- **Default** → 0px and up (mobile)
- `sm:` → 640px and up (large phones)
- `md:` → 768px and up (tablets)
- `lg:` → 1024px and up (laptops)
- `xl:` → 1280px and up (desktops)
- `2xl:` → 1536px and up (large desktops)

---

### 💡 Common Responsive Patterns

#### 1️⃣ Responsive Grid Layout

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

#### 2️⃣ Stack on Mobile, Row on Desktop

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2">Left</div>
  <div class="w-full md:w-1/2">Right</div>
</div>
```

#### 3️⃣ Hide/Show Based on Screen Size

```html
<!-- Show only on mobile -->
<div class="block md:hidden">Mobile Menu</div>

<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop Navigation</div>
```

#### 4️⃣ Responsive Text Size

```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">
  Responsive Heading
</h1>
```

#### 5️⃣ Responsive Padding/Margin

```html
<div class="p-4 md:p-8 lg:p-12">
  More padding on larger screens
</div>
```

#### 6️⃣ Responsive Container Width

```html
<div class="w-full md:w-3/4 lg:w-1/2 mx-auto">
  Gets narrower on larger screens
</div>
```

---

### 🏗️ Complete Responsive Example

```html
<!-- Responsive Card Grid -->
<div class="container mx-auto px-4">
  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-8">
    Our Products
  </h1>
  
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    <div class="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <img src="product.jpg" class="w-full h-48 object-cover rounded mb-4">
      <h3 class="text-lg md:text-xl font-bold mb-2">Product Name</h3>
      <p class="text-sm md:text-base text-gray-600">Description</p>
    </div>
    <!-- More cards... -->
  </div>
</div>
```

**📄 See:** [04-responsive-design.html](04-responsive-design.html) for interactive examples!

---

## 🎨 Common Component Patterns

### Alert Box

```html
<div class="bg-blue-100 border-l-4 border-blue-500 p-4 mb-4">
  <p class="text-blue-700 font-semibold">Info Alert</p>
  <p class="text-blue-600 text-sm">This is an informational message.</p>
</div>
```

### Badge

```html
<span class="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
  NEW
</span>
```

### Input Field

```html
<input 
  type="text" 
  placeholder="Enter text" 
  class="border-2 border-gray-300 rounded-lg px-4 py-2 w-full focus:border-blue-500 focus:outline-none"
>
```

---

## 📋 Tailwind Cheat Sheet

### Must-Know Classes

| Category | Classes | Example |
|----------|---------|---------|
| **Colors** | `bg-{color}-{shade}` | `bg-blue-500` |
| **Text** | `text-{color}-{shade}` | `text-gray-700` |
| **Padding** | `p-{size}`, `px-{size}`, `py-{size}` | `p-4`, `px-6` |
| **Margin** | `m-{size}`, `mx-{size}`, `my-{size}` | `m-4`, `mx-auto` |
| **Font Size** | `text-{size}` | `text-xl` |
| **Font Weight** | `font-{weight}` | `font-bold` |
| **Border** | `border`, `border-{size}` | `border-2` |
| **Rounded** | `rounded-{size}` | `rounded-lg` |
| **Shadow** | `shadow-{size}` | `shadow-md` |
| **Flex** | `flex`, `justify-{type}`, `items-{type}` | `flex justify-between` |
| **Width** | `w-{size}` | `w-full`, `w-64` |
| **Hover** | `hover:{property}` | `hover:bg-blue-600` |

---

## ✅ Checkpoint

You should now be able to:

- [ ] Set up Tailwind with CDN
- [ ] Apply colors, spacing, and typography
- [ ] Create buttons with hover effects
- [ ] Build card components
- [ ] Style tables with Tailwind
- [ ] Use flexbox for layouts
- [ ] Add shadows and borders

---

## 📂 Example Files

| File | Content |
|------|---------|
| `01-tailwind-setup.html` | Basic Tailwind setup |
| `02-core-classes.html` | All core utility classes |
| `03-live-build.html` | Complete examples (cards, tables, buttons) |
| `04-responsive-design.html` | Interactive responsive examples |

---

## 🚀 Next Step

Time to test your skills!  
➡️ **[05-challenge](../05-challenge/README.md)** - Build your own components!
