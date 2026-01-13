# 🎨 Tailwind CSS Quick Reference

Essential Tailwind classes for beginners.

---

## 🎨 Colors

### Background
```
bg-red-500
bg-blue-500
bg-green-500
bg-yellow-500
bg-purple-500
bg-pink-500
bg-gray-500
```

**Scale:** `50` (lightest) → `900` (darkest)

### Text Color
```
text-red-500
text-blue-500
text-white
text-black
text-gray-600
```

### Border Color
```
border-red-500
border-blue-500
border-gray-300
```

---

## 📏 Spacing

### Padding
```
p-4          /* all sides */
px-4         /* horizontal (left + right) */
py-4         /* vertical (top + bottom) */
pt-4         /* top */
pb-4         /* bottom */
pl-4         /* left */
pr-4         /* right */
```

**Scale:** 
- `1` = 4px (0.25rem)
- `2` = 8px (0.5rem)
- `4` = 16px (1rem)
- `6` = 24px (1.5rem)
- `8` = 32px (2rem)

### Margin
```
m-4          /* all sides */
mx-4         /* horizontal */
my-4         /* vertical */
mt-4         /* top */
mb-4         /* bottom */
ml-4         /* left */
mr-4         /* right */
mx-auto      /* center horizontally */
```

### Gap (for flex/grid)
```
gap-2
gap-4
gap-6
```

---

## 📝 Typography

### Font Size
```
text-xs      /* 12px */
text-sm      /* 14px */
text-base    /* 16px */
text-lg      /* 18px */
text-xl      /* 20px */
text-2xl     /* 24px */
text-3xl     /* 30px */
text-4xl     /* 36px */
```

### Font Weight
```
font-light      /* 300 */
font-normal     /* 400 */
font-medium     /* 500 */
font-semibold   /* 600 */
font-bold       /* 700 */
```

### Text Alignment
```
text-left
text-center
text-right
```

### Text Transform
```
uppercase
lowercase
capitalize
```

---

## 📐 Layout

### Display
```
block
inline-block
inline
flex
inline-flex
grid
hidden
```

### Flexbox
```
flex                    /* enable flexbox */
flex-row               /* horizontal (default) */
flex-col               /* vertical */
flex-wrap              /* allow wrapping */

/* Justify (horizontal) */
justify-start
justify-center
justify-between
justify-around
justify-end

/* Align (vertical) */
items-start
items-center
items-end
items-stretch
```

### Width
```
w-12         /* 48px (3rem) */
w-32         /* 128px (8rem) */
w-64         /* 256px (16rem) */
w-1/2        /* 50% */
w-1/3        /* 33.33% */
w-1/4        /* 25% */
w-full       /* 100% */
w-screen     /* 100vw */
max-w-lg     /* max-width: 32rem */
max-w-xl     /* max-width: 36rem */
max-w-2xl    /* max-width: 42rem */
```

### Height
```
h-12         /* 48px */
h-32         /* 128px */
h-64         /* 256px */
h-screen     /* 100vh */
min-h-screen /* min-height: 100vh */
```

---

## 🎯 Borders

### Border Width
```
border          /* 1px all sides */
border-2        /* 2px all sides */
border-4        /* 4px all sides */
border-t-2      /* top */
border-b-2      /* bottom */
border-l-2      /* left */
border-r-2      /* right */
```

### Border Radius
```
rounded         /* 4px */
rounded-md      /* 6px */
rounded-lg      /* 8px */
rounded-xl      /* 12px */
rounded-2xl     /* 16px */
rounded-full    /* 9999px (circle) */
```

### Border Style
```
border-solid
border-dashed
border-dotted
border-none
```

---

## 🌈 Effects

### Shadow
```
shadow          /* small */
shadow-md       /* medium */
shadow-lg       /* large */
shadow-xl       /* extra large */
shadow-2xl      /* 2x extra large */
shadow-none     /* no shadow */
```

### Opacity
```
opacity-0       /* invisible */
opacity-25
opacity-50
opacity-75
opacity-100     /* fully visible */
```

### Hover (add to any class)
```
hover:bg-blue-600
hover:text-white
hover:shadow-lg
hover:scale-105
```

### Transition
```
transition              /* enable transitions */
transition-colors       /* color transitions only */
transition-all          /* all properties */
duration-300           /* 300ms */
ease-in-out            /* timing function */
```

---

## 📱 Responsive Design

### Breakpoints
```
sm:    /* ≥ 640px */
md:    /* ≥ 768px */
lg:    /* ≥ 1024px */
xl:    /* ≥ 1280px */
2xl:   /* ≥ 1536px */
```

### Example Usage
```jsx
<div className="text-sm md:text-lg lg:text-xl">
  Small on mobile, larger on desktop
</div>

<div className="w-full md:w-1/2 lg:w-1/3">
  Full width mobile, half on tablet, third on desktop
</div>
```

---

## 🎯 Common Patterns

### Button
```jsx
className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
```

### Card
```jsx
className="bg-white rounded-lg shadow-lg p-6 border"
```

### Input
```jsx
className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
```

### Container
```jsx
className="max-w-4xl mx-auto p-4"
```

### Centered Div
```jsx
className="flex items-center justify-center min-h-screen"
```

### Grid Layout
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
```

---

## 💡 Pro Tips

1. **Use IntelliSense** - Install Tailwind CSS IntelliSense extension
2. **Mobile First** - Design for mobile, add `md:` for desktop
3. **Combine Classes** - `bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded`
4. **Customize** - Edit `tailwind.config.js` for custom colors
5. **Dark Mode** - Use `dark:` prefix (e.g., `dark:bg-gray-800`)

---

## 🔍 Quick Search

Need a class? Check:
- https://tailwindcss.com/docs
- https://nerdcave.com/tailwind-cheat-sheet

---

**Happy Styling! 🎨**
