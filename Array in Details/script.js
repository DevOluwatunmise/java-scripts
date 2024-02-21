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

for(let i = 0; i < cohorts.length;  i++) {
    console.log(i, cohorts[i])

}

for(const cohort of cohorts) {
    console.log(cohort);
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



