const containerElement = document.createElement("div");
containerElement.classList.add("menu-container");

const menuTitle = document.createElement("h3");
menuTitle.classList.add("menu-title");

const menuContent = document.createElement("div");
menuContent.createElement("menu-content");

class menuItem {
    #name;
    #description;
    #price;
    constructor(name, desc, price) {
        this.name = name;
        this.description = desc;
        this.price = price;
    }

    get name(){
        return this.#name;
    }

    get description() {
        return this.#description;
    }

    get price() {
        return this.#price;
    }
}

function createCategory(name, category, items) {
    const menuCategory = document.createElement("div");
    menuCategory.classList.add("menu-category");

    const categoryName = document.createElement("h3");
    categoryName.textContent = name;

    const categoryList = document.createElement("ul");
    categoryList.classList.add("menu-list");


    category.appendChild()
}

function createItemElement(item) {

}