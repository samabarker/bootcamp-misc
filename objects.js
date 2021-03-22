// // // EXAMPLES
// // // ---------------------------------------------------------------------------------------
// let user = {
//     hometown: 'Huddersfield',
//     hair: 'Brown',
//     likes: ['Pizza', 'Coding'],
//     birthday: {month: 9, day: 15}
// };

// console.log(user['birthday']['month']);
// console.log(user.birthday.month);

// user.married = true;
// console.log(user.married);
// delete user.married;


// TASKS
// ---------------------------------------------------------------------------------------
recipe = {
    recipeTitle: 'Lasagna',
    servings: '4',
    ingredients: ['Lasagna Sheets', 'Tomato Sauce', 'Cheese', 'Mince'],
    directions: ['1. Cook mince into pasta sauce', '2. Place lasagna sheets into base of dish', '3. Add layer of sauce', '4. Add layer of cheese', '5. Add layer of lasagna sheets', '6. Repeat until dish is full', '7. Cook at 180C for 40 minutes']
};

// List ingredients
console.log('INGREDIENTS');
for(i=0; i < recipe.ingredients.length; i++) {
    console.log(`Ingredient ${i+1} is ${recipe.ingredients[i]}`);
}

console.log('');

// List steps
console.log('DIRECTIONS');
for(i=0; i < recipe.directions.length; i++) {
    console.log(recipe.directions[i]);
}