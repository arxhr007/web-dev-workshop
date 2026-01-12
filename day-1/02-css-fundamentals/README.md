# 🎨 02 — CSS Fundamentals + 3 Integration Methods

**Duration:** 12–30 minutes  
**Goal:** Understand CSS basics and the 3 ways to integrate CSS with HTML

---

## 🎯 What You'll Learn

- CSS syntax and basic properties
- The box model (margin, padding, border)
- Colors and fonts
- **3 Types of CSS Integration** (EXAM/INTERVIEW IMPORTANT!)

---

## 🧩 CSS Basics

### Syntax

```css
selector {
  property: value;
}
```

**Example:**
```css
h1 {
  color: blue;
  font-size: 24px;
}
```

---

## 🎨 Common CSS Properties

### Colors
```css
.element {
  color: red;              /* Text color */
  background-color: blue;  /* Background color */
}
```

**Color formats:**
- Named: `red`, `blue`, `green`
- Hex: `#FF0000`, `#00FF00`
- RGB: `rgb(255, 0, 0)`
- RGBA: `rgba(255, 0, 0, 0.5)` (with transparency)

### Fonts
```css
.text {
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}
```

### Spacing
```css
.box {
  margin: 10px;      /* Space outside */
  padding: 20px;     /* Space inside */
}
```

---

## 📦 The Box Model

**Every HTML element is a box!**

```
┌─────────────────────────────┐
│        MARGIN (outside)      │
│  ┌───────────────────────┐  │
│  │   BORDER              │  │
│  │  ┌─────────────────┐  │  │
│  │  │   PADDING       │  │  │
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  CONTENT  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

**Example:**
```css
.card {
  width: 200px;
  padding: 20px;        /* Inside spacing */
  border: 2px solid black;
  margin: 10px;         /* Outside spacing */
}
```

---

## 🧩 3 Types of CSS Integration

### ⚠️ IMPORTANT FOR EXAMS AND INTERVIEWS!

There are **3 ways** to add CSS to HTML:

1. **Inline CSS** (inside HTML tags)
2. **Internal CSS** (inside `<style>` tag)
3. **External CSS** (separate `.css` file) ✅ **BEST PRACTICE**

---

## 1️⃣ Inline CSS

**Definition:** CSS written directly inside HTML tags using the `style` attribute.

```html
<p style="color: red; font-size: 20px;">
  This text is red and 20px
</p>
```

### ❌ Disadvantages:
- Hard to maintain
- Code becomes messy
- Cannot reuse styles
- Avoid in real projects!

### ✅ When to use:
- Quick testing
- Email templates (limited CSS support)

**📄 See:** [01-inline-css.html](01-inline-css.html)

---

## 2️⃣ Internal CSS

**Definition:** CSS written inside a `<style>` tag in the `<head>` section.

```html
<head>
  <style>
    .box {
      background: lightblue;
      padding: 10px;
      border-radius: 5px;
    }
    
    h1 {
      color: navy;
    }
  </style>
</head>

<body>
  <h1>Hello</h1>
  <div class="box">This is a box</div>
</body>
```

### ✅ Advantages:
- Cleaner than inline
- Good for single-page sites
- All styles in one file

### ❌ Disadvantages:
- Only affects one HTML page
- Cannot reuse across multiple pages

### ✅ When to use:
- Small projects
- Single-page applications
- Quick prototypes

**📄 See:** [02-internal-css.html](02-internal-css.html)

---

## 3️⃣ External CSS ⭐ **BEST PRACTICE**

**Definition:** CSS written in a separate `.css` file and linked to HTML.

**HTML file:**
```html
<head>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <div class="card">Hello World</div>
</body>
```

**style.css file:**
```css
.card {
  background: white;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### ✅ Advantages:
- **Clean separation** of HTML and CSS
- **Reusable** across multiple pages
- **Easy to maintain**
- **Industry standard**
- **Faster page loads** (CSS cached by browser)

### ❌ Disadvantages:
- Requires extra file
- One more HTTP request (minor)

### ✅ When to use:
- **All professional projects**
- Multi-page websites
- Team collaboration

**📄 See:** [03-external-css.html](03-external-css.html) and [style.css](style.css)

---

## 📊 Comparison Table

| Method | Location | Reusability | Maintenance | Use Case |
|--------|----------|-------------|-------------|----------|
| **Inline** | Inside HTML tags | ❌ None | ❌ Hard | Testing only |
| **Internal** | `<style>` in `<head>` | ⚠️ One page | ⚠️ Moderate | Small sites |
| **External** | Separate `.css` file | ✅ Multiple pages | ✅ Easy | **Production** |

---

## 🎯 Layout Basics (Quick Intro)

### Flexbox (Modern layout)

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

**Common properties:**
- `display: flex` → Enable flexbox
- `justify-content` → Horizontal alignment
- `align-items` → Vertical alignment
- `gap` → Space between items

---

## ✅ Checkpoint

You should now understand:

- [ ] CSS syntax (selector, property, value)
- [ ] Box model (margin, padding, border)
- [ ] Colors and fonts
- [ ] **Inline CSS** (worst practice)
- [ ] **Internal CSS** (moderate practice)
- [ ] **External CSS** (best practice) ⭐
- [ ] When to use each method

---

## 📂 Example Files in This Folder

| File | Content |
|------|---------|
| `01-inline-css.html` | Inline CSS examples |
| `02-internal-css.html` | Internal `<style>` tag examples |
| `03-external-css.html` | External CSS with linked file |
| `style.css` | External stylesheet |

---

## 🧠 Interview Question

**Q: What are the 3 ways to add CSS to HTML?**

**A:**
1. **Inline CSS** - Using `style` attribute in HTML tags
2. **Internal CSS** - Using `<style>` tag in `<head>`
3. **External CSS** - Using separate `.css` file with `<link>` tag (best practice)

---

## ➡️ Next Step

Ready to learn why Tailwind is better?  
**[03-css-to-tailwind](../03-css-to-tailwind/README.md)** explains the transition!
