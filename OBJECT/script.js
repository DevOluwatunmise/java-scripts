// OBJECTS

// Objects are used to represent real life datas

// Objects is an unordered collection of related data in form of key and value pairs

const firstName = "Soliu";

const person = {
    firstName,
    surname: "Hayzed",
    age: 158,
    children: {
        firstChild: "Eef",
        secondChild: "Nafisat"
    }
}
   
console.log(person)


//********* ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT ************//

const human = {
    firstName: 'Abdullah',
    "DLT Africa location": "pegamut"
}

human.pet = {name: 'cobra', age: 3};
human.job = 'headmaster'
human.favFood = "Garri"

console.log(human.firstName)         // dot notation
console.log(human['firstName'])      // array notation
console.log(human.pet.name)
console.log(human["DLT Africa location"])


console.log(human)



//****************OBJECT BUILT IN METHOD ************************//


const pet = {
    petName: "Dog",
    petSound: () => {

        console.log("Woof! Woof!")
    }
}
pet.petSound()


const dog = {
    name: "Fluffy",
    age: 2,
    listAllProperties: function(){
        console.log(this.name, this.age);
    }
}
 dog.listAllProperties()




 ///************ 27 Feb **************///
//  built in methed that contain arrow function (it is inside an object, it a property that contain a function)

 const myObject = {
    myMethod1: () => {},  // arrow function
    myMethod2: function () {}, // function declerationm

 };
 const animal = {
    name: "Fluffy orange",
    age: 10,

    bark: () => {
        console.log("Woof Woof");            // built in method with arrow function
    }

 }
 console.log(animal.name);
 animal.bark();



//************************ OBJECT METHOD **********************************//
 // five types of object methood

 // 1 Object.keys
 // 2 Object.Value
 // 3 Object. Entries
 // 4 Object.Freezee
 // 5. Object.Seal


 

 const employees = {
    boss: "Soliu",
    secretary: "Azeez",
    sales: "Zainab",
    account: "Bola",
    cleaner: "Ade"
 }

//**** OBJECT . KEYS () ****//
const employeeInfo = Object.keys(employees)
console.log(employeeInfo);



////****** OBJECT . VALUE () *********////
// it create and return an array contain the value of an object

const session = {
    id: 1,
    date: "27-feb-2024",
    device: "Mobile",
    browser: "Chrome"
}
const sessionValue = Object.values(session);
console.log(sessionValue)


////********** OBJECT . ENTRIES () **************////
// it create a nexted array of key and value pairs of an object

const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}
const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo);


////************* OBJECT . FREEZE ***************////
// it prevent modification of existing property and prevent properties from being added or remove

const user = {
    username: "John",
    password: 12345
}
const userInfo = Object.freeze(user);
console.log(userInfo)

userInfo.username = "Soliu"
console.log(userInfo);

////********* OBJECT . SEAL ***************////
// it prevent new properties from being added but it can only be changed

const UserOne = {
    userName: "Johnny",
    password: 123456
}
const userInfoOne  = Object.seal(UserOne);

userInfoOne.userName = "AZ"
userInfoOne.age = 32
userInfoOne.password = 654321
console.log(userInfoOne)


let x

const person5 = {
    name: "AZ",
    age: 35,
    isAdmin: true,
    address: {
        street: "pegamot",
        city: "Otta",
        state: "Ogun"
    },
    hobbies: ["Music", "Sport"]
}
// accessing an array inside an object

x = person5.hobbies[0]
let y = person5["hobbies"][1]
console.log(x, y)

//***updating a property****//
person5.name = "Bode";
console.log(person5);
person5.address.street = "23 unity and peace Estate";
console.log(person5);

//**** Delete a property****//
//*** to delete a property in an objest, we use delete keyword ***//

delete person5.address.state
console.log(person5)

delete person5.address.city
console.log(person5)

person5.greet = function () {
    console.log(`Hello, my name is ${this.name}`)
}
person5.greet();




///******** VALUE AND REFRENCE ********///

