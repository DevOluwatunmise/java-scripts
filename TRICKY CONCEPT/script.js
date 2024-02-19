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

