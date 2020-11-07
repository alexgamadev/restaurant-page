let items = [];

class MenuItem {
    constructor(name, desc, price, category) {
        this.name = name;
        this.description = desc;
        this.price = price;
        this.category = category;
    }

    getName(){
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getPrice() {
        return this.price;
    }

    getCategory() {
        return this.category;
    }
}

items.push(new MenuItem("Chicken Skewers",
                        "Skewers of chicken marinated in a sweet and sticky teriyaki sauce",
                        "2.50", "Starter"));
items.push(new MenuItem("Garlic Bread",
                        "Crispy slices of baguette topped with garlic butter",
                        "3.00", "Starter"));
items.push(new MenuItem("Halloumi Sticks",
                        "Fried sticks of fried halloumi served with a side of sweet chill sauce",
                        "3.00", "Starter"));
                        
items.push(new MenuItem("Cheese Burger",
                        "A burger topped with cheese, tomato and lettuce and homemade smoky bbq sauce",
                        "8.95", "Main"));
items.push(new MenuItem("Fried chicken fingers",
                        "Fingers of fried buttermilk chicken with a side of peri peri mayonaise",
                        "7.95", "Main"));
items.push(new MenuItem("Margherita Pizza",
                        "An Italian style pizza topped with a tomato sauce, mozarella and basil",
                        "6.00", "Main"));

items.push(new MenuItem("Chocolate Brownie Sundae",
                        "Vanilla bean ice cream with chunks of chocolate brownie and drizzled with chocolate syrup and mini marshmallows",
                        "3.50", "Dessert"));
items.push(new MenuItem("Chocolate Fudge Cake",
                        "Decadent chocolate fudge cake served with a choice of vanilla ice cream or custard",
                        "3.50", "Dessert"));
items.push(new MenuItem("Fruit Salad",
                        "A bowl of delicious fruit including apple slices, grapes, pear, strawberries, kiwi",
                        "2.00", "Dessert"));

export {items};