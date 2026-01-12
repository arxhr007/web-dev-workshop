# 📦 01 — HTML Core + Common Tags

**Duration:** 0–12 minutes  
**Goal:** Understand the most used HTML tags and document structure

---

## 🎯 What You'll Learn

- Basic HTML document structure
- Text and layout tags
- Links and images
- Lists (ordered and unordered)
- Tables
- Form elements

---

## 📝 HTML Document Structure

Every HTML page needs this basic structure:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Site</title>
</head>
<body>
  <!-- Your content goes here -->
</body>
</html>
```

**Key parts:**
- `<!DOCTYPE html>` → Tells the browser this is HTML5
- `<html>` → Root element
- `<head>` → Metadata (title, links to CSS, etc.)
- `<body>` → Visible content

---

## 🧱 Text & Layout Tags

### Headings
```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section Heading</h3>
<!-- h4, h5, h6 also available -->
```

### Paragraphs and Text
```html
<p>This is a paragraph of text.</p>
<span>Inline text element</span>
<div>Block-level container</div>
```

### Line Breaks
```html
Line one<br>
Line two

<hr> <!-- Horizontal rule/line -->
```

**📄 See:** [01-document-structure.html](01-document-structure.html) | [02-text-layout.html](02-text-layout.html)

---

## 🔗 Media & Links

### Links
```html
<a href="https://google.com">Visit Google</a>
<a href="#section">Jump to section</a>
```

### Images
```html
<img src="photo.jpg" alt="Description">
```

**Attributes:**
- `href` → Link destination
- `src` → Image source
- `alt` → Alternative text (accessibility)

**📄 See:** [03-media-links.html](03-media-links.html)

---

## 📋 Lists

### Unordered List (Bullets)
```html
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Cherry</li>
</ul>
```

### Ordered List (Numbers)
```html
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>Step three</li>
</ol>
```

**📄 See:** [04-lists.html](04-lists.html)

---

## 📊 Tables

Tables organize data in rows and columns:

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>22</td>
  </tr>
</table>
```

**Tag breakdown:**
- `<table>` → Container
- `<tr>` → Table row
- `<th>` → Header cell (bold)
- `<td>` → Data cell

**📄 See:** [05-tables.html](05-tables.html)

---

## 📝 Basic Forms

Forms collect user input:

```html
<form>
  <label>Name:</label>
  <input type="text" placeholder="Enter name">
  
  <label>Email:</label>
  <input type="email">
  
  <button>Submit</button>
</form>
```

**Common tags:**
- `<form>` → Form container
- `<input>` → Input field
- `<button>` → Submit button
- `<label>` → Field label

**Input types:**
- `text` → Text input
- `email` → Email validation
- `password` → Hidden text
- `checkbox` → Checkboxes
- `radio` → Radio buttons

**📄 See:** [06-forms.html](06-forms.html)

---

## ✅ Checkpoint

You should now understand:

- [ ] HTML document structure
- [ ] Headings, paragraphs, and divs
- [ ] Links and images
- [ ] Ordered and unordered lists
- [ ] Table structure (tr, th, td)
- [ ] Basic form elements

---

## 📂 Example Files in This Folder

| File | Content |
|------|---------|
| `01-document-structure.html` | Basic HTML template |
| `02-text-layout.html` | Headings, paragraphs, divs |
| `03-media-links.html` | Links and images |
| `04-lists.html` | Ordered and unordered lists |
| `05-tables.html` | Table examples |
| `06-forms.html` | Form input elements |

**💡 Tip:** Open each HTML file in your browser and inspect the code!

---

## ➡️ Next Step

Once you're comfortable with HTML basics, move to:  
**[02-css-fundamentals](../02-css-fundamentals/README.md)** to learn styling!
