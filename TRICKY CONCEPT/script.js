// advanges of using global variabl
// 1. you can access the global variable from all the function in a PerformanceNavigationTiming
// 2. it's idearly used to sore constant
// 3. it's useful when multiple function are accessing the same data

// disadvantages

// 1 too many variable declaired in the global

//GLOBAL SCOPE

const name = "Zainab";
const age = 17;
const school = "Agege primary School, Orile";

const one = () => {
    return `${name} of ${age} years attended ${school}`;

}

const answer = one()
console.log(answer)

const file = () => {
    return `${name} like eating ${age} wraps of semo in ${school}`;

}

const sentence = file
console.log(sentence)


// LOCAL SCOPE

const locaScope = () => {
    const name = "Oloye Pupo";
    const religion = "Muslim";
    const activity = "Drinking of wine";

    return `${name} who is ${religion} enjoys ${activity}`;

}

const Oloye = locaScope ()
console.log(Oloye)

// BLOCK SCOPE

const religion = "christian"

const exampleThree = () => {
    const name = "chima"
    if(true){
        // block scope
        const schoolName = "LASU"

        console.log(`${name} is a ${religion} and goes to ${schoolName}`)
    }
}
exampleThree()


// HOISTING

const result = exampleFive()
console.log(result)

function exampleFive(){
    return 2 + 2
}

//CLOSURE
//The scope regarding a function inside a function

const outerFunction = () => {
    const ben = 5 


    const innerFunction = () => {
        const man = 7

        return ben + man
    }

   const final = innerFunction();
   console.log(final * 2);

}
 outerFunction();

const a = "6";
const b = "3";
 const firstBox = () => {
    const water = a + b 
 
    const innerBox = () => {
        const sugar = a + b
        return sugar * 4;
    }
    const all = innerBox();
    console.log(all / 2);
}
 firstBox();
    


 
const firstFunc = () => {
    const div = 2

    const secondFunc = () => {
        const condition = true
        let certainNumber
        const mult = 4

        if(condition) {
            certainNumber = 5
        }

        const ans = certainNumber * mult
        return ans
    }

    const initialAnser = secondFunc()

    const finalAnswer = initialAnser / div

    console.log(finalAnswer)
 }

 firstFunc()


