import {loadHeader} from './modules/header';
import {loadHome} from './modules/home';
import {loadMenu} from './modules/menu';

const contentElement = document.getElementById("content");

loadHeader(contentElement);
loadMenu(contentElement);
//loadHome(contentElement);