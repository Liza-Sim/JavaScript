// Написать функцию doMath(x, znak, y), которая получает 3 аргумента: числа x и y, строку znak.
// В переменной znak может быть: +, -, *, /, %, ^ (степень). Вывести результат математического действия, указанного в переменной znak.
// Оба числа и знак получаются от пользователя.

function number() {
    let inputXY = parseInt(prompt('Введи число'));
    if (isNaN(inputXY)) {
        number();
    }
    return inputXY;
}
function operatorZnak() {
    let operator = prompt('Введи знак дії (+, -, *, /, %, ^)')
    if (operator == '+' || operator == '-' || operator == '*' || operator == '/' || operator == '%' || operator == '^') {
        return operator;
    } else {
        operatorZnak();
    } 
}
function doMath(x, znak, y) {
    let math;
    switch (znak) {
        case '+':
            math = x + y;
            break;
        case '-':
            math = x - y;
            break;
        case '*':
            math = x * y;
            break;
        case '/':
            math = x / y;
            break;
        case '%':
            math = x % y;
            break;
        case '^':
            math = Math.pow(x, y);
            break;
        default:
            break;
    }  
    return math;
}
function searchResult() {
    let x = number();
    let znak = operatorZnak();
    let y = number();
    let foundTheAnswer = doMath(x, znak, y);
    return foundTheAnswer;
}

let result = searchResult();
console.log(result);

