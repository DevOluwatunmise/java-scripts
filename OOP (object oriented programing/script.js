let length = 10
let width = 5

const calculateRectangleArea = function(length, width) {
    return length * width;
};
console.log(calculateRectangleArea)



///******* OOP (Object Oriented Programing) *******///

// OOP was developed to make code more easier and flexible to mentain


//****Object Literal *******// 
 let person ={
    first_name : "Salman",
    Last_name : "Kofoshi",
    
    getFunction : function () {  // method --> a property whose value is a function
        return `My name is ${person.first_name} ${person.Last_name}`
    },

    phoneNumber : {
        moble : "12345",
        landline : "6789"
    }
 }
 console.log(person.getFunction());
 console.log(person.phoneNumber.landline);

//******** Object Constructor **********//

function PersonTwo(first_name, Last_name) {
    this.first_name = first_name,
    this.Last_name = Last_name
}

let person1 = new PersonTwo("Hayzed", "Mabululu");
let person2 = new PersonTwo("Zainab", "Muritala");
// you will continue this process for as many name 
// we want to add, and console it

console.log(person1);
console.log(person2);



//********* The New Keyword **********//

// The new keyword create a new empty object

const student = {} // simple object

const studentTwo = Object()

console.log(student)
console.log(studentTwo)


const arr = [1, 2, 3];
const newArr = new Array (1, 2, 3)
console.log(arr, newArr)


// The basic used case of the new keyword 
// is to create date, its a special object build in to a java script

///// DATE /////
const myBirthday = new Date ();
console.log(myBirthday)

const myNumber = new Number(100.00)
console.log(myNumber.toFixed(0))
console.log(myNumber.toFixed(1))
console.log(myNumber.toFixed(2))


///***** THIS KEYWORD *****///
// it is used to reference the objerct that is executing 
// the refrence function, in order word , every function has a 
// function to its current execution context

function Sentence(words) {  // constructor function syntax
    this.words = words;
    console.log(this)
} 

const $_ = new Sentence(`Hello there! we're learning about this keyword`)

function Car(color, brand, wheels) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;

    console.log(this)
}

const blueCar = new Car("Blue", "BMW", 4);
const redCar = new Car("Red", "Ferrari", 4);

// create a cohort function with params (name, age, favFood, phoneNo, birthday), 
// create new instances for three different cohorts. log the param argument onto 
// the console --> birthday should be a new date instance.

function Cohort(name, age, favFood, phoneNo, birthday) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.birthday = birthday;

    console.log(this)
}

const One = new Cohort('Nofisat', 20, 'rice', 80334455, new Date("june 4, 2019"))
const Two= new Cohort('Bode', 30, 'beans', 80334455, new Date("march 4, 2000"))
const Three = new Cohort('Hayzed', 35, 'yam', 80553366, new Date("may 10, 2001"))


//********** CLASS KEYWORD *********// 

// A class i s a schemar for an opbject that can save many many many 
// values, just as yoy can dfine function and function decleration, a class
// can be defined in two Way
// 1. Class decleration.
// 2. Class Expression

//// class keyword.
//// class declaration.

class Shape1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}


const area = new Shape1(10, 2);


//// class expression
// i --> anonymus

const Shape = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this)
    }
}

const area1 = new Shape1(10, 2);

// -- > unanonymus

const BigBoy = class Bibie {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // getter function
    get him() {
        return this.coder();
    }

    // method
    coder() {
        return {name: this.name, age: this.age}
    }
}

const instance = new BigBoy("Paiko", 40);
console.log(instance.him)


const School = class Academy {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    get principal () {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location }
    }
}

const headMaster = new School("Hayzed", "PEGAMUT");
console.log(headMaster.principal)

 //////class work
// With an unanonomus class function named rectShape, create a
// constructor with params of lenght and breath, get the area of a 
// rectangle using getter function and calculate method, 
// create a new instance for the rectShape with its relative argument...
// answer to the console 


/// answer
const rectangleArea = class rectShape {
    constructor(length, breath) {
        this.length = length;
        this.breath = breath
    };
    get area () {
        return this.method() 
    };
    method () {
        return( this.length * this.breath )
    }
}
const calculate = new rectangleArea(10, 5);
console.log(calculate.area);


//////// correction

const RectShap = class rectangle {
    constructor(length, breath) {
        this.length = length;
        this.breath = breath
    };
    get area () {   // getter function
        return this.calc() 
    };
    calc () {   //method
        return this.length * this.breath 
    }
}
const square = new RectShap(10, 10);
console.log(square.area);


///********** Different between const and class **************///
// object with const cant be re asingn to any other object

// const detailOne = {
//     name: "Class Captain",
//     age: 540,
//     isBlack: false
// }

// const detailTwo = {
//     name: "Baba Oloye",
//     age: 640,
//     isBlack: true
// }

// const getDetailOne = new detailOne()
// console.log(getDetailOne)


class Detail {
    constructor(name, age, isPretty) {
        this.name = name;
        this.age = age;
        this.isPretty = isPretty;
    }
}
const detailOne = new Detail("Bash", 12, false);
const detailTwo = new Detail("Nafi", 12, false);
const detailThree = new Detail("Bode", 12, true);

const all = [detailOne, detailTwo, detailThree]
console.log(all)

const array = [detailOne, detailTwo]
array.push(detailThree)
array.shift(detailOne)

console.log(array)


const createPerson = (name, age, isHands) => {
    // const userSchema = {
    //     name, age, isHands
    // }
    // return userSchema
    return {name, age, isHands}
}

const personCreated = createPerson("Bode", 45, true)
const personCreated2 = createPerson("Soliu", 450, true)

console.log(personCreated)
console.log(personCreated2)



////***** INHERITANCE ******//


//inheritance java scrip[t is ability of a class to derived properties 
    //xtis and from another class while having its own property]

    class Animal {
        alive = true;

         isBeautiful ='this animal is beautiful';

        eat() {
            console.log(`This ${this.name} can eat`);
        }

        sleep () {
            console.log(`This ${this.name} can sleep`);
        }
    }
    class Rabbit extends Animal {
        name = 'Rabbit'

        run() {
            console.log(`This ${this.name} can run`)
        } 
    }

    class Goat extends Animal {
        name = 'goat'
    }

    const rabbit = new Rabbit()
    rabbit.eat()
    rabbit.run()

    console.log(rabbit)

    const goat = new Goat()
    console.log(goat.isBeautiful)



