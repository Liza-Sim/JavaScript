// Вывести сумму только четных чисел в диапазоне от 30 до 80

let sumOfEvenNumbers = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sumOfEvenNumbers = sumOfEvenNumbers + i;
    }  
}
console.log(`Сумма только четных чисел в диапазоне от 30 до 80 = ${sumOfEvenNumbers}!`);