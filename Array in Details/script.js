// ARRAY IN DETAILS

// ARRAY []

// const cohorts = [
//   "Soliu",
//   "Zainab",
//   "Azeez",
//   "Nafisat",
//   "Sir Kenny",
//   "Baba Oloye",
//   "Abdul Lateef",
// ];
// console.log(cohorts);

// const replaceEl = (cohorts[1] = "Bash")
// cohorts [7] = "Tolu"

// // FOR LOOP ES5
// for(let i = 0; i < cohorts.length;  i++) {
//     console.log(i, cohorts[i])

// }
// // FOR LOOP ES6
// for(const cohort04 of cohorts) {
//     console.log(cohort04);
// }
    

// NEXTED ARRAY
// const nested = [[1,2], [3,4], [5,6]];
// const newArr = nested[0][1]
// console.log(newArr)

// const newArrs = nested[2][1]
// console.log(newArrs)

// const newArray = nested[2]
// console.log(newArray)


// const Object = {
//     Name : "John",
//     age : 60,  
// } 

// console.log(Object)

// const arr = [
//     "Banana",
//     10000,
//     {
//         name :"Bala blu",
//         age : 80
//     },
//     function name () {
//         alert("Booooooooooooo")
//     }
// ]

// console.log(arr)



/******************** ARRAY METHOD **********************/

/************************PUSH METHOD**********************/      
// it is used to add new element to the of an array

// const students =["Yemi", "Sola", "Grace", "Mariam", "Femi", "Bola" ]
// console.log(students);

// const pushed = students.push("Babe", "Rofiat", "Rahmat");
// console.log(pushed)



/*******************POP METHOD ()*****************************/
// It remove the last element

// const numbers = [3, 4, 5, 6, 7, 8, 9];
// console.log(numbers);

// const popped = numbers.pop();
// console.log(popped);
// console.log(numbers);

/*******************SHIFT METHOD()*****************************/
// shift remove the first element of an array

// const colors = ["violet", "Red", "Blue", "Black"];
// console.log(colors);

// const rmFirst = colors.shift();

// console.log(rmFirst);
// console.log(colors);

/*****************UNSHIFT METHOD**************************/

// const months =["March", "July", "September", "January"];
// console.log(months);

// const adMonths = months.unshift("feb");
// console.log(adMonths);
// console.log(months);

/******************SPLICE METHOD ***************************/
// the 3 means start the adding from index position (0123) then the 0 means the number
 // of element to remove or delete, if you put 1 or 2 it will remove the next 1 or 2 element.


 /**** THREE PARAMETER ****/
// const countries = ["Kenya", "Malaysia", "Canada", "Qatar", "Nigeria"];
// console.log(countries);

// countries.splice(3, 0, "Egypt", "Ghana");
// console.log(countries)

// /**SINGLE PARAMETER to delete**/
// const wears = ["Gucci", "Versace", "D&G", "Nike", "LV"];
// console.log(wears);

// wears.splice(3);
// console.log(wears);


/***TWO PARAMETER ***/
// This method will give the number of array to 
//delete and index position to start

// const drinks = ["Coke", "Viju", "Gin", "Exotic", "Bobo"];
// console.log(drinks);

// drinks.splice(2, 1);
// console.log(drinks);


/*************** SLICE METHOD **********************/

// const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "Hayzed"];
// console.log(men);

// const newString = "Nafeesah"
// console.log(newString.length);
// const newSlice = newString.slice(2, 5);
// console.log(newSlice)

// const myname = "Tunmise"
// console.log(myname.length);
// const newslices =myname.slice(3, 6)
// console.log(newslices);

// const BaddestMen = men.slice(2, 5);
// console.log(BaddestMen);

// const coolestAmong$ = men.slice(2);
// console.log(coolestAmong$);


/*************** TO STRING **********************/
//INCLUDE

// const menSting = men.toString();
// console.log(menSting);

// const checkMen = men.includes("Abee");
// console.log(checkMen);

// const checkMen2 = men.includes("Bash");
// console.log(checkMen2);


/*************** SORT () **********************/

// men.sort();
// console.log(men);

// const alpha = ['G', 'F', 'K', 'A', 'B', 'Z'];
// console.log(alpha)

// alpha.sort();
// console.log(alpha)

// const numbs = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4];
// console.log(numbs);


// /*** usinsing call back function to re arange it  { () => {}**/
// numbs.sort((a, b) => a -b);
// // numbs.sort((a, b) => b -a);
// console.log(numbs);




/*************** INDEX OF () **********************/
// The index will start the counting from 0 and the number or the letter
//we requested will be picked and give the index possition
// it is used to find the first occurent of a specify element in an Array
//it will search for the specified element and count the index of the specified element


// const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2];
// console.log($number);

// const index1 = $number.indexOf(2);
// console.log(index1);

// const tutor = ['Abdulllah', 'Naheem', 'Anate', 'Seyi', 'Soliu', ]
// console.log(tutor);

// const indexTt = tutor.indexOf('Anate');
// console.log(indexTt);

// const lastIndex = $number.lastIndexOf(2)
// console.log(lastIndex)

// /***********LOOP ()************/
// const _names = ["Zainab", "Bashirat", "Nafeesah"];

/***********ES5 *********/
// for(let i = 0; i <_names.length; i++){
//     console.log(i, _names[i]);
// }
// /********* ES6 ***************/
// for(const _name of _names){
//     console.log(_name)
// }


/***************FOR EACH () **********************/
// it is uesd when we want to work on each sentence in an array, it contain the 
//function like call back function [() => {}]

// array.forEach(element => {});

// _names.forEach(function() {});

// _names.forEach((value, i, arr) => {
//     console.log(name.toUpperCase());
//     // console.log(i);
//     // console.log(arr);
// });

// let _$number = [2, 4, 3, 1, 2, 4 ];

// _$number.sort()

// _$number.forEach(function(number, i){
//     console.log(number, i)
// })

// const mammals = ["Lion", "Cow", "Dog", "Cat"];
// mammals.forEach((mammal, i) => console.log(mammal, i)) 



// EXAMPLE 3
// let totalVal = 0;
// const transn = [42, 45, 26, 4, 13, 16];

// transn.forEach((tran) => {
//     console.log(totalVal, (totalVal += tran), tran)

// })
// console.log(totalVal)

// // EXAMPLE 4

// _names.forEach((name) => console.log(`Congratulation ${name} You are the best`))


/*******************ARRAY MAP METHOD*************************/ 

// EXAMPLE : 1

// const inventory = [
//     {name: "Rice", price : 4000},
//     {name: "Beans", price : 4000},
//     {name: "Semo", price : 4000},
//     {name: "Yam", price : 4000},
//     {name: "Garri", price : 4000},
// ];


// inventory.map((value, i) => {
//     console.log(value.name, i)
// })

// const price = inventory.map((value) => {
//     return value.price
// }); 

// console.log(price)

// const commodities = inventory.map((commodity) => commodity.name);
// console.log(commodities)





// let double = [2, 3, 4, 5, 6, 7];

// let double$ = double.map((numb) => {
//     return numb * 2
// })
// console.log(double$);
    



/********************** ARRAY FILTER ************************/

const numbers = [-10, 0, -2, 4, -9, 5, -8]

// const filterdNumbers = numbers.filter((number) => {
//     return number <0
// })

// console.log(numbers);
// console.log(filterdNumbers);

 
console.log(numbers)

const filterdNumbers1 = []

for(let i = 0; i < numbers.length; i++){
    if (numbers[i] < 0){
        filterdNumbers1.push(numbers[i])
    }
}
console.log(filterdNumbers1);


const employees = [
    {name: "Mohammad", overtime: 10},
    {name: "Aishat", overtime: 5},
    {name: "Bolaji", overtime: 4},
    {name: "Chris", overtime: 7},
    {name: "Ben", overtime: 9},
    {name: "Munirat", overtime: 12},
]

const employeesToReward = employees.filter((employees) => {
    if(employees.overtime >= 7 ){
        return true

        // return employees.overtime >= 7
    }
})
console.log(employeesToReward)

// const filterdNumbers12 = []

// for(i = 0; i > numbers.length; i++) {
//     if (employees[i, employees.overtime] >= 7)
//     filterdNumbers12.push(numbers)
// }
// console.log(filterdNumbers12)


const employeesToRewardName = employeesToReward.map((employees) => {
    return employees.name;
})

console.log(employeesToReward);
console.log(employeesToRewardName);

employeesToRewardName.forEach((name) => {
    console.log(`Hi ${name}, you have recieved an award for yourhardwork`);
})

const creatures = [
    {animal: "Shark", habitat: "Ocean"},
    {animal: "Whale", habitat: "Ocean"},
    {animal: "Hippopotamus", habitat: "lake"},
    {animal: "Lion", habitat: "Savanna"},
    {animal: "Monkey", habitat: "Jungle"},
]

const aquaticAnimals = creatures.filter((creature) => {
    return creature.habitat === "Ocean" || creature.habitat === "lake"
})
console.log(aquaticAnimals)

/********************* ARRAY FIND *************************/
// find method returns the first number or digit or asigned value that match the 
// request, and return it for example the first it encounter it will return it


const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9,];

const value = digits.find((digit) => {
    return digit > 4
})

console.log(value)

const states = [
    'Ogun State',
    'Kogi State',
    'Anambra State',
    'Lagos State',
    'Benue State',
]

const state = states.find((state) => {
return state.includes("L")
// return state.startsWith("B")
})
console.log(state)


//// CLASS WORK 

// A student Assessment took place, with a total mark of 10, 
// Give us 7 students and mark them over 10, now give a reward to each student with
// a score over the mark of 6

const StudentAssessment = [
    {name: "Mohammad", score: 10},
    {name: "Mick", score: 5},
    {name: "Yusuf", score: 7},
    {name: "Ade", score: 4},
    {name: "Oloye", score: 9},
    {name: "Moriam", score: 3},
    {name: "Abbas", score: 1},
]
 
const StudentsAboveSix = StudentAssessment.filter((student) => {
    return student.score > 6
})

console.log(StudentsAboveSix);

const studentName = StudentsAboveSix.map((student) => {
    return student.name
})
 console.log(studentName);

 studentName.forEach((student) => {
    console.log(`Hi ${student},  Congratulations You have been promoted to the next class`)
 }) 


 //************************* ARRAY SOME AND EVERY *****************************//
 ////// it also return bulian valu (true or False)

 const box = [1, 2, 3, 4, 5, 6, 7]

 // some check if some of the properties in an array meet a perticular condition
 console.log(box.some((el) => {return el < 8}))

 // every check if all of the properties in an array meet a perticular condition
 console.log(box.every((el) => {return el > 4}))


 //************************* ARRAY REDUCE *********************************//

 //  loops through the array and return the sum of the array, it takes two 
 // properties: a callback function and an initial value. The call function take two 
 // parameters which are accumulator and value


 const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

 const answer = boxes.reduce((accumulator, value) => {
    return accumulator + value
 }, 0)

// 0 + 1 = 1 => accumulator
// 1 + 2 = 3=> accumulator
// 3 + 3 = 16=> accumulator
// 6 + 4 = 10 => accumulator

 console.log(answer)