// -Найти среднее арифметическое всех целых чисел от 1 до 500

let sum = 0;
let sumarithmeticalMean = 0;
for (let i = 0; i <= 500; i++) {
    sum = sum + i;
    sumarithmeticalMean= sum / i;
}
console.log(`Cреднее арифметическое всех целых чисел от 1 до 500 = ${sumarithmeticalMean}`);