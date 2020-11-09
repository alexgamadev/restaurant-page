import {items} from './itemsdata';

function createCategory(name, items) {
    const menuCategory = document.createElement("div");
    menuCategory.classList.add("menu-category");

    const categoryName = document.createElement("h3");
    categoryName.textContent = name;

    const categoryList = document.createElement("ul");
    categoryList.classList.add("menu-list");

    menuCategory.appendChild(categoryName);
    menuCategory.appendChild(categoryList);

    items.forEach(item => {
        categoryList.appendChild(createItemElement(categoryList, item));
    });

    return menuCategory;
}

function createItemElement(itemContainer, item) {
    const itemElement = document.createElement("li");
    itemElement.classList.add("menu-item");
    //Create elements
    const itemName = document.createElement("h4");
    itemName.classList.add("item-name");
    const itemDesc = document.createElement("span");
    itemDesc.classList.add("item-desc");
    const itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");

    //Add element content
    itemName.textContent = item.getName();
    itemDesc.textContent = item.getDescription();
    itemPrice.textContent = item.getPrice();

    //Add elements to item container
    itemElement.appendChild(itemName);
    itemElement.appendChild(itemDesc);
    itemElement.appendChild(itemPrice);

    return itemElement;
}

const starterItems = items.filter(item => item.getCategory() === "Starter");
const mainItems = items.filter(item => item.getCategory() === "Main");
const dessertItems = items.filter(item => item.getCategory() === "Dessert");

const containerElement = document.createElement("div");
containerElement.classList.add("container");
containerElement.classList.add("menu");

const menuTitle = document.createElement("h3");
menuTitle.textContent = "Menu";

const menuContent = document.createElement("div");
menuContent.classList.add("menu-content");

containerElement.appendChild(menuTitle);
containerElement.appendChild(menuContent);

menuContent.appendChild(createCategory("Starters", starterItems));
menuContent.appendChild(createCategory("Mains", mainItems));
menuContent.appendChild(createCategory("Desserts", dessertItems));

function loadMenu(contentElement) {
    contentElement.appendChild(containerElement);
    contentElement.style["justify-content"] = "flex-start";
}

export {loadMenu}

