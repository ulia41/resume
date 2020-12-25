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

//placeholder//
const formItems = document.querySelectorAll('.form-field');
	
	for(let item of formItems){
		const thisParent = item.closest('.form-item');
		const thisPlaceholder = thisParent.querySelector('.fake-placeholder');
		// Если инпут в фокусе		
		item.addEventListener('focus', function(){
			thisPlaceholder.classList.add('active');
		});

		// Если инпут теряет фокус
		item.addEventListener('blur', function(){

			if(item.value.length > 0){
				thisPlaceholder.classList.add('active');
			}
			else{
				thisPlaceholder.classList.remove('active');
			}
		})
	}