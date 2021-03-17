// 1. Percentage Calculator
const percentageCalculator = (number, percentage) => {
    return number * percentage / 100;
}

console.log(percentageCalculator(125,10));


//2. Output Drink Order using Switch Statement
const drinkOrder = (size, drink) => {
    let msg = "You have ordered a";
    switch(drink) {
        case 'cola':
            return `${msg} ${size} Cola`;
        case 'lemon':
            return `${msg} ${size} Lemonade`;
        case 'orange':
            return `${msg} ${size} Orangeade`;
        default:
            return 'You have not ordered a valid drink.';
    }
}

console.log(drinkOrder('Large','lemon'));


//3. Calculator
const calculator = (number1, number2, operator) => {
    let answer = 0;
    if (Number.isInteger(number1) && Number.isInteger(number2)) {
        switch(operator) {
            case '+':
                answer = number1 + number2;
                break;
            case '-':
                answer = number1 - number2;
                break;
            case '*':
                answer =  number1 * number2;
                break;
            case '/':
                if (number2 == 0) {
                    return 'Cannot divide by zero';
                }
                answer =  number1 / number2;
                break;
            case '%':
                if (number2 == 0) {
                    return 'Cannot divide by zero';
                }
                answer = number1 % number2;
                break;
            default:
                return 'Incorrect input';
        }
        return `${number1} ${operator} ${number2} = ${answer}`;
    }
    return ('Invalid input');
}

console.log(calculator(55,1,'/'));