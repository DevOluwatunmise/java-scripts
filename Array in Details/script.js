// ARRAY []

const cohorts = [
  "Soliu",
  "Zainab",
  "Azeez",
  "Nafisat",
  "Sir Kenny",
  "Baba Oloye",
  "Abdul Lateef",
];
console.log(cohorts);

const replaceEl = (cohorts[1] = "Bash")
cohorts [7] = "Tolu"

// FOR LOOP ES5
for(let i = 0; i < cohorts.length;  i++) {
    console.log(i, cohorts[i])

}
// FOR LOOP ES6
for(const cohort04 of cohorts) {
    console.log(cohort04);
}
    

// NEXTED ARRAY
const nested = [[1,2], [3,4], [5,6]];
const newArr = nested[0][1]
console.log(newArr)

const newArrs = nested[2][1]
console.log(newArrs)

const newArray = nested[2]
console.log(newArray)


const Object = {
    Name : "John",
    age : 60,  
} 

console.log(Object)

const arr = [
    "Banana",
    10000,
    {
        name :"Bala blu",
        age : 80
    },
    function name () {
        alert("Booooooooooooo")
    }
]

console.log(arr)


// PUSH METHOD 
// it is used to add new element to the of an array

const students =["Yemi", "Sola", "Grace", "Mariam", "Femi", "Bola" ]
console.log(students);

const pushed = students.push("Babe", "Rofiat", "Rahmat");
console.log(pushed)


//POP METHOD
// It remove the last element

const numbers = [3, 4, 5, 6, 7, 8, 9];
console.log(numbers);

const popped = numbers.pop();
console.log(popped);
console.log(numbers);



