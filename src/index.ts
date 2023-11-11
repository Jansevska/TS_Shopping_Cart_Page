import { v4 as uuidv4 } from "uuid";


class Item {

    constructor(
        private _name: string,
        private _price: number,
        private _description: string,
        private _id: string = uuidv4(),
        ){}

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
}

class User {

    constructor(
        private _name: string,
        private _age: number,
        private _cart: Item[] = [],
        private _id: string = uuidv4()
    ){}

    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get cart(): Item[] {
        return this._cart;
    }
    public set cart(value: Item[]) {
        this._cart = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public addToCart(item:Item):void{
        this.cart.push(item)
    }

    public createElement():HTMLTableRowElement{
        let row = document.createElement('tr');
        row.innerHTML = `<td>${this.name}</td><td>${this.age}</td>`
        return row;
    }

    public removeFromCart(itemToRemove:Item):void{
        this.cart = this.cart.filter( item => item.id !== itemToRemove.id)
    }

    public removeQuantityFromCart(itemToRemove:Item, quantity:number):void{
        for (let i=0; i<quantity; i++){
            let index = this.cart.findIndex(item => item.id === itemToRemove.id);
            this.cart.splice(index, 1);
        }
    }

    public getCartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        }
        return total
    }

    public printCart():void{
        console.log(`${this.name}'s Cart:`)
        for (let item of this.cart){
            console.log(`${item.name}: $${item.price}`)
        }
        console.log(`Total: $${this.getCartTotal()}`)
    }
}

class Shop {

    constructor(
        private _user?: User,
        private _items: Item[] = []
    ){
        let itemA = new Item('Notebook', 10.99, 'White cover, spiral, 100 pages');
        this.items.push(itemA);

        let itemB = new Item('pens', 11.99, '6-pack pilot gel black');
        this.items.push(itemB);

        let itemC = new Item('Post-it', 7.99, 'Small colorful post-it');
        this.items.push(itemC);
    }
    public get items(): Item[] {
        return this._items;
    }
    public set items(value: Item[]) {
        this._items = value;
    }
    public get user(): User | void{
        if (this._user){
            return this._user;
        }
    }
    public set user(value: User) {
        this._user = value;
    }

    displayUsers():void{
        if (!this.user) return 
        const table = document.getElementById('userDisplay');
        table!.innerHTML = '';
        let tr = document.createElement('tr');
        tr.innerHTML = '<th>name</th><th>age</th>'
        table?.append(tr)
        table?.insertAdjacentElement("beforeend" ,this.user.createElement())
        }
}


let myShop = new Shop();

const userForm = document.getElementById('addUser') as HTMLFormElement;
userForm.addEventListener('submit', (e:SubmitEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.userName.value;
    const age = form.userAge.value;
    myShop.user = new User(name, age)
    console.log(myShop);
    myShop.displayUsers();
    form.userNamevalue = '';
    form.userAge.value = '';
})






// Driver Code
let myUser = new User('Alice', 68);
console.log(myShop)
console.log(myUser)