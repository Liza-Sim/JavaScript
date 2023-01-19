let array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Найти сумму и количество положительных элементов.

let sumPositiveElements = 0;
let nuberPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        sumPositiveElements += array[i];
        nuberPositiveElements++
    }
}
console.log(`Количество положительных элементов ${nuberPositiveElements}, их сумма ${sumPositiveElements}`);

// Найти минимальный элемент массива и его порядковый номер.
let min = 0;
let numberMin = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
        min = array[i];
        numberMin = i;
    }
}
console.log(`Минимальный элемент массива ${min}, его порядковый номер ${numberMin + 1} `);

// Найти максимальный элемент массива и его порядковый номер.

let max = 0;
let numberMax = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
        max = array[i];
        numberMax = i;
    }
}
console.log(`Максимальный элемент массива ${max}, его порядковый номер ${numberMax + 1} `);

// Определить количество отрицательных элементов.

let nuberNegativeElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        nuberNegativeElements++
    }
}
console.log(`Количество отрицательных элементов ${nuberNegativeElements}`);

// Найти количество нечетных положительных элементов.

let numberOfOddPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0 && array[i] > 0) {
        numberOfOddPositiveElements++
    }
}
console.log(`Количество нечетных положительных элементов ${numberOfOddPositiveElements}`);

// Найти количество четных положительных элементов.

let numberOfEvenPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > 0) {
        numberOfEvenPositiveElements++
    }
}
console.log(`Количество четных положительных элементов ${numberOfEvenPositiveElements}`);

// Найти сумму четных положительных элементов.

let sumOfEvenPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > 0) {
        sumOfEvenPositiveElements += array[i];
    }
}
console.log(`Сумма четных положительных элементов ${sumOfEvenPositiveElements}`);

// Найти сумму нечетных положительных элементов.

let sumOfOddPositiveElements = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0 && array[i] > 0) {
        sumOfOddPositiveElements += array[i];
    }
}
console.log(`Сумма нечетных положительных элементов ${sumOfOddPositiveElements}`);

// Найти произведение положительных элементов.

let multiplicationOfPositiveElements = 1;
for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        multiplicationOfPositiveElements = multiplicationOfPositiveElements * array[i];
    }
}
console.log (`Произведение положительных элементов ${multiplicationOfPositiveElements}`)


// Найти наибольший среди элементов массива, остальные обнулить

let maxElement = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
        maxElement = array[i];
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] != maxElement) {
        array[i] = 0;
    }
}
console.log(array);