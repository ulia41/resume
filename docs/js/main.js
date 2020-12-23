$(document).ready(function () {

const burger = document.querySelector(".header-burger");//выбор бургера//
const menu = document.querySelector(".mobile-menu");//выбор мобильного меню//
const overlay = document.querySelector("#overlay");//выбор overlay//
const sk = document.body;//выбор noskroll//


burger.addEventListener("click", function(){
    this.classList.toggle("activ");
    menu.classList.toggle("activ");
    overlay.classList.toggle("activ");
    sk.classList.toggle("noskroll");
});

menu.addEventListener("click", function(){
    this.classList.remove("activ");
    burger.classList.remove("activ");
    overlay.classList.remove("activ");
    sk.classList.remove("noskroll");
})

//Фильтрация проекта с карточками в портфолио//

let containerEl = document.querySelector('#portfolio-works');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });





})