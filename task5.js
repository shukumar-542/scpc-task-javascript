function calculator(num1, num2, operator) {
    let result
    switch (operator) {
        case "+":
            result = num1 + num2;
            console.log(result);
            break;
        case "-":
            result = num1 - num2;
            console.log(result);
            break
        case "*":
            result = num1 * num2;
            console.log(result);
            break
        case "/":
            result = num1 / num2;
            console.log(result);
            break
        default:
            break;
    }

}
calculator(2, 5, '/')

