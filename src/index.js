import {loadHeader} from './modules/header';
import {loadHome} from './modules/home';
import {loadMenu} from './modules/menu';

const contentElement = document.getElementById("content");

let isMenu = true;

loadHeader(contentElement);

let mediaQuery = window.matchMedia("(min-width: 1400px)");
mediaQuery.addEventListener("change", (e) => {
    if(isMenu && e.matches) {
        contentElement.style["justify-content"] = "flex-start";
    } else {
        contentElement.style["justify-content"] = "space-between";
    }
});

if(isMenu) {
    loadMenu(contentElement);
    if(window.matchMedia("(min-width: 1400px)").matches){
        contentElement.style["justify-content"] = "flex-start";
    }
} else {
    loadHome(contentElement);
    if(window.matchMedia("(min-width: 1400px)").matches){
        contentElement.style["justify-content"] = "space-between";
    }
}