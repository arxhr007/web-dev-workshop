# 🎓 Live Coding Script

Use this script while teaching the mini project.

---

## 📝 Step-by-Step Instructions

### Step 1: Basic Structure (5 min)
```jsx
// Start with the card container
<div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border p-4">
  <h3 className="font-bold">My First Post</h3>
  <p>This is my post content!</p>
</div>
```

**Explain:**
- `max-w-lg` limits width
- `shadow-lg` adds depth
- `rounded-lg` makes it friendly

---

### Step 2: Add Header (3 min)
```jsx
<div className="flex items-center gap-3 mb-4">
  <img 
    src="https://i.pravatar.cc/50?img=1" 
    className="w-12 h-12 rounded-full"
  />
  <div>
    <h3 className="font-bold">Sarah Johnson</h3>
    <p className="text-sm text-gray-500">2 hours ago</p>
  </div>
</div>
```

**Explain:**
- `flex` for horizontal layout
- `items-center` for vertical alignment
- `gap-3` for spacing

---

### Step 3: Like Button with State (5 min)
```jsx
const [likes, setLikes] = useState(0);

<button onClick={() => setLikes(likes + 1)}>
  ❤️ {likes}
</button>
```

**Explain:**
- State holds the count
- onClick updates state
- UI re-renders automatically

---

### Step 4: Toggle Like State (3 min)
```jsx
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

<button onClick={handleLike}>
  {isLiked ? '❤️' : '🤍'} {likes}
</button>
```

**Explain:**
- Two states working together
- Conditional rendering of emoji
- Prevents spam likes

---

### Step 5: Comments Toggle (4 min)
```jsx
const [showComments, setShowComments] = useState(false);

<button onClick={() => setShowComments(!showComments)}>
  💬 Comment
</button>

{showComments && (
  <div className="mt-4 bg-gray-50 p-3 rounded">
    <p>Great post!</p>
    <p>Thanks for sharing!</p>
  </div>
)}
```

**Explain:**
- `!showComments` toggles boolean
- `&&` conditional rendering
- Only shows when true

---

## 🎯 Key Teaching Points

1. **Start Simple** - Don't overwhelm
2. **One Feature at a Time** - Build incrementally
3. **Test After Each Step** - Show it working
4. **Explain State Changes** - Why we need each state
5. **Visual Feedback** - Show before/after styling

---

## 💬 What to Say

### When Adding State
> "We need state because the data changes. When someone clicks like, the number should update. That's what state is for - data that changes."

### When Styling
> "Tailwind makes styling fast. Instead of writing CSS files, we just add classes. `bg-blue-500` means blue background. Easy!"

### When Adding Features
> "Now let's make it interactive. We'll use onClick to respond to user actions. This is how real apps work!"

---

## ⏱️ Time Management

- **5 min** - Basic card structure
- **3 min** - Header with avatar
- **5 min** - Like button + state
- **4 min** - Comments toggle
- **3 min** - Final styling touches

**Total: ~20 minutes** (leaves 10 min for Q&A and customization)

---

## 🎨 Customization Ideas for Students

After completion, suggest:
- Change colors
- Add more buttons (Save, Bookmark)
- Different emojis
- Custom styling
- Add input for new comments
