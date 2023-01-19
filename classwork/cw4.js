let userNumber = Number(prompt('Привіт! Введи будь-яке число!'));
let remainder = userNumber % 2;
let lastDigit = userNumber % 10;
if (remainder === 0) {
    alert(`число ${userNumber} закінчується парною цифрою! Остання цифра ${lastDigit}`);
} else {
    alert(`число ${userNumber} закінчується непарною цифрою! Остання цифра ${lastDigit}`);
}




 