# Callback Function

A callback function is a function passed as an argument to another function. The other function can execute it when needed.

```javascript
function greet(callback) {
    console.log("Hello");
    callback();
}

function message() {
    console.log("Welcome!");
}

greet(message);
```

- `message` is passed to `greet()` as a callback.
- `callback()` executes the passed function.

# Callback Hell

Callback Hell happens when callbacks are nested inside other callbacks, making code difficult to read.

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

**Problems:**
- Difficult to read.
- Difficult to debug.
- Difficult to maintain.

Callback Hell can be avoided using Promises and async/await.
