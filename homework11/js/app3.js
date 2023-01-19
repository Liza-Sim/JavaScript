// Написать функцию заполнения пользовательскими данными двумерного массива.Длину основного массива и внутренних массивов задаёт пользователь.
// Значения всех элементов всех массивов задаёт пользователь.

function mainArr() {
let arr = [];
let amountOfElements = Number(prompt('кількість елементів в масиві'));
for (let i = 0; i < amountOfElements; i++) {
    let amountOfElements2 = Number(prompt('кількість елементів в підмасиві №' + [i+1]));
    arr[i] = [];
    for (let j = 0; j < amountOfElements2; j++) {
    let value = prompt([j+1]+ ' ' + 'елемент');
        arr[i][j] = value; 
    }
    }
    return arr;
}

let result = mainArr();
console.log(result);