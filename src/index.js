import {loadHeader} from './modules/header';
import {loadHome} from './modules/home';
import {loadMenu} from './modules/menu';
import {loadContact} from './modules/contact';

function clearContent(contentElement) {
    while(contentElement.firstChild) {
        contentElement.removeChild(contentElement.firstChild);
    }
}

const contentElement = document.getElementById("content");
loadHeader(contentElement);
const navbar = document.getElementsByClassName("nav")[0];

//Home
navbar.children[0].addEventListener('click', (e) => {
    clearContent(contentElement);
    loadHeader(contentElement);
    loadHome(contentElement);
});

//Menu
navbar.children[1].addEventListener('click', (e) => {
    clearContent(contentElement);
    loadHeader(contentElement);
    loadMenu(contentElement);
});

//Contact
navbar.children[2].addEventListener('click', (e) => {
    clearContent(contentElement);
    loadHeader(contentElement);
    loadContact(contentElement);

    contentElement.style["justify-content"] = "flex-start";
});

loadHome(contentElement);