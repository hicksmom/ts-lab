"use strict";

// TALLEST MOUNTAIN
// ● Declare an interface called Mountain that contains the following properties:
    // ○ name - string
    // ○ height - number

interface Mountain {
    name: string;
    height: number;
}

// ● Declare an array called mountains which is an array of type Mountain.
// ● Fill the array with the following mountains:
    // name         height
    // Kilimanjaro  19341
    // Everest      29029
    // Denali       20310

const mountains: Mountain[] = [
    {name: "Kilimanjaro", height: 19341}, 
    {name: "Everest", height: 29029}, 
    {name: "Denali", height: 20310}
];

// ● Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").

function findNameOfTallestMountain(mtns: Mountain[]) : string {
    let nameOfTallestMountain: string = "";
    let tallestHeight: number = 0;
    for (const mtn of mtns) {
        if (mtn.height > tallestHeight) {
            tallestHeight = mtn.height;
            nameOfTallestMountain = mtn.name;
        }
    }
    return nameOfTallestMountain;
}

// ● Call findNameOfTallestMountain, passing it your mountains array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It will print “Everest”.)

let tallestMountain: string = findNameOfTallestMountain(mountains);
console.log("Tallest Mountain: " + tallestMountain);


// PRODUCTS
// ● Declare an interface called Product that contains the following properties:
    // ○ name - string
    // ○ price - number

interface Product {
    name: string;
    price: number;
}

// ● Declare an array called products which is an array of type Product.
// ● Fill the array with a few products of your own choosing.

const products: Product[] = [
    {name: "dress", price: 80.00}, 
    {name: "shoes", price: 75.50}, 
    {name: "purse", price: 155.00},
    {name: "jewelry", price: 35.99}
];

// ● Declare a function called calcAverageProductPrice. It takes one parameter, an array
// of Product objects. It returns a number, the average price of all the products provided
// as an argument. If the array argument is empty, return 0.

function calcAverageProductPrice(prods: Product[]) : number {
    let totPrice: number = 0;

    for (const prod of prods) {
        totPrice += prod.price;
    }
    let avgPrice: number = totPrice / prods.length;
    return avgPrice;
}

// ● Call calcAverageProductPrice, passing it your products array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable.

let averagePrice: number = calcAverageProductPrice(products);
console.log("Average Price: " + averagePrice);


// INVENTORY
// ● Declare an interface called InventoryItem that contains the following properties:
    // ○ product - Product (from above)
    // ○ quantity - number

interface InventoryItem {
    product: Product;
    quantity: number;
}

// ● Declare an array called inventory which is an array of type InventoryItem.
// ● Fill the array with the following information.
    // product.name     product.price   quantity
    // motor            10.00           10
    // sensor           12.50           4
    // LED              1.00            20

const inventory: InventoryItem[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10}, 
    {product: {name: "sensor", price: 12.50}, quantity: 4}, 
    {product: {name: "LED", price: 1.00}, quantity: 20}
];

// ● Declare a function called calcInventoryValue. It takes one parameter, an array of
// InventoryItem objects. It returns a number, the total value of all the products in the
// inventory array provided as an argument. If the array argument is empty, return 0.
    // ○ This is calculated as follows: For each InventoryItem take the product price times
    // the quantity. Add these together for all the items. For the above data, the total
    // will be 10.00 x 10 + 12.5 x 4 + 1.00 * 20 = 170.

function calcInventoryValue(items: InventoryItem[]) : number {
    let itemTotal: number = 0;
        
    for (const item of items) {
        itemTotal += item.product.price * item.quantity;
    }
    return itemTotal;
}

// ● Call calcInventoryValue, passing it your products (inventory???) array as an argument.
// ● Store the result of the function call (the return value) in a variable and then console.log
// the variable. (Hint: It prints 170).

let invValue: number = calcInventoryValue(inventory);
console.log("Inventory Value: " + invValue);
    