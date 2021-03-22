// EXAMPLES
// ---------------------------------------------------------------------------------------
// // While loop
// let bottlesOfBeer = 10;
// while (bottlesOfBeer > 0) {
//     switch(bottlesOfBeer){
//         case 1:
//             console.log(`${bottlesOfBeer} bottle of beer on the wall!`);
//             break;
//         default:
//             console.log(`${bottlesOfBeer} bottles of beer on the wall!`);
//     }
//     bottlesOfBeer -= 1;
// }


// // For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// TASKS
// ---------------------------------------------------------------------------------------
// // Task 1
// for (let i = 1; i <= 12; i++) {
//     console.log(7*i);
// }

// Task 1a
for (let i = 1; i <= 12; i++) {
    let tables = [];
    for (let j = 1; j <= 12; j++) {
        tables.push(i*j);
    }
    console.log(tables);
}