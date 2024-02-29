const anyThig = document.querySelectorAll('.menuItem');
const oneEl = document.querySelector('.active')
const heading = document.createElement('h2')
const body = document.querySelector('body')

const menuClick = (curE1) => {

    for(let i = 0; i < anyThig.length; i++) {
        anyThig[i].classList.remove('active')
    }
    curE1.classList.add('active')
}

body.appendChild(heading);
heading.innerHTML = "We can be going home"