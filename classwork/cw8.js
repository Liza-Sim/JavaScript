let sixDigitNumber = Number(prompt('Привіт! Введи будь-яке шестизначне число!'));
let sixDigitTask8 = sixDigitNumber % 10;
let fiveDigitNumberTask8 = (sixDigitNumber - sixDigitTask8) / 10;
let fiveDigitTask8 = fiveDigitNumberTask8 % 10;
let fourDigitNumberTask8 = (fiveDigitNumberTask8 - fiveDigitTask8) / 10;
let fourDigitTask8 = fourDigitNumberTask8 % 10;
let threeDigitNumberTask8 = (fourDigitNumberTask8-fourDigitTask8) /10; 
let threeDigitTask8 = threeDigitNumberTask8 % 10;
let twoDigitNumberTask8 = (threeDigitNumberTask8 - threeDigitTask8) / 10;
let twoDigitTask8 = twoDigitNumberTask8 % 10;
let oneDigitTask8 = (twoDigitNumberTask8 - twoDigitTask8) / 10;

if (oneDigitTask8 != sixDigitTask8) {
    alert(`Цифри в числі ${sixDigitNumber} написані не дзеркально`);
} else if (twoDigitTask8 != fiveDigitTask8) {
    alert(`Цифри в числі ${sixDigitNumber} написані не дзеркально`);
} else if (threeDigitTask8 != fourDigitTask8) {
    alert(`Цифри в числі ${sixDigitNumber} написані не дзеркально`);
} else {
    alert(`Цифри в числі ${sixDigitNumber} написані дзеркально`);
}