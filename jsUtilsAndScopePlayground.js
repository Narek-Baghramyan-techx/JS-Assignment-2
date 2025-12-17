///////////////////////////////////////////////////////////////
// Part A: JavaScript Utilities Library (Functions)

// 1.Math Utility

function division(a, b) {
    if (b === 0) {
        console.log("Division by zero is not allowed.");
    }
    return a / b;
}

// test for division function
console.log(division(10, 2)); // 5
console.log(division(7, 0));  // Error: Division by zero is not allowed.

// 2.String Utility

function capitalizeWords(str) {
    if ( str.length === 0 ) {
        console.log("Not valid str");
    }
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// test for capitalizeWords function
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is fun")); // "JavaScript Is Fun"
console.log(capitalizeWords("")); // "Not valid str"

// 3.Array Utility

function findMax(arr) {
    if (arr.length === 0) {
        console.log("Array is empty.");
        return null;
    }
    return Math.max(...arr);
}

// test for findMax function
console.log(findMax([1, 3, 2, 8, 5])); // 8
console.log(findMax([-10, -3, -5]));   // -3
console.log(findMax([]));               // "Array is empty."

// 4. Math Utility 

function calculateAverage(values) {
    if (values.length === 0) return 0;
    const sum = values.reduce((total, num) => total + num, 0);
    return sum / values.length;
}

// test for calculateAverage function
console.log(calculateAverage([10, 20, 30])); // 20
console.log(calculateAverage([5, 15, 25, 35])); // 20
console.log(calculateAverage([])); // 0

// 5. String Utility

function reverseString(str) {
    if (str.length === 0) {
        console.log("String is empty.");
        return "";
    }
    return str.split('').reverse().join('');
}

// test for reverseString function
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("")); // "String is empty."

// 6. Array Utility

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// test for removeDuplicates function
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates(['a', 'b', 'a', 'c', 'b'])); // ['a', 'b', 'c']
console.log(removeDuplicates([])); // []

////////////////////////////////////////////////////////////////
// Part B: Scope Simulation & Analysis

// 1. Variable Scope Demonstration

let globalVar = "I am a global variable";

function scopeTest() {
    let localVar = "I am a local variable"; // function scoped
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

scopeTest();
// console.log(localVar); // Unaccessible, would throw ReferenceError

// 2. Declares functions

sayHello(); // Works due to hoisting

function sayHello() {
    console.log("Hello");
}

sayHello(); // "Hello"

// 3. A var variable at function level

function varScopeTest() {
    var functionVar = "I am function scoped"; 
    console.log(functionVar); // Accessible here
    if (true) {
        var functionVar = "I am still function scoped"; // accessible throughout the function
        console.log(functionVar); // Accessible here too
    }
}

varScopeTest();
// console.log(functionVar); // Unaccessible, would throw ReferenceError

// 4. A let and const inside a block 

function letConstScopeTest() {
    if (true) {
        let blockLet = "I am block scoped (let)";
        const blockConst = "I am block scoped (const)";
        console.log(blockLet);   // Accessible here
        console.log(blockConst); // Accessible here
    }
    // console.log(blockLet);   // Unaccessible, would throw ReferenceError
    // console.log(blockConst); // Unaccessible, would throw ReferenceError
}

letConstScopeTest();

// 5. A nested function that tries to access all declared variables.

function nestedFunctionScopeTest() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        let innerVar = "I am from inner function";
        console.log(outerVar); // Accessible
        console.log(innerVar); // Accessible
    }

    innerFunction();
    // console.log(innerVar); // Unaccessible, would throw ReferenceError
}

nestedFunctionScopeTest();

////////////////////////////////////////////////////////////////
// Part C: Hoisting & TDZ Debugger

// 1. Hoisting

// 1.1 Hoisting with 'var'

console.log(myVar); // Value is not available yet -> undefined
var myVar = 5 ;

// JS does internally:

// var myVar;
// console.log(myVar);
// myVar = 5 ;

// Right version
var myRightVar = 5 ;
console.log(myRightVar);

// 1.2 Hoisting with 'let'

// console.log(myLet); // Cannot access 'myLet' before initialization
let myLet = "Good day"; //Can be reassigned
console.log(myLet); // This will work properly

// 1.3 Hoisting with 'const'

// console.log(myConst); // Cannot access 'myConst' before initialization
const myConst = "Good night"; //Can NOT be reassigned
console.log(myConst); // This will work properly

// 2. TDZ (Temporal Dead Zone)

// console.log(a); //  ReferenceError
// let a = 5;

// console.log(b); // ReferenceError
// const b = 10;

// a exists in memory but it’s not initialized yet accessing it causes an error

// 3. How Hoisting and TDZ helps in debugging

// if (!isLoggedIn) { let isLoggedIn = true; } // ReferenceError: Cannot access 'isLoggedIn' before initialization

// The right way to do it

let isLoggedIn = false;

if (!isLoggedIn) {
    isLoggedIn = true;
}

// Simple memory trick: var -> hoisted + undefined, let || const -> hoisted + TDZ, function declaration -> fully hoisted