

const tagE1 = document.getElementsByTagName('h1');
console.log(tagE1);
const testE1 = document.getElementsByClassName("testing");
console.log(testE1)

const checkid = document.getElementById("boxtext");

const allE1 = document.querySelectorAll("selectE1");

const OneE1 = document.querySelector(".selectE1One");

const all = document.querySelector("#pele");

const submitBtn = document.querySelector("button")
console.log(submitBtn);


submitBtn.addEventListener('click', () => {
    alert('its closing time already')
})