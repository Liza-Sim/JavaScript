let numberOne = Number(prompt('Привіт! Введи перше число!'));
let numberTwo = Number(prompt('Введи друге число!'));
if (numberOne > numberTwo) {
    alert('Перше число більше');
} else if (numberOne < numberTwo) {
    alert('Друге число більше');
} else {
    alert('Два числа рівні');
}