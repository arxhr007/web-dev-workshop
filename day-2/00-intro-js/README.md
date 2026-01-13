# 00 - Introduction to JavaScript

## What is JavaScript?

JavaScript is a programming language that runs in web browsers. It allows you to make web pages interactive by manipulating HTML elements, responding to user events, and performing calculations.

## How JavaScript Works with HTML

HTML defines the structure of your page, while JavaScript adds behavior and interactivity.

### Connecting JavaScript to HTML

There are two ways to add JavaScript to HTML:

**1. Inline JavaScript (inside HTML file)**
```html
<script>
    // Your JavaScript code here
</script>
```

**2. External JavaScript File (recommended)**
```html
<script src="calculator.js"></script>
```

Benefits of external files:
- Cleaner code organization
- Reusable across multiple HTML pages
- Easier to maintain

## Core JavaScript Concepts

### 1. Selecting HTML Elements (DOM)

The DOM (Document Object Model) is how JavaScript sees your HTML. Use `document.getElementById()` to find and work with elements:

```javascript
document.getElementById('expression')  // Finds element with id="expression"
```

### 2. Getting and Setting Values

**Getting a value from an input:**
```javascript
const expression = document.getElementById('expression').value;
```

**Setting text in an element:**
```javascript
document.getElementById('result').innerHTML = 'Hello';
```

### 3. Functions

Functions are reusable blocks of code. Define them with `function`:

```javascript
function calculate() {
    // Code to run when this function is called
}
```

Call a function by writing its name with parentheses:
```javascript
calculate();
```

### 4. Event Handlers

Make your page interactive by responding to user actions:

```html
<button onclick="calculate()">Calculate</button>
```

When the button is clicked, the `calculate()` function runs.

### 5. Variables

Store data using variables:

```javascript
const expression = '5 + 3';  // const - value won't change
let result = 0;              // let - value can change
```

### 6. The eval() Function

`eval()` takes a string and runs it as JavaScript code:

```javascript
eval('5 + 3')      // Returns 8
eval('10 * 2')     // Returns 20
eval('(4+6) / 2')  // Returns 5
```

**Note:** `eval()` is useful for learning but avoid it in real apps for security reasons.

### 7. Error Handling

Use `try...catch` to handle errors gracefully:

```javascript
try {
    // Try to run this code
    const result = eval(expression);
} catch (error) {
    // If an error occurs, run this instead
    document.getElementById('result').innerHTML = 'Error';
}
```

## Understanding the Calculator Code

Let's break down `calculator.js`:

```javascript
function calculate() {
    // 1. Get the expression from the input field
    const expression = document.getElementById('expression').value;
    
    try {
        // 2. Evaluate the expression (do the math)
        const result = eval(expression);
        
        // 3. Display the result
        document.getElementById('result').innerHTML = result;
    } catch (error) {
        // 4. If invalid expression, show error
        document.getElementById('result').innerHTML = 'Error';
    }
}
```

**Step by step:**
1. Find the input element and get its value (what the user typed)
2. Use `eval()` to calculate the mathematical result
3. Find the result element and update its text
4. If anything goes wrong, show "Error" instead

## Try It Yourself

1. Open `calculator.html` in your browser
2. Try these expressions:
   - `5 + 3`
   - `10 * 2 - 5`
   - `(4 + 6) / 2`
   - `2 ** 3` (power: 2³)
   - `Math.sqrt(16)` (square root)
   - `hello` (this will cause an error - that's okay!)

## Practice Challenges

1. Add an "=" button that also triggers `calculate()` when pressed
2. Make the input clear when you click inside it
3. Add keyboard support so pressing Enter calculates the result
4. Display a history of calculations below the result

## Why Learn This Before React?

React is built on JavaScript. Everything you just learned applies to React:
- **DOM manipulation** → React components render HTML
- **Functions** → React components are functions
- **Event handlers** → React uses onClick, onChange, etc.
- **Variables** → React state and props

The main difference: React manages the DOM for you automatically!
