

const tagE1 = document.getElementsByTagName('h1');
console.log(tagE1);
const testE1 = document.getElementsByClassName("testing");
console.log(testE1)

const checkid = document.getElementById("boxtext");
console.log(checkid)

const allE1 = document.querySelectorAll("selectE1");
console.log(allE1)

const OneE1 = document.querySelector(".selectE1One");
console.log(OneE1)

const all = document.querySelector("#pele");
console.log(all)

const submitBtn = document.querySelector("button")
console.log(submitBtn);


submitBtn.addEventListener('click', () => {
    alert('its closing time already')
})