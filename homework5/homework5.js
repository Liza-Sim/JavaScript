// -Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)

let userNumber = Number(prompt('Введи число, будь-ласка'));
let remainder = userNumber/3;
let degreeOf = 0;
while (remainder > 5) {
    remainder = remainder / 3;
}
if (remainder === 1) {
    console.log(`Число ${userNumber} це 3 в степені 1`);
} else if (remainder % 3 === 0 ) {
    for (let i = 3; i <= userNumber;) {
        degreeOf++;
        i = i * 3;
    };
    console.log(`Число ${userNumber} це 3 в степені ${degreeOf}`);
} else {
    console.log(`Число ${userNumber} не можна отримати методом піднесення цифри 3 до степеня`);
}

 
