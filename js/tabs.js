import { renderPoducts } from './main.js';
import { products } from './data.js';

const tabsLink = document.querySelectorAll('.tabs__link');

function changeActiveTab(tabsLink) {
    tabsLink.forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            if (!item.classList.contains('tabs__active')) {
                // если у itema по корому мы нажимаем нету класса tabs__active) то мы добавляем) 19 строка

                // у остальных tabsLink удаляем класс tabs__active
                tabsLink.forEach(function (item) {
                    item.classList.remove('tabs__active');
                });

                item.classList.add('tabs__active');
            }

            renderPoducts(products);
        });
    });
}

changeActiveTab(tabsLink);
