// Variables.

//Let-

//Const

let message = "Hello Eef!"; 
message = "Hello Zainab";
console.log(message);

const greeting = "Good morning my Neighbor";
console.log(greeting); 

const _name$ = "Al Fulaaniy Ileya";
console.log(_name$);

console.log(message, greeting, _name$)

// 1. Create a variable call it student name and value that you like, make sure the value can be reassigned in the future, let's see your result on your console.
// 2. Create 3 variables, the naming must be a mixture of dollar sign, number and underscore respectively. console.log()  


let studentName = "hayzed";
console.log(studentName);

const _var = "hello";
const var$ = "My Neighbour,";
const var_$4 = "How are you doing?";

console.log(_var, var$, var_$4);

// Data type
// String - Number -BigInt -Boolean - ymbol - Null - Undefined  ** Object - Array _ Date

// String
// Single string - ' '
// Double string - ""
// Back ticks - ``

const singleQuote = 'Who am I?';
const doubleQuote = "Who are you"

console.log(singleQuote);
console.log(doubleQuote);

let name = "Team Lead";
const backTick = `Hello ${name}`;
console.log(backTick);

let newName = 'Toheeb';
let favouriteDrink = 'Bobo';

const details = `My name is${newName}, and my favourite drink is ${favouriteDrink}`;
console.log(details);


const numberOne = 45;
const numberTwo = 10;

const add = numberOne + numberTwo;
console.log(add)
const sub = numberOne - numberTwo;
console.log(sub)
const div = numberOne / numberTwo;
console.log(div)
const mul = `${numberOne * numberTwo}`;
console.log(mul)


const numberThree = '10';
const numberFour = '14';
console.log(numberThree + numberFour);

console.log(10 + '15');
console.log(10 - '15');


//Boolean - True / False

const isBeautiful = true;
console.log(typeof isBeautiful)

if (!isBeautiful) {
    console.log("This woman is beautiful")
} else {
    console.log("This woman is ugly")
}

// null

let age = null
console.log(age)

// Undefined
let x;
console.log(x)

// Symbol
const value1 = Symbol("hello");
const value2 = Symbol("hello");
console.log(value1.description);


let temperature = 25;
if(temperature > 30) {
    console.log("it's a hot day");
}else{
    console.log("it's not too hot today");
}

// let hour = new Date().getHours();

// if(hour < 12 ) {
//     console.log("Good morning");
// } else if (hour >= 12 && hour <18) {
//     console.log("Good afternoon");
// }else {
//     console.log("Good evening");
// }

let hour = new Date().getHours()

if (hour >= 10 ) {
    console.log("first lesson");
}else if (hour >= 11 &&  12 ){
    console.log("second lesson");
}else if (hour >= 12 && 2){
    console.log("third lesson");
}else {
    console.log("fourt lesson");
}

let score = 85

if (score >= 90) {
    console.log("Exellent! you score A");
}else if(score >= 80) {
    console.log("Weldone, you score B");
}else if(score >=70) {
    console.log("Good job, you score C")
}else if (score >= 60) {
    console.log("You pass, you score D")
}else{
    console.log("Sorry you failed, you score an F")
}


// SWITCH STATEMENT
let superHero = "Captain America"

switch (superHero) {
    case "iron Man":
        console,log("i am iron ma..")
        break;
    case "Thor":
        console.log("That is my hammer!")
        break;
    case "Captain America":
        console.log("Never give up")
        break;
    case "Black Widow":
        console.log("One short, one kill")
        break;
        default:
            console.log("Enter a valid superHero Name");
}

console.log(superHero)

let day = new Date().getDay();
let dayName;

switch(day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;

        default:
        dayName = ""
}
console.log("Today is" + dayName)

// class work

let fruit = "Apple";
let meaning;

switch(fruit) {
    case "Apple":
        meaning = "Apple are crunchy and delicious";
        break;
    case "Banana":
        meaning = "Banana are sweet and nutricious ";
        break;
    case "Orange":
        meaning = "Orange are juicy and packed with vitamin";
        break;
    case "Grape":
        meaning = "Grape are not that sweet";
        break;

        default:
        meaning = "sorry we dont have information about it"
}
console.log(meaning)

// TERNARY OPERATOR
const oldMan = 80

if(oldMan >= 80) {
    console.log("you can drive");
}else{
    console.log("you may not drive");
}


oldMan >= 80 ? console.log("you can drive") : console.log("you may not drive");

let Age = 20;

let canVote = Age >= 18 ? "YES you can vote" : "NO you can't vote";
console.log(canVote)


// LOOP    ("while" loop is used to call from 0 - 10  < 10, and )

// WHILE LOOP
let i = 0;

while(i < 10) {
    console.log(i)
    i++
}

//FOR LOOP

// ([initialization]; [condition]; [final-expression])
// statement
for( let i = 0; i < 10; i++ ) {
    console.log(i)
}

for(let i =1; i < 8; i++) {
    console.log(i)
}

const colors = ["red", "green", "blue", "yellow"];

for(let i = 0; i < colors.length;  i++) {
    console.log(colors[i])
}
