let threeDigitNumberTask7 = Number(prompt('Привіт! Введи будь-яке трьохзначне число!'));
let threeDigitTask7 = threeDigitNumberTask7 % 10;
let twoDigitNumberTask7 = (threeDigitNumberTask7 - threeDigitTask7) / 10;
let twoDigitTask7 = twoDigitNumberTask7 % 10;
let oneDigitTask7 = (twoDigitNumberTask7 - twoDigitTask7) / 10;

if (threeDigitTask7 != twoDigitTask7) {
    alert(`Три цифри числа ${threeDigitNumberTask7} не однакові`);
} else if (twoDigitTask7 != oneDigitTask7) {
    alert(`Три цифри числа ${threeDigitNumberTask7} не однакові`);
} else {
   alert (`Три цифри числа ${threeDigitNumberTask7} однакові`);
}

if (threeDigitTask7 === twoDigitTask7) {
    alert(`В числі ${threeDigitNumberTask7} є однакові цифри`);
} else if (twoDigitTask7 === oneDigitTask7) {
    alert(`В числі ${threeDigitNumberTask7} є однакові цифри`);
} else if (oneDigitTask7 === threeDigitTask7) {
     alert(`В числі ${threeDigitNumberTask7} є однакові цифри`);
} else {
   alert (`Всі цифри числа ${threeDigitNumberTask7} різні`);
}