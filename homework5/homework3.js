// -Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

let wholeТumber = Number (prompt('Введи ціле число, будь-ласка'));
let numberSquared;
for (let i = 1; i <= 100; i++) {
    if ((numberSquared=Math.pow(i, 2)) <= wholeТumber ) {
        document.write(i + ' ');
    }
}