# 🏆 05 — Challenge & Practice

**Duration:** 58–60 minutes  
**Goal:** Test your skills by building components from scratch

---

## 🎯 Learning Objectives

Apply everything you've learned:
- ✅ HTML structure (tables, lists, forms)
- ✅ CSS integration methods (inline, internal, external)
- ✅ Tailwind utility classes
- ✅ Component building

---

## 📝 Mini Challenge

### Task: Build a Personal Profile Card

Create a profile card with the following requirements:

#### Requirements:

1. **Card Container**
   - White background
   - Rounded corners
   - Shadow effect
   - Padding

2. **Profile Image**
   - Circular avatar (use a placeholder)
   - Centered

3. **Name & Title**
   - Bold name (large text)
   - Subtitle with role/title
   - Centered text

4. **Stats Section**
   - Display 3 stats in a row (Followers, Following, Posts)
   - Use flexbox

5. **Action Buttons**
   - "Follow" button (primary color)
   - "Message" button (outline style)
   - Both buttons side-by-side

6. **Social Links List**
   - Unordered list with 3-4 links
   - Icons or emojis

---

## 💡 Hints

### HTML Structure:

```html
<div class="card-container">
  <img src="avatar" />
  <h2>Name</h2>
  <p>Role</p>
  
  <div class="stats">
    <!-- 3 stat boxes -->
  </div>
  
  <div class="buttons">
    <!-- 2 buttons -->
  </div>
  
  <ul class="social-links">
    <!-- List items -->
  </ul>
</div>
```

### Tailwind Classes You'll Need:

- `bg-white`, `rounded-lg`, `shadow-lg`
- `p-6`, `mx-auto`, `max-w-sm`
- `flex`, `justify-between`, `items-center`
- `text-2xl`, `font-bold`, `text-gray-600`
- `bg-blue-500`, `hover:bg-blue-600`
- `border-2`, `border-gray-300`

---

## 🚀 Bonus Challenges

If you finish early, try these:

### 1️⃣ Styled Table Challenge

Build a **product inventory table** with:
- Header row with dark background
- 5 columns: ID, Product, Category, Price, Stock
- At least 4 data rows
- Hover effects on rows
- Status badges (In Stock, Low Stock, Out of Stock)

### 2️⃣ Navbar Challenge

Build a **navigation bar** with:
- Logo on the left
- Menu items in the center
- Login button on the right
- Sticky to top
- Shadow effect

### 3️⃣ Form Challenge

Build a **registration form** with:
- Name, Email, Password fields
- Select dropdown for country
- Checkbox for "Terms & Conditions"
- Submit button
- Form validation styling (focus states)

---

## ✅ Success Criteria

Your profile card should:

- [ ] Be centered on the page
- [ ] Have a clean, modern design
- [ ] Use Tailwind classes only (no custom CSS)
- [ ] Include hover effects on buttons
- [ ] Be visually balanced
- [ ] Use appropriate spacing and colors

---

## 📂 Files in This Folder

| File | Purpose |
|------|---------|
| `challenge.html` | Start here! Build your components |
| `solution.html` | Reference solution (try without peeking!) |

---

## 🎨 Example Reference

Here's what a profile card might look like:

```
┌─────────────────────────┐
│                         │
│      [  Avatar  ]       │
│                         │
│     John Doe            │
│   Full Stack Developer  │
│                         │
│  123      456      789  │
│  Posts  Followers Following │
│                         │
│  [Follow] [Message]     │
│                         │
│  🐦 Twitter             │
│  💼 LinkedIn            │
│  🌐 Website             │
│                         │
└─────────────────────────┘
```

---

## 🧠 Recap: Key Concepts

### HTML Tags You Used:
- `<div>`, `<h1>`, `<p>`, `<ul>`, `<li>`
- `<table>`, `<tr>`, `<th>`, `<td>`
- `<form>`, `<input>`, `<button>`

### CSS Integration Methods:
1. **Inline CSS** → `style="..."`
2. **Internal CSS** → `<style>...</style>`
3. **External CSS** → `<link rel="stylesheet">`

### Tailwind Utilities:
- **Colors:** `bg-blue-500`, `text-white`
- **Spacing:** `p-4`, `m-2`, `px-6`, `py-3`
- **Typography:** `text-xl`, `font-bold`
- **Layout:** `flex`, `justify-between`, `items-center`
- **Borders:** `border`, `rounded-lg`
- **Effects:** `shadow-md`, `hover:bg-blue-600`

---

## 🎓 You Did It!

Congratulations! In just 60 minutes, you learned:

✅ HTML fundamentals and common tags  
✅ Table and form structure  
✅ All 3 CSS integration methods  
✅ Tailwind CSS utility-first approach  
✅ Building real-world components  

---

## 🚀 Next Steps

### To Continue Learning:

1. **Practice Daily**
   - Build 1 component per day
   - Clone existing websites

2. **Explore Tailwind Docs**
   - [tailwindcss.com](https://tailwindcss.com)
   - Try more advanced classes

3. **Learn JavaScript**
   - Add interactivity to your components
   - Build dynamic UIs

4. **Study Responsive Design**
   - Mobile-first approach
   - Breakpoint modifiers (`md:`, `lg:`)

5. **Build Real Projects**
   - Portfolio website
   - Landing page
   - Dashboard

---

## 📚 Resources

- **Tailwind Docs:** https://tailwindcss.com/docs
- **MDN HTML Reference:** https://developer.mozilla.org/en-US/docs/Web/HTML
- **MDN CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Tailwind Play (Online Editor):** https://play.tailwindcss.com

---

## 💬 Final Tips

1. **Don't memorize** - understand the patterns
2. **Use the docs** - no one knows everything
3. **Build, build, build** - practice is key
4. **Start small** - one component at a time
5. **Have fun** - web development is creative!

---

## 🎉 Course Complete!

You're now ready to build modern, responsive websites with HTML, CSS, and Tailwind!

**Keep coding! 🚀**
