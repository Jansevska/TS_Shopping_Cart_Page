"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Item {
    constructor(_name, _price, _description, _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._price = _price;
        this._description = _description;
        this._id = _id;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
}
class User {
    constructor(_name, _age, _cart = [], _id = (0, uuid_1.v4)()) {
        this._name = _name;
        this._age = _age;
        this._cart = _cart;
        this._id = _id;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    addToCart(item) {
        this.cart.push(item);
    }
    removeFromCart(itemToRemove) {
        this.cart = this.cart.filter(item => item.id !== itemToRemove.id);
    }
    removeQuantityFromCart(itemToRemove, quantity) {
        for (let i = 0; i < quantity; i++) {
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }
    getCartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        return total;
    }
    printCart() {
        console.log(`${this.name}'s Cart:`);
        for (let item of this.cart) {
            console.log(`${item.name}: $${item.price}`);
        }
        console.log(`Total: $${this.getCartTotal()}`);
    }
}
class Shop {
    constructor(_items = []) {
        this._items = _items;
        let itemA = new Item('Notebook', 10.99, 'White cover, spiral, 100 pages');
        this.items.push(itemA);
        let itemB = new Item('pens', 11.99, '6-pack pilot gel black');
        this.items.push(itemB);
        let itemC = new Item('Post-it', 7.99, 'Small colorful post-it');
        this.items.push(itemC);
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
    }
}
// Driver Code
let myShop = new Shop();
let myUser = new User('Alice', 68);
console.log(myShop);
console.log(myUser);
