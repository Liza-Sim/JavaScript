let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sumPositiveElements = 0;
let nuberPositiveElements = 0;
let numberOfOddPositiveElements = 0;
let numberOfEvenPositiveElements = 0;
let sumOfEvenPositiveElements = 0;
let sumOfOddPositiveElements = 0;
let multiplicationOfPositiveElements = 1;
let nuberNegativeElements = 0;
let numberZero = 0;
let max = 0;
let numberMax = 0;
let min = 0;
let numberMin = 0;
let maxElement = 0;

for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
        sumPositiveElements += array[i];
            nuberPositiveElements++;
            multiplicationOfPositiveElements = multiplicationOfPositiveElements * array[i];
            if (array[i] % 2 != 0) {
                numberOfOddPositiveElements++;
                sumOfOddPositiveElements += array[i];
            } else {
                numberOfEvenPositiveElements++;
                sumOfEvenPositiveElements += array[i];
            }
        } else if (array[i] < 0) {
            nuberNegativeElements++;
        } else {
            numberZero++;
        }
    if (array[i] > max) {
        for (let a = 0; a < array.length; a++) {
            if (array[a] > max) {
                max = array[a];
                numberMax = a;
            }
        }
    }
    if (array[i] < min) {
        min = array[i];
        numberMin = i;
    }
     if (array[i] < max) {
         array[i] = 0;
    }
    
}
console.log(`Количество положительных элементов ${nuberPositiveElements}, их сумма ${sumPositiveElements}`);
console.log(`Минимальный элемент массива ${min}, его порядковый номер ${numberMin + 1} `);
console.log(`Максимальный элемент массива ${max}, его порядковый номер ${numberMax + 1} `);
console.log(`Количество отрицательных элементов ${nuberNegativeElements}`);
console.log(`Количество нечетных положительных элементов ${numberOfOddPositiveElements}`);
console.log(`Количество четных положительных элементов ${numberOfEvenPositiveElements}`);
console.log(`Сумма четных положительных элементов ${sumOfEvenPositiveElements}`);
console.log(`Сумма нечетных положительных элементов ${sumOfOddPositiveElements}`);
console.log(`Произведение положительных элементов ${multiplicationOfPositiveElements}`)
console.log(array);

