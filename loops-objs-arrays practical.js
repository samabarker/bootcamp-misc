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

const getTotalPrice = (shoppingCart) => {
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

const getTotalPrice2 = (shoppingCart, discount) => {
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

const getTotalPrice3 = (shoppingCart, discount, type) => {
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

const filterItems = (shoppingCart, highPrice, lowPrice) => {
    arrItems = [];
    for (let item of shoppingCart) {
        if (item.price <= highPrice && item.price >= lowPrice) {
            arrItems.push(item);
        }
    }
    return(arrItems);
}

    console.log("TASK 3a");
    console.log(filterItems(shoppingCart,1,0.2));
    console.log("");


// TASK 3b
// ------------------------------------------------------------
// CREATE FUNCION take arg shoppingCart, highPrice, lowPrice, quantity
    //CREATE ARRAY arrItems
    //LOOP through item
        //CREATE VAR multiplier
        //IF quantity true
            //THEN let multiplier equal number of items
        //IF (item price * multiplier) geater than or equal lowPrice AND (item price * multiplier) lower than or equal to highPrice
            //THEN push item to arrItems
    //RETURN ARRAY arrItems

const filterItems2 = (shoppingCart, highPrice, lowPrice, quantity) => {
    arrItems = [];
    for (let item of shoppingCart) {
        let multiplier = quantity ? item.quantity : 1;
        if (item.price * multiplier <= highPrice && item.price * multiplier >= lowPrice) {
            arrItems.push(item);
        }
    }
    return(arrItems);
}

console.log("TASK 3b");
console.log(filterItems2(shoppingCart,1,0.2, true));
console.log("");


// TASK 4
// ------------------------------------------------------------
let randomNumbers = [3, 6, 1, 68, 23, 15, 3, 9, 56, 10];

const calculateMean = (arr) => {
    let total = 0;
    for (let number in arr) {
        total += arr[number];
    }
    return (total / arr.length);
}

const calculateMode = (arr) => {
    let nums = [];
    let count = [];

    for (number1 in arr) {
        let current_num = arr[number1]
        let current_count = 0
        for (number2 in arr) {
            if (arr[number2] === current_num) {
                current_count +=1
            }
        }
        if (!nums.includes(current_num)) {
            nums.push(current_num);
            count.push(current_count);
        }
    }

    let max_num = 0;
    let max_count = 0;
    for (i=0; i<nums.length; i++) {
        if (count[i] > max_count) {
            max_num = nums[i];
            max_count = count[i];
        }
    }
    return max_num;
}

const calculateMedian = (arr) => {
    let sortedArr = arr.sort(function(a, b){return a - b});
    if (sortedArr.length % 2 === 0){
        return ((sortedArr[sortedArr.length / 2]) + (sortedArr[1 + sortedArr.length / 2])) / 2;
    } 
    return sortedArr[(Math.floor(sortedArr.length / 2))];
}


console.log(calculateMean(randomNumbers));
console.log(calculateMode(randomNumbers));
console.log(calculateMedian(randomNumbers));