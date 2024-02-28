console.log("Hello world");


const person = {
    firstName: "Tunmise",
    secondName: "Pail"
}

const otherPerson = person;
person.firstName = "Makalele"

console.log(person)
console.log(otherPerson)

console.log(person === otherPerson)


///************* SHALLOW CLONIG ***************///

// to create a new object that copies the top level
// structure of the original object but not in its nested object of array,
// in other word if the original object or array contains nested object 
// or array, the shallow cloe will create new reference to those 
// nested object rather than creating new copies. when u have nested 
// object inside an object the reference here will tamper the child 
// object instead of the Main object


//***** SPREAD OPERATOR (...) ********//

const number = [1, 2, 3, 4, 5, 6]

console.log(...number)

const newNumber = [...number]
console.log(newNumber)

//*********** To get the Equality **************//

const numbers = [6, 5, 4, 3, 2, 1]

const copiedNumber = numbers;
const newNumbers = [...numbers];

numbers.push(7);

const numbers$ = numbers.slice(1, 4)
console.log(numbers$)

console.log(numbers)
console.log(copiedNumber);
console.log(newNumbers);


console.log(numbers === copiedNumber);
console.log(numbers === newNumber)


//****** OBJECT CLONING *********//

const personDetails = {
    name: "Zainab",
    age: 40
}

//to change the details
const changeDetails ={...personDetails};
personDetails.name = "Soliu"

console.log(personDetails);

console.log(changeDetails);

const originalObj = {
    name: "Bash",
    age: 20,
    address: {
        city: "pegamut",
        state: "Ogun"
    }
}

/****** shallow cloning ********/

const cloneObj = Object.assign({}, originalObj);

cloneObj.name = "Naphy";
cloneObj.address.city = "Elejigbo";

console.log("Original obj", originalObj);
console.log("clone obj", cloneObj);


//******* SPREADING OPERATOR ********//
//// marging of two  or three array

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 5, 6, 7];
const arr3 = [8, 9];

const merged = [...arr1, ...arr2, ...arr3];

console.log(merged)



const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

let cloneMerged = {...text, data:[...numbs]}

cloneMerged.name = "Hayzed";
cloneMerged.data.push(5);

console.log(text);
console.log(numbs)
console.log(cloneMerged)


///********** DEEP CLONING ************** */

//deep clone is an object in javascript. this means creating a new oject that is
//  entirely sepearated from the original object, such that change in the 
// new object do not affect the original and vice versa. this will creste a new object but
//  nested object will still be reference to the original one


// 


// Jansoon . formular

const details = {
    firstName: "Kenny", 
    car: {
        brand: "Toyota",
        wheels: 4,
        color: "red"
    }
}

const stringifiedDetails = JSON.stringify(details);
console.log(stringifiedDetails);

const newDetails = JSON.parse(stringifiedDetails);
console.log(details);

newDetails.car.color = "blue";

console.log(details.car.color);
console.log(newDetails.car.color);

const originalOBJ = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege",
        area: "Baba yemi"
    }
}

const cloneOBJ = JSON.parse(JSON.stringify(originalOBJ));

cloneObj.name = "Soliu"
cloneObj.age = 54
cloneObj.address.local = "Pegamut";
cloneObj.address.area = "Mujayiduunu";

console.log(originalOBJ)
console.log(cloneObj)


