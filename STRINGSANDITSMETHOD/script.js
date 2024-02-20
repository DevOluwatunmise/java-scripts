// TYPES OF STRINGS


// Single quote ('')
const word = 'i am a boy'

// double quote ("")
const Words = "i am a boy"

// Backticks (``) \
const world = `i am a boy`

// console.log(word, words, world),

const age = 12
const school = 'DLT'
const name = 'Eef'


const sentence = `My name is ${name}, i am ${age} years old and i go to ${school} school`

console.log(sentence)

const math = "2 + 2"

const mathematics = `${2 + 2}`

const line = `1
2
3
4
5`

console.log(line)  

const numerals = `Hello i'am Tunmise and i am from "Ondo state"`
console.log(numerals)

// Checking the lenght of a string
//(position start the counting from 0 1 2 3 ...)
//(length start the counting from 1 2 3 ...)


const Name = "Hayzed"

console.log(Name.length)

console.log(Name[0])
console.log(Name[3])

// CHANGING THE CASE OF STRING 

const words = "i am a boy"
const Word = "SHE IS A GIRL"

console.log(words.toUpperCase());
console.log(Word.toLowerCase());

// CHECKING FOR SUBSTRING

const man = "I love coding and my favourite language is Javascript Javascrip";

// const final = man.indexOf('Javascrip');
// console.log(final)


const final = man.indexOf("Javascrip")
const main = man.lastIndexOf("Javascrip")

console.log(main)
console.log(final)


const check = man.includes("favourite")

const starting = man.startsWith("I")

const ending = man.endsWith("Javascrip")

// const ending = man.endsWith("t")

console.log(check)
console.log(starting)
console.log(ending)





