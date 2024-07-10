// bad.ts

// 1. "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function
const numbers = [4, 2, 5, 1, 3];
numbers.sort(); // Bad: No compare function provided

// 2. "Array.reduce()" calls should include an initial value
const sum = [1, 2, 3].reduce((a, b) => a + b); // Bad: No initial value provided

// 3. "children" and "dangerouslySetInnerHTML" should not be used together
function MyComponent() {
    return (
        <div dangerouslySetInnerHTML={{ __html: 'Hello' }}>
            <span>Children should not be here</span>
        </div>
    );
}

// 4. "delete" should be used only with object properties
const obj = { name: 'Alice' };
delete obj.name; // Bad: Should be careful with delete

// 5. "for...in" loops should filter properties before acting on them
const myObject = { a: 1, b: 2, c: 3 };
for (const key in myObject) {
    console.log(myObject[key]); // Bad: No hasOwnProperty check
}

// 6. "if/else if" chains and "switch" cases should not have the same condition
const value = 10;
if (value === 10) {
    console.log('Value is 10');
} else if (value === 10) {
    console.log('Value is still 10'); // Bad: Same condition as previous

switch (value) {
    case 10:
        console.log('Value is 10');
        break;
    case 10:
        console.log('Value is still 10'); // Bad: Duplicate case
        break;
}

// 7. Using "any" type excessively
function logMessage(message: any) {
    console.log(message);
}

let randomValue: any = 5;
randomValue = "Hello";
randomValue = true;

// 8. No proper error handling
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

// 9. Using setState with an object directly
class BadSetState extends React.Component {
    state = {
        counter: 0
    };

    increment = () => {
        this.setState({ counter: this.state.counter + 1 }); // Incorrectly using the state directly
    };

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <p>{this.state.counter}</p>
            </div>
        );
    }
}

// 10. Ignoring ESLint rules
/* eslint-disable */
function ignoredESLintRule() {
    console.log('This function ignores ESLint rules');
}
/* eslint-enable */

// 11. Large files instead of breaking into modules
function largeFileFunction1() { console.log('Function 1'); }
function largeFileFunction2() { console.log('Function 2'); }
function largeFileFunction3() { console.log('Function 3'); }
function largeFileFunction4() { console.log('Function 4'); }
function largeFileFunction5() { console.log('Function 5'); }

// 12. Improperly using context in React
const MyContext = React.createContext({ value: 'default' });

class BadContextUsage extends React.Component {
    render() {
        return (
            <MyContext.Provider value={{ value: 'new value' }}>
                <MyContext.Consumer>
                    {context => <div>{context.value}</div>}
                </MyContext.Consumer>
            </MyContext.Provider>
        );
    }
}

// 13. Not handling rejected promises
function fetchDataWithNoErrorHandling() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
}

// 14. Improper use of string concatenation
const username = 'John';
const welcomeMessage = 'Hello, ' + username + '! Welcome to our site.';

// 15. Mutating props in React
class MutatingProps extends React.Component<{ count: number }> {
    mutateProps = () => {
        this.props.count = this.props.count + 1; // Direct mutation of props
    };

    render() {
        return <button onClick={this.mutateProps}>Mutate Props</button>;
    }
}

// 16. Inconsistent code formatting
function inconsistentFormatting(){
console.log("Inconsistent formatting");
}

// 17. Using magic strings
const role = "admin";
if (role === "admin") {
    console.log("User is an admin");
}

// 18. Overuse of comments instead of self-documenting code
function addNumbers(a: number, b: number) {
    // Adding two numbers
    return a + b;
}

// 19. Excessive use of spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// 20. Overuse of conditional operator
const x = 10;
const y = 20;
const result = x > y ? "X is greater" : "Y is greater";

// 21. Long function names
function thisFunctionNameIsWayTooLongAndDoesNotNeedToBeThisLong() {
    console.log('Too long function name');
}

// 22. Inefficient array operations
const array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 3) {
        console.log('Found 3');
        break;
    }
}

// 23. Ignoring default values in destructuring
const options = { timeout: 0 };
const { timeout, retries = 3 } = options;

// 24. Using "bind" in render method
class BindInRender extends React.Component {
    handleClick() {
        console.log('Clicked');
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Click me</button>;
    }
}

// 25. Using deprecated API methods
function deprecatedMethodUsage() {
    document.createElement('marquee');
}

// 26. Using synchronous XMLHttpRequest
function syncAjaxRequest() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.example.com/data', false); // false makes it synchronous
    request.send(null);
    if (request.status === 200) {
        console.log(request.responseText);
    }
}

// 27. Inefficient use of regular expressions
const str = 'Hello World';
const hasHello = /Hello/.test(str);

// 28. Inefficient recursion
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // Inefficient recursion without memoization
}

// 29. Avoiding async/await
function fetchDataCallback(url: string, callback: (data: any) => void) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// 30. Using manual string concatenation for URLs
const baseUrl = 'https://api.example.com';
const endpoint = '/data';
const url = baseUrl + endpoint;

console.log(url);

// 31. Using non-standard features
function nonStandardFeature() {
    alert('Hello World'); // Using browser-specific alert
}

// 32. Using non-pure functions in functional programming
let state = 0;
function nonPureFunction() {
    state++;
    return state;
}

// 33. Using "this" in non-class functions
function nonClassFunction() {
    console.log(this);
}

// 34. Directly modifying state in React
class DirectStateModification extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.state.count += 1; // Directly modifying state
    };

    render() {
        return <button onClick={this.increment}>Increment</button>;
    }
}

// 35. Using global variables
globalVar = 10;
function globalVariableUsage() {
    console.log(globalVar);
}

// 36. Using callbacks instead of promises or async/await
function callbackFunction(callback: (data: string) => void) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

// 37. Not using type annotations in functions
function sum(a, b) {
    return a + b;
}

// 38. Not using try/catch with JSON.parse
function parseJSONNoTryCatch(jsonString: string) {
    return JSON.parse(jsonString);
}

// 39. Using eval for dynamic code execution
function evalFunction() {
    eval('console.log("Eval is dangerous")');
}

// 40. Using magic numbers
const total = 100 * 1.15;

// 41. Using DOM manipulation directly in React
class DOMManipulationInReact extends React.Component {
    componentDidMount() {
        document.getElementById('element')!.style.color = 'red';
    }

    render() {
        return <div id="element">Hello, DOM Manipulation!</div>;
    }
}

// 42. Using blocking code
function blockingCode() {
    const start = Date.now();
    while (Date.now() - start < 1000) {
        // blocking for 1 second
    }
    console.log('Blocking code finished');
}

// 43. Not using destructuring in function parameters
function printUser(user: { name: string, age: number }) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
}

// 44. Using synchronous loops with asynchronous calls
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(`Synchronous loop: ${i}`);
    }, 1000);
}

// 45. Using dynamic keys without type safety
const dynamicKey1 = 'key';
const dynamicObject = { [dynamicKey1]: 'value' };

// 46. Not using "use strict"
function noStrictMode() {
    undeclaredVariable = 10; // No "use strict"
}

// 47. Ignoring explicit return types
function add(a: number, b: number) {
    return a + b;
}

// 48. Ignoring scope in loops
for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j); // Always logs 3
    }, 1000);
}

// 49. Using inefficient algorithms
function inefficientAlgorithm(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

// 50. Not using arrow functions where appropriate
const sumFunction = function(a: number, b: number): number {
    return a + b;
};

// 51. Using "with" statement
const objWith = { a: 1, b: 2 };
with (objWith) {
    console.log(a, b);
}

// 52. Not closing file resources in Node.js
const fs = require('fs');
const openFile = fs.openSync('file.txt', 'r');
console.log(openFile);

// 53. Using alert in web applications
function showAlert() {
    window.alert('This is an alert');
}

// 54. Ignoring linter rules for indentation
/* eslint-disable indent */
function badIndentation() {
    console.log('Bad indentation');
}
/* eslint-enable indent */

// 55. Using magic numbers
const discountRate = 0.1;
const price = 100;
const discountedPrice = price * discountRate;

// 56. Using bitwise operators instead of logical operators
const isAdult = 18 & 1 ? true : false;

// 57. Using global functions
function globalFunction() {
    console.log('This is a global function');
}
globalFunction();

// 58. Using empty catch blocks
try {
    const data = JSON.parse('{"name": "John"}');
} catch (error) {
    // Ignoring errors
}

// 59. Using document.write
function writeToDocument() {
    document.write('This is a bad practice');
}

// 60. Using console.log for debugging in production code
console.log('Debugging message');

// 61. Using multiple levels of nested code
function nestedCode() {
    if (true) {
        if (true) {
            if (true) {
                console.log('Too much nesting');
            }
        }
    }
}

// 62. Using primitive wrappers directly
const myString = new String('Hello World');
console.log(myString.toString());

// 63. Using the Function constructor
const addFunction = new Function('a', 'b', 'return a + b');
console.log(addFunction(1, 2));


// 64. Using the Date object incorrectly
const wrongDate = new Date("2024-07-35"); // Invalid date

// 65. Not using template literals for multi-line strings
const multiLineString = "This is a \
multi-line \
string."; // Bad: Not using template literals

// 66. Using mutable data structures where immutable would suffice
const mutableArray = [1, 2, 3];
mutableArray.push(4); // Bad: Mutable operation

// 67. Using the global namespace for variables
var globalVariable = "I'm global"; // Bad: polluting global namespace

// 68. Using complex nested ternary operators
const nestedTernary = a > b ? (a > 10 ? 'big' : 'small') : (b > 10 ? 'bigger' : 'smaller'); // Bad: Nested ternary

// 69. Not handling null and undefined properly
function greet(name: string | null) {
    console.log(`Hello, ${name.toUpperCase()}`); // Bad: Might throw if name is null
}

// 70. Using "this" in arrow functions
const myObjectWithArrow = {
    value: 10,
    logValue: () => {
        console.log(this.value); // Bad: 'this' does not refer to myObjectWithArrow
    }
};
myObjectWithArrow.logValue();

// 71. Using var instead of let or const
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i); // Bad: var leaks out of the block scope
    }, 1000);
}

// 72. Not using default parameters in functions
function greetUser(name: string, greeting?: string) {
    greeting = greeting || 'Hello'; // Bad: Should use default parameter
    console.log(`${greeting}, ${name}`);
}

// 73. Using floating point numbers without precision handling
const result = 0.1 + 0.2;
console.log(result); // Bad: Floating point precision issue

// 74. Using hardcoded configuration values
const apiUrl = "https://api.example.com"; // Bad: Should be in configuration

// 75. Not using strict type checking in TypeScript
const age: any = "25";
console.log(age * 2); // Bad: Might lead to runtime errors

// 76. Using dynamic HTML generation without sanitization
const userInput = "<script>alert('XSS');</script>";
document.body.innerHTML = userInput; // Bad: XSS vulnerability

// 77. Using synchronous code for potentially blocking operations
function readFileSync() {
    const fs = require('fs');
    const data = fs.readFileSync('/path/to/file', 'utf8'); // Bad: Blocking operation
    console.log(data);
}

// 78. Using the "instanceof" operator incorrectly
function isArray(value: any): boolean {
    return value instanceof Array; // Bad: Should use Array.isArray
}

// 79. Using global event listeners without proper scoping
document.addEventListener('click', () => {
    console.log('Document clicked'); // Bad: Adds event listener to entire document
});

// 80. Using "toString" for type conversion
const num = 10;
const strNum = num.toString(); // Bad: Might lead to unexpected results

// 81. Using non-standard API features
const isIE = !!window.ActiveXObject; // Bad: Non-standard feature detection

// 82. Using floating-point arithmetic without considering precision
const floatResult = 0.2 + 0.1;
console.log(floatResult); // Bad: Floating-point precision issue

// 83. Using the wrong comparison operators
const isEqual = '5' == 5; // Bad: Should use strict equality (===)

// 84. Ignoring scope in asynchronous operations
for (var j = 0; j < 3; j++) {
    setTimeout(() => {
        console.log(j); // Bad: Always logs 3
    }, 1000);
}

// 85. Using string concatenation for SQL queries
const userId = 1;
const query = "SELECT * FROM users WHERE id = " + userId; // Bad: SQL injection risk

// 86. Not using utility libraries for common tasks
const hasDuplicates = [1, 2, 3, 4, 4].length !== new Set([1, 2, 3, 4, 4]).size; // Bad: Should use utility library

// 87. Ignoring timezone issues with Date
const currentDate = new Date();
console.log(currentDate.toLocaleString()); // Bad: Might lead to timezone issues

// 88. Using global CSS styles without scoping
const globalStyle = `
    body {
        background-color: red;
    }
`;
const styleElement = document.createElement('style');
styleElement.innerHTML = globalStyle;
document.head.appendChild(styleElement); // Bad: Global styles affecting entire document

// 89. Not using HTTPS for API calls
fetch('http://api.example.com/data') // Bad: Not using HTTPS
    .then(response => response.json())
    .then(data => console.log(data));

// 90. Using "new Function()" for dynamic function creation
const dynamicFunction = new Function('a', 'b', 'return a + b');
console.log(dynamicFunction(2, 3)); // Bad: Should avoid dynamic function creation

// 91. Using deprecated HTML tags
document.body.innerHTML += '<center>Centered Text</center>'; // Bad: <center> tag is deprecated

// 92. Ignoring compatibility issues
const modernFeature = () => {
    // Using ES6 features without checking for browser support
    const arr = [1, 2, 3];
    console.log(arr.includes(2)); // Bad: Not checking for compatibility
};

// 93. Using mutable objects as function arguments
function modifyArray(arr: number[]) {
    arr.push(4); // Bad: Mutating the array
}
const originalArray = [1, 2, 3];
modifyArray(originalArray);

// 94. Using setInterval without clearing
setInterval(() => {
    console.log('This will run forever'); // Bad: Interval not cleared
}, 1000);

// 95. Overuse of global constants
const GLOBAL_CONSTANT = "I'm global"; // Bad: Should scope constants appropriately

// 96. Using "null" instead of "undefined" for uninitialized variables
let uninitializedVar: string | null = null; // Bad: Should use undefined

// 97. Using large objects in state
class LargeStateObject extends React.Component {
    state = {
        largeObject: { a: 1, b: 2, c: 3, d: 4, e: 5 }
    };

    render() {
        return <div>{this.state.largeObject.a}</div>;
    }
}

// 98. Using mixed variable naming conventions
let camelCase = 1;
let snake_case = 2; // Bad: Mixed naming conventions

// 99. Ignoring function documentation
function undocumentedFunction(a: number, b: number): number {
    return a + b; // Bad: No documentation
}

// 100. Using innerHTML to create elements
const unsafeElement = document.createElement('div');
unsafeElement.innerHTML = '<span>Unsafe</span>'; // Bad: Potential security risk

