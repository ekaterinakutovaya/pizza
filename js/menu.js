// menu block

const navLinks = document.querySelectorAll('.link'); // btn menu
const sidePanels = document.querySelectorAll('.orders__item'); // блоки меню

function sidePanelToggler(elem) {
    elem.classList.toggle('active');
    let sidePanelName = elem.dataset.menu; // dataAttribute кнопок) #burger, #home, #settings, #statistics, #email

    sidePanels.forEach((el) => {
        if (el.getAttribute('id') == sidePanelName.substring(1)) {
            el.classList.toggle('active');
        } else {
            el.classList.remove('active');
        }
    });
}

navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
        // e.stopPropagation()
        e.preventDefault();
        sidePanelToggler(this); // this ссылается на текущий элемент, то есть на своего родителя link
    });
});

//

const allBtns = document.querySelectorAll('.side-panel__link'); // кнопки) Information, Order history и т.д

function changeSidepanelContent() {
    let id = this.dataset.id;
    let allPanels = document.querySelectorAll('.side-panel'); // находим все блоки
    allPanels.forEach((panel) => panel.classList.remove('active'));

    let targetPanel = document.getElementById(id); // находим блок со значением id
    targetPanel.classList.add('active');
}

allBtns.forEach((el) => {
    el.addEventListener('click', changeSidepanelContent);
});

// payment

let payment = document.querySelector('#payment');
let cansel = document.querySelector('.payment__cansel');
cansel.addEventListener('click', function () {
    payment.classList.remove('active');
});