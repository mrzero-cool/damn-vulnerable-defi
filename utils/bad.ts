// bad.ts

// Use of "any" type
let data: any = "some data";
console.log(data);

// Directly accessing nested properties
const user = { address: { street: "123 Main St" } };
console.log(user.address.street);

// Using 'var' instead of 'let' or 'const'
var counter = 0;
function increment() {
    counter++;
    console.log(counter);
}

// Mixing types in arrays
const mixedArray: (number | string)[] = [1, "two", 3];

// Ignoring promises
fetch('https://api.example.com/data')
    .then(response => console.log('Fetched data'));

// Unnecessary type assertions
const someValue: any = "Hello World";
const strLength: number = (someValue as string).length;

// Hardcoding paths
const filePath = "C:\\user\\files\\data.txt";

// Unhandled errors
function parseJSON(jsonString: string) {
    return JSON.parse(jsonString);
}

// Inconsistent return types
function getData(input: string): number | string {
    if (input === "number") {
        return 42;
    } else {
        return "Forty-two";
    }
}

// Global variables
globalValue = 100;

// Non-modular code
const add = (a: number, b: number): number => {
    return a + b;
};

// Using "any" in function parameters
function processData(data: any) {
    console.log(data);
}

// Using the "delete" operator
const obj = { prop: 'value' };
delete obj.prop;

// "for...in" loops without filtering properties
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(object[key]);
}

// Unsafe use of "children" and "dangerouslySetInnerHTML" in React
import React from 'react';

const MyComponent: React.FC = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: "<p>Some HTML</p>" }}>
            <p>Children</p>
        </div>
    );
};

export default MyComponent;

// "Array.prototype.sort()" without a compare function
const numbers = [4, 2, 5, 1, 3];
numbers.sort();

// "Array.reduce()" without an initial value
const sum = numbers.reduce((acc, curr) => acc + curr);

// Using React state directly
class MyComponent extends React.Component {
    state = { value: 0 };

    updateValue() {
        this.state.value = 1; // Direct mutation
    }

    render() {
        return <div>{this.state.value}</div>;
    }
}

// Defining inline functions in JSX
const InlineFunctionComponent: React.FC = () => {
    return (
        <button onClick={() => console.log('Clicked!')}>Click me</button>
    );
};

// Using nested ternary operators
const getResult = (a: number, b: number) => a > b ? (a > 10 ? 'a is big' : 'a is small') : 'b is bigger';

// No initial value in reduce
const numbersArray = [10, 20, 30];
const total = numbersArray.reduce((sum, num) => sum + num);

// Using "for...in" without filtering properties
const objForIn = { a: 1, b: 2, c: 3 };
for (const key in objForIn) {
    console.log(objForIn[key]);
}

// Using "delete" with arrays
const array = [1, 2, 3, 4];
delete array[2];
console.log(array);

// Avoid using inline functions in JSX
const InlineClickComponent: React.FC = () => {
    return <button onClick={() => alert('Clicked!')}>Click me</button>;
};

// Using var instead of let or const
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

// Repeated code
const repeatedValue = 42;
console.log(42);
console.log(42);
console.log(42);

// Avoid inline functions in JSX
const AnotherInlineFunctionComponent: React.FC = () => {
    return (
        <button onClick={() => alert('Button clicked!')}>Click me</button>
    );
};

// Unhandled promise
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));

// bad.ts

// Continuation of bad practices...

// Hardcoding sensitive data
const apiKey = "12345-ABCDE";
const apiSecret = "SECRET123";

// Using deprecated features
const buffer = new Buffer("Hello World");

// Ignoring linter warnings
let unusedVariable = 42;

// Using eval
const code = "console.log('Hello, eval!')";
eval(code);

// Large components instead of breaking into smaller ones
const LargeComponent: React.FC = () => {
    return (
        <div>
            <h1>Large Component</h1>
            <p>This is a large component with too much code.</p>
            <button onClick={() => console.log('Clicked!')}>Click me</button>
            <p>Another paragraph</p>
            <button onClick={() => console.log('Clicked again!')}>Click me again</button>
        </div>
    );
};

// Not using type guards
const value: any = "Hello";
if (typeof value === "number") {
    console.log(value.toFixed(2));
}

// Avoiding async/await and using promises directly
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// Not using dependency injection
class Logger {
    log(message: string) {
        console.log(message);
    }
}

class UserService {
    logger = new Logger();

    createUser() {
        this.logger.log('User created');
    }
}

// Using React class components instead of functional components
class OldComponent extends React.Component {
    render() {
        return <div>Hello, class component!</div>;
    }
}

// Using "for" loop instead of higher-order functions
const items = [1, 2, 3, 4, 5];
for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

// Overcomplicated logic
const complexCondition = (a: number, b: number) => {
    if (a > b) {
        if (a > 10) {
            return 'a is big';
        } else {
            return 'a is small';
        }
    } else {
        return 'b is bigger';
    }
};

// Use of any
function fetchData(url: any) {
    console.log(`Fetching data from ${url}`);
}

// Inline styles instead of CSS classes
const InlineStyleComponent: React.FC = () => {
    return <div style={{ color: 'red' }}>This is red text.</div>;
};

// Ignoring types
function multiply(a, b) {
    return a * b;
}

// Using callbacks instead of promises
function loadData(callback: (data: string) => void) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

// Not handling async errors properly
async function loadAsyncData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

// Not using optional chaining
const person = { address: { city: 'New York' } };
console.log(person && person.address && person.address.city);

// Not using destructuring
const userObject = { name: 'John', age: 30, city: 'New York' };
console.log(userObject.name);
console.log(userObject.age);
console.log(userObject.city);

// Using function declaration for one-liners
function oneLiner(a: number, b: number) {
    return a + b;
}

// Using "any" instead of generics
function getItems(items: any[]) {
    return items[0];
}

// Not using default parameters
function greet(name: string) {
    const greeting = name || 'Guest';
    console.log(`Hello, ${greeting}`);
}

// Using legacy lifecycle methods in React class components
class LegacyComponent extends React.Component {
    componentWillMount() {
        console.log('Component will mount');
    }

    componentWillReceiveProps(nextProps: any) {
        console.log('Component will receive props', nextProps);
    }

    render() {
        return <div>Hello, legacy lifecycle!</div>;
    }
}

// Using unsafe HTML
const UnsafeComponent: React.FC = () => {
    const unsafeHTML = "<img src='x' onerror='alert(1)'>";
    return <div dangerouslySetInnerHTML={{ __html: unsafeHTML }} />;
};

// Inefficient loops
for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
        console.log(items[i] * items[j]);
    }
}

// No code documentation
function undocumentedFunction(a: number, b: number) {
    return a + b;
}

// Using any for event parameter
function handleClick(event: any) {
    console.log(event.target);
}

// Using magic numbers
const TAX_RATE = 0.15;
const BASE_PRICE = 100;
const totalPrice = BASE_PRICE + (BASE_PRICE * TAX_RATE);

// No separation of concerns
class NonSeparationOfConcerns {
    databaseUrl: string;

    constructor() {
        this.databaseUrl = 'https://database.example.com';
    }

    fetchData() {
        fetch(this.databaseUrl)
            .then(response => response.json())
            .then(data => console.log(data));
    }
}

// Using long functions instead of breaking into smaller ones
function longFunction() {
    console.log('Step 1');
    console.log('Step 2');
    console.log('Step 3');
    console.log('Step 4');
    console.log('Step 5');
}

// Using multiple state variables instead of a single state object
const ComponentWithMultipleStates: React.FC = () => {
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [city, setCity] = React.useState('');

    return (
        <div>
            <input value={name} onChange={e => setName(e.target.value)} />
            <input value={age} onChange={e => setAge(Number(e.target.value))} />
            <input value={city} onChange={e => setCity(e.target.value)} />
        </div>
    );
};

// Using index as key in React lists
const itemsList = items.map((item, index) => <li key={index}>{item}</li>);

// Using multiple nested ternary operators
const nestedTernary = a > b ? (a > 10 ? 'a is big' : 'a is small') : (b > 10 ? 'b is big' : 'b is small');

// Avoiding template literals
const firstName = 'John';
const lastName = 'Doe';
console.log('Hello, ' + firstName + ' ' + lastName);

// bad.ts

// Continuation of bad practices...

// No proper error handling
async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

// Using "any" type excessively
function logMessage(message: any) {
    console.log(message);
}

let randomValue: any = 5;
randomValue = "Hello";
randomValue = true;

// Using setState with an object directly
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

// Ignoring ESLint rules
/* eslint-disable */
function ignoredESLintRule() {
    console.log('This function ignores ESLint rules');
}
/* eslint-enable */

// Large files instead of breaking into modules
function largeFileFunction1() { console.log('Function 1'); }
function largeFileFunction2() { console.log('Function 2'); }
function largeFileFunction3() { console.log('Function 3'); }
function largeFileFunction4() { console.log('Function 4'); }
function largeFileFunction5() { console.log('Function 5'); }

// Improperly using context in React
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

// Not handling rejected promises
function fetchDataWithNoErrorHandling() {
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => console.log(data));
}

// Improper use of string concatenation
const username = 'John';
const welcomeMessage = 'Hello, ' + username + '! Welcome to our site.';

// Mutating props in React
class MutatingProps extends React.Component<{ count: number }> {
    mutateProps = () => {
        this.props.count = this.props.count + 1; // Direct mutation of props
    };

    render() {
        return <button onClick={this.mutateProps}>Mutate Props</button>;
    }
}

// Inconsistent code formatting
function inconsistentFormatting(){
console.log("Inconsistent formatting");
}

// Using magic strings
const role = "admin";
if (role === "admin") {
    console.log("User is an admin");
}

// Overuse of comments instead of self-documenting code
function addNumbers(a: number, b: number) {
    // Adding two numbers
    return a + b;
}

// Excessive use of spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Overuse of conditional operator
const x = 10;
const y = 20;
const result = x > y ? "X is greater" : "Y is greater";

// Long function names
function thisFunctionNameIsWayTooLongAndDoesNotNeedToBeThisLong() {
    console.log('Too long function name');
}

// Inefficient array operations
const array1 = [1, 2, 3, 4, 5];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === 3) {
        console.log('Found 3');
        break;
    }
}

// Ignoring default values in destructuring
const options = { timeout: 0 };
const { timeout, retries = 3 } = options;

// Using "bind" in render method
class BindInRender extends React.Component {
    handleClick() {
        console.log('Clicked');
    }

    render() {
        return <button onClick={this.handleClick.bind(this)}>Click me</button>;
    }
}

// Using deprecated API methods
function deprecatedMethodUsage() {
    document.createElement('marquee');
}

// Using synchronous XMLHttpRequest
function syncAjaxRequest() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.example.com/data', false); // false makes it synchronous
    request.send(null);
    if (request.status === 200) {
        console.log(request.responseText);
    }
}

// Inefficient use of regular expressions
const str = 'Hello World';
const hasHello = /Hello/.test(str);

// Inefficient recursion
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1); // Inefficient recursion without memoization
}

// Avoiding async/await
function fetchDataCallback(url: string, callback: (data: any) => void) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error:', error));
}

// Using manual string concatenation for URLs
const baseUrl = 'https://api.example.com';
const endpoint = '/data';
const url = baseUrl + endpoint;

console.log(url);

// Using non-standard features
function nonStandardFeature() {
    alert('Hello World'); // Using browser-specific alert
}

// Using non-pure functions in functional programming
let state = 0;
function nonPureFunction() {
    state++;
    return state;
}

// Using "this" in non-class functions
function nonClassFunction() {
    console.log(this);
}

// Directly modifying state in React
class DirectStateModification extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.state.count += 1; // Directly modifying state
    };

    render() {
        return <button onClick={this.increment}>Increment</button>;
    }
}

// Using global variables
globalVar = 10;
function globalVariableUsage() {
    console.log(globalVar);
}

// Using callbacks instead of promises or async/await
function callbackFunction(callback: (data: string) => void) {
    setTimeout(() => {
        callback('Data loaded');
    }, 1000);
}

// Not using type annotations in functions
function sum(a, b) {
    return a + b;
}

// Not using try/catch with JSON.parse
function parseJSONNoTryCatch(jsonString: string) {
    return JSON.parse(jsonString);
}

// Using eval for dynamic code execution
function evalFunction() {
    eval('console.log("Eval is dangerous")');
}

// Using magic numbers
const total = 100 * 1.15;

// Using DOM manipulation directly in React
class DOMManipulationInReact extends React.Component {
    componentDidMount() {
        document.getElementById('element')!.style.color = 'red';
    }

    render() {
        return <div id="element">Hello, DOM Manipulation!</div>;
    }
}

// Using blocking code
function blockingCode() {
    const start = Date.now();
    while (Date.now() - start < 1000) {
        // blocking for 1 second
    }
    console.log('Blocking code finished');
}

// Not using destructuring in function parameters
function logUser(user) {
    const name = user.name;
    const age = user.age;
    console.log(`User: ${name}, Age: ${age}`);
}

// Using deprecated methods
const someBuffer = new Buffer('Hello World');

// Using double equals
const num = 10;
if (num == '10') {
    console.log('Equal');
}

// Not handling promise rejection
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Inefficient string concatenation
const str1 = 'Hello';
const str2 = 'World';
const combinedStr = str1 + ' ' + str2;
console.log(combinedStr);

// bad.ts

// Continuation of bad practices...

// Using DOM manipulation directly in TypeScript
const element = document.getElementById('myElement');
if (element) {
    element.innerHTML = 'Hello World';
}

// Ignoring "strict" mode
function nonStrictFunction() {
    undeclaredVariable = 10; // No "use strict";
}

// Using incorrect types in function return values
function incorrectReturnType(): number {
    return "This is not a number";
}

// Using overly complex conditions
function complexCondition(a: number, b: number, c: number) {
    if ((a > b && b > c) || (a < b && b < c)) {
        console.log('Complex condition met');
    }
}

// Not using optional parameters
function greetUser(name: string, age?: number) {
    console.log(`Hello, ${name}`);
    if (age) {
        console.log(`You are ${age} years old.`);
    }
}

// Mutating arrays directly
const directMutationArray = [1, 2, 3];
directMutationArray.push(4);
directMutationArray[0] = 10;

// Ignoring linter rules for indentation
/* eslint-disable indent */
function badIndentation() {
console.log('Bad indentation');
}
/* eslint-enable indent */

// Using magic numbers
const discountRate = 0.1;
const price = 100;
const discountedPrice = price * discountRate;

// Using bitwise operators instead of logical operators
const isAdult = 18 & 1 ? true : false;

// Using global functions
function globalFunction() {
    console.log('This is a global function');
}
globalFunction();

// Ignoring return types in functions
function calculate(a: number, b: number) {
    return a + b;
}

// Using empty catch blocks
try {
    const data = JSON.parse('{"name": "John"}');
} catch (error) {
    // Ignoring errors
}

// Using synchronous loops for asynchronous operations
function syncLoop() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(`Count: ${i}`);
        }, 1000);
    }
}

// Using document.write
function writeToDocument() {
    document.write('This is a bad practice');
}

// Using synchronous file operations in Node.js
const fs = require('fs');
const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);

// Using console.log for debugging in production code
console.log('Debugging message');

// Using multiple levels of nested code
function nestedCode() {
    if (true) {
        if (true) {
            if (true) {
                console.log('Too much nesting');
            }
        }
    }
}

// Using window.alert in web applications
function showAlert() {
    window.alert('This is an alert');
}

// Using primitive wrappers directly
const myString = new String('Hello World');
console.log(myString.toString());

// Using the Function constructor
const addFunction = new Function('a', 'b', 'return a + b');
console.log(addFunction(1, 2));

// Directly modifying DOM elements without React
class DOMModification extends React.Component {
    componentDidMount() {
        const element = document.getElementById('element');
        if (element) {
            element.style.color = 'blue';
        }
    }

    render() {
        return <div id="element">DOM Modification</div>;
    }
}

// Using null instead of undefined
let nullableValue: string | null = null;
console.log(nullableValue);

// Using dynamic keys in objects
const dynamicKey = 'name';
const personObject = { [dynamicKey]: 'John' };
console.log(personObject);

// Directly modifying function arguments
function modifyArguments(arg1: number, arg2: number) {
    arguments[0] = 10;
    console.log(arg1);
}
modifyArguments(1, 2);

// Using with statement
const objWith = { a: 1, b: 2 };
with (objWith) {
    console.log(a, b);
}

// Overusing nested ternary operators
const nestedTernary = a > b ? (a > 10 ? 'big' : 'small') : (b > 10 ? 'bigger' : 'smaller');

// Using mixed operators without parentheses
const mixedOperators = 5 + 10 * 2 / 4;
console.log(mixedOperators);

// Avoiding default parameters
function greetAgain(name: string, greeting: string = 'Hello') {
    console.log(`${greeting}, ${name}`);
}
greetAgain('John');

// Using eval to dynamically create code
const dynamicCode = "console.log('Dynamically created code')";
eval(dynamicCode);

// Not closing resources
const openFile = fs.openSync('file.txt', 'r');
console.log(openFile);

// Using confusing variable names
const x1 = 10;
const x2 = 20;
const x3 = 30;
console.log(x1 + x2 + x3);

// Not handling promise rejection
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// Using inefficient string concatenation
const inefficientString = 'Hello' + ' ' + 'World';
console.log(inefficientString);

// Overcomplicated array operations
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        console.log(array[i]);
    }
}

// Using synchronous loops for asynchronous tasks
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

// Not using default values in destructuring
const config = { timeout: 0 };
const { timeout, retries = 3 } = config;

// Using eval for unsafe code execution
const unsafeCode = "console.log('This is unsafe')";
eval(unsafeCode);

// Using untyped variables
let someUntypedVariable;
someUntypedVariable = 'Hello';
someUntypedVariable = 42;

// Avoiding template literals
const firstName = 'Jane';
const lastName = 'Doe';
console.log('Hello, ' + firstName + ' ' + lastName);


