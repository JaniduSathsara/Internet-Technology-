# JavaScript Callback Functions & Callback Hell

## 1. Callback Function

A **callback function** is a function passed as an argument to another function. It is executed later, usually after a particular task is completed.

Callbacks are commonly used in JavaScript for asynchronous operations, event handling, and timers.

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function message() {
    console.log("Welcome!");
}

greet("Janidu", message);
```

**How it works:**
- `message` is passed as a callback function to `greet()`.
- `greet()` executes the callback by calling `callback()`.
- This allows one function to execute another function at a specific time.

## 2. Callback Hell

**Callback Hell** occurs when multiple callbacks are nested inside one another, making the code difficult to read, understand, debug, and maintain.

It often happens when several asynchronous tasks depend on the completion of previous tasks.

```javascript
setTimeout(() => {
    console.log("Task 1");

    setTimeout(() => {
        console.log("Task 2");

        setTimeout(() => {
            console.log("Task 3");
        }, 1000);

    }, 1000);

}, 1000);
```

**Problems with Callback Hell:**
- Difficult to read and understand.
- Difficult to debug.
- Code becomes deeply nested.
- Difficult to maintain.

Callback Hell can be avoided using **Promises** and **async/await**.
