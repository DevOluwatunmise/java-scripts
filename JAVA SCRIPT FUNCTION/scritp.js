// FUNCTION DECLARATION

function square (number) { // params is passedin the parenthesis
    // statement

}
square() // funtion call/ invocation

// FUNCTION EXPRESSION
const nameFunction = function(parameter) {}


// ARROW FUNCTION
const arrowFn = () => {}

function sayHello(name, age, height, complextion, shoeSize, hobbies) {
    console.log( 
        `my anme is ${name} and i am ${age} years old, with height of ${height} ${complexion}`
    );
}

sayHello('Hayzed')


function sayHello(name) {
    console.log(`Hello ${name}`);
}

sayHello('Hayzed')

const division = (number) => {
    return number / number;
}

const answer = division(4)
console.log(answer)

const square2 = number => {return number * number}

const square3 = number => number * number


// const notAccepted = name, age =>

function add(number) {
    return number + number
}
const sum = add(2);
console.log(sum)

// declair an arrow functions with two parameters, return the two parameters and give them argument 

const boy = (number, age) =>{
    return number - age;
} 

const result = boy(6, 4);
console.log(result);

const subtraction = (a, b) => {
    return a - b;
}

const minus = subtraction(8, 4);
console.log(minus);

// NEXTED FUNCTION

function getScore() {
    const num1 = 2;
    const num2 = 3;
    const name = "DLT Africa"

    function add() {
        return `${name} is ${num1 + num2} years old`;
    }

    return add();

}
console.log(getScore());

// ARROW FUNCTION IN NEXTED

const nestedFunction = (a, b, c) => {

    const anotherFunction = () => {
        return `${a + b+ c}`;
    }

    return anotherFunction()
}
console.log(nestedFunction (2, 4, 6));


// Declare a function with two parameters, check if the addition of the two parameters is >= 10;
// it should retuen a statement showing 'sum is greater than or equal to 10' if not - we should have the parameter1 + parameter2


function addNumbers(a, b) {
    return a + b >= 10 ? "sum is greater than or equal to 10" : a + b;
}

const greater = addNumbers(9, 10);
console.log(greater);

const lesser = addNumbers(3, 4);
console.log(lesser);

// Check for even numbers
const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false
} 

const even = isEven(6);
console.log(even);

const odd = isEven(7);
console.log(odd);


// Cheack for prime number

function isPrime(number) {
    if(number <= 1) {
        return false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) {
        return false
    } 
}
return true;

    return false;
}

const prime = isPrime(3)
console.log(prime)