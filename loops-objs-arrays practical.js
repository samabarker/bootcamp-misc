var shoppingCart=[
    {name:"loaf of bread",type:"food",quantity:1,price:.85},
    {name:"multipack beans",type:"food",quantity:1,price:1},
    {name:"mushrooms",type:"food",quantity:10,price:.1},
    {name:"can of beer",type:"alcohol",quantity:4,price:1.1},
    {name:"prosecco",type:"alcohol",quantity:1,price:8.99},
    {name:"steak",type:"food",quantity:2,price:3.99},
    {name:"blue cheese",type:"food",quantity:1,price:2.99},
    {name:"candles",type:"home",quantity:3,price:1.99},
    {name:"cheesecake",type:"food",quantity:1,price:4.99},
    {name:"onions",type:"food",quantity:3,price:.4}
];


// TASK 1
// ------------------------------------------------------------
//CREATE FUNCTION take arg shoppingCart
    //CREATE VAR totalPrice
    //LOOP through items in shopping cart
    //  Add (price * quantity) to VAR totalPrice
//RETURN VAR totalPrice

let getTotalPrice = (shoppingCart) => {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += (item.price * item.quantity);
    }
    return totalPrice.toFixed(2);
}

console.log("TASK 1");
console.log(getTotalPrice(shoppingCart));
console.log("");


// TASK 2
// ------------------------------------------------------------
// CREATE FUNCION take arg shoppingCart, discount percentage
    //CREATE VAR totalPrice
    //LOOP through item
        // USE TERNARY OPERATOR???
        //IF item is food
            //THEN ADD (item price * item quantity * (100 - discount percentage)) to VAR totalPrice
        // ELSE
            // THEN ADD item price * item quantity to VAR totalPrice
    //RETURN var totalPrice

let getTotalPrice2 = (shoppingCart, discount) => {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += (item.type === "food") ? (item.price * item.quantity * (100 - discount) * 0.01) : (item.price * item.quantity);
        }
    return totalPrice.toFixed(2);
}

console.log("TASK 2");
console.log(getTotalPrice2(shoppingCart,20));
console.log("");


// TASK 3
// ------------------------------------------------------------
// CREATE FUNCION take arg shoppingCart, discount percentage, type
    //CREATE VAR totalPrice
    //LOOP through item
        // USE TERNARY OPERATOR???
        //IF item is type passed in OR item is any
            //THEN ADD (item price * item quantity * (100 - discount percentage)) to VAR totalPrice
        // ELSE
            // THEN ADD item price * item quantity to VAR totalPrice
    //RETURN var totalPrice

let getTotalPrice3 = (shoppingCart, discount, type) => {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += (item.type === type || type === "any") ? (item.price * item.quantity * (100 - discount) * 0.01) : (item.price * item.quantity);
        }
    return totalPrice.toFixed(2);
}

console.log("TASK 3");
console.log(getTotalPrice3(shoppingCart, 20, "food"));
console.log(getTotalPrice3(shoppingCart, 20, "alcohol"));
console.log(getTotalPrice3(shoppingCart, 20, "home"));
console.log(getTotalPrice3(shoppingCart, 20, "any"));
console.log("");


// TASK 3a
// ------------------------------------------------------------
// CREATE FUNCION take arg shoppingCart, highPrice, lowPrice
    //CREATE ARRAY arrItems
    //LOOP through item
        //IF item price geater than or equal lowPrice AND item price lower than or equal to highPrice
            //THEN push item to arrItems
    //RETURN ARRAY arrItems

    let filterItems = (shoppingCart, highPrice, lowPrice) => {
        arrItems = [];
        for (let item of shoppingCart) {
            if (item.price <= highPrice && item.price >= lowPrice) {
                arrItems.push(item);
            }
        }
        return(arrItems);
    }

    console.log("TASK 3a");
    console.log(filterItems(shoppingCart,1,0));
    console.log("");