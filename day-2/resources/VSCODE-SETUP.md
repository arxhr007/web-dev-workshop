# 🧰 VS Code Setup for React + Tailwind

Complete guide to setting up VS Code for React and Tailwind development.

---

## 📦 Essential Extensions

### 1. ES7+ React/Redux/React-Native snippets
**Publisher:** dsznajder  
**Install:** `dsznajder.es7-react-js-snippets`

**What it does:**
- Quick component scaffolding
- Type `rafce` for instant functional component
- Saves tons of typing time

**Popular Snippets:**
- `rafce` → React Arrow Function Component Export
- `rfc` → React Functional Component
- `useS` → useState
- `useE` → useEffect
- `clg` → console.log()

---

### 2. Tailwind CSS IntelliSense ⭐ MUST HAVE
**Publisher:** Tailwind Labs  
**Install:** `bradlc.vscode-tailwindcss`

**What it does:**
- Autocomplete Tailwind classes
- Color preview in editor
- CSS value hover info
- Linting for Tailwind

**Example:**
Type `bg-` and get all background color suggestions!

---

### 3. Prettier - Code Formatter
**Publisher:** Prettier  
**Install:** `esbenp.prettier-vscode`

**What it does:**
- Auto-formats code on save
- Consistent code style
- Works with React & Tailwind

**Setup:**
1. Install extension
2. File → Preferences → Settings
3. Search "format on save"
4. Check ✅ "Format On Save"

---

### 4. Auto Rename Tag
**Publisher:** Jun Han  
**Install:** `formulahendry.auto-rename-tag`

**What it does:**
- Rename opening tag → closing tag updates automatically
- Saves time when editing JSX

---

### 5. ES6 Code Snippets
**Publisher:** charalampos karypidis  
**Install:** `xabikos.JavaScriptSnippets`

**What it does:**
- Modern JavaScript shortcuts
- Arrow functions, promises, async/await
- Destructuring shortcuts

---

## 🎨 Nice-to-Have Extensions

### Headwind
**Install:** `heybourn.headwind`
- Auto-sorts Tailwind classes
- Consistent class ordering
- Cleaner code

### Console Ninja
**Install:** `WallabyJs.console-ninja`
- Shows console.log output in editor
- Real-time debugging
- No need to open browser console

### Error Lens
**Install:** `usernamehw.errorlens`
- Highlights errors inline
- See errors immediately
- Better debugging

### Color Highlight
**Install:** `naumovs.color-highlight`
- Highlights color codes
- Preview colors in CSS/Tailwind

---

## ⚙️ VS Code Settings

### Recommended settings.json

Open: `File → Preferences → Settings → Open Settings (JSON)`

Add this:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.emmetCompletions": true,
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "css.validate": false,
  "tailwindCSS.experimental.classRegex": [
    ["class[nN]ame[s]?\\s*[:=]\\s*['\"]([^'\"]*)['\"]"]
  ]
}
```

**What this does:**
- Auto-format on save with Prettier
- Enable Tailwind autocomplete
- Show suggestions in strings (for className)
- Better Tailwind class detection

---

## 🎯 Keyboard Shortcuts

### Essential Shortcuts:

**General:**
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + P` - Command palette
- `Ctrl + B` - Toggle sidebar
- `Ctrl + `` - Toggle terminal

**Editing:**
- `Alt + ↑/↓` - Move line up/down
- `Shift + Alt + ↑/↓` - Copy line up/down
- `Ctrl + /` - Toggle comment
- `Ctrl + D` - Select next occurrence
- `Alt + Click` - Multiple cursors

**React Specific:**
- `rafce` + Tab - Create component
- `Ctrl + Space` - Trigger autocomplete

---

## 🎨 Theme Recommendations

### Popular Themes for React Development:

1. **One Dark Pro**
   - `zhuangtongfa.Material-theme`
   - Most popular
   - Easy on eyes

2. **Night Owl**
   - `sdras.night-owl`
   - Great contrast
   - Designed for accessibility

3. **Dracula Official**
   - `dracula-theme.theme-dracula`
   - Beautiful colors
   - Popular choice

**To change theme:**
`Ctrl + K → Ctrl + T`

---

## 📝 Snippet Examples

### Using ES7 React Snippets:

Type and press Tab:

**rafce:**
```jsx
import React from 'react'

const ComponentName = () => {
  return (
    <div>ComponentName</div>
  )
}

export default ComponentName
```

**useState:**
```jsx
const [state, setState] = useState(initialState)
```

**useEffect:**
```jsx
useEffect(() => {
  
}, [])
```

---

## 🔧 Workspace Settings

Create `.vscode/settings.json` in your project:

```json
{
  "files.exclude": {
    "node_modules": true,
    "dist": true
  },
  "search.exclude": {
    "node_modules": true,
    "dist": true
  }
}
```

This hides unnecessary folders from search.

---

## 🐛 Debugging Setup

### For React + Vite:

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "chrome",
      "request": "launch",
      "name": "Launch Chrome",
      "url": "http://localhost:5173",
      "webRoot": "${workspaceFolder}/src"
    }
  ]
}
```

**To debug:**
1. Start dev server: `npm run dev`
2. Press F5 in VS Code
3. Set breakpoints and debug!

---

## ✅ Installation Checklist

Copy this for students:

```markdown
## VS Code Setup Checklist

- [ ] Install VS Code
- [ ] Install ES7+ React Snippets
- [ ] Install Tailwind CSS IntelliSense
- [ ] Install Prettier
- [ ] Install Auto Rename Tag
- [ ] Enable Format on Save
- [ ] Configure settings.json
- [ ] Test: Type `rafce` + Tab
- [ ] Test: Tailwind autocomplete works
```

---

## 🎓 Quick Start Guide (Copy for Students)

```markdown
# Quick VS Code Setup for Class

1. Install these extensions:
   - ES7+ React/Redux/React-Native snippets
   - Tailwind CSS IntelliSense
   - Prettier

2. Enable Format on Save:
   - File → Preferences → Settings
   - Search "format on save"
   - Check the box

3. Test it works:
   - Create new file: App.jsx
   - Type: rafce
   - Press: Tab
   - Should create component!

4. Tailwind test:
   - Type: className="bg-
   - Should see color suggestions!
```

---

## 💡 Pro Tips

1. **Learn Shortcuts** - Speed up development
2. **Use Command Palette** - `Ctrl + Shift + P` for everything
3. **Multi-cursor Editing** - `Alt + Click`
4. **Zen Mode** - `Ctrl + K → Z` for distraction-free coding
5. **Split Editor** - `Ctrl + \` for side-by-side editing

---

## 🚨 Common Issues

### Tailwind IntelliSense not working?
1. Check `tailwind.config.js` exists
2. Restart VS Code
3. Check extension is enabled

### Prettier not formatting?
1. Check it's set as default formatter
2. Check "Format on Save" is enabled
3. Create `.prettierrc` file if needed

### Snippets not working?
1. Press `Tab` after typing shortcut
2. Check extension is installed
3. Restart VS Code

---

**You're all set! 🚀**
