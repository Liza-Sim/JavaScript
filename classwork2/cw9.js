// -Дано натуральное число. Найти и вывести на страницу все его делители.
// -Определить количество его четных делителей
// -Найти сумму его четных делителей

let aNaturalNumber = prompt('Введи натуральное число, пожалуйста!');
let amount = 0;
let sumOfEvenDivisors = 0;

for (let i = 0; i <= aNaturalNumber; i++) {
    if (aNaturalNumber % i === 0) {
        document.write(i + ' ');
        if (i % 2 === 0) {
            amount++;
            sumOfEvenDivisors = sumOfEvenDivisors + i;
        }
    }
}
document.write(`<p> Количество четных делителей ${amount} </p>`);
document.write(`<p> Сумма четных делителей ${sumOfEvenDivisors} </p>`);
