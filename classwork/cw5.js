let twoDigitNumber = Number(prompt('Привіт! Введи будь-яке двозначне число!'));
let secondDigit = twoDigitNumber % 10;
let firstDidit = (twoDigitNumber - secondDigit) / 10;
if (secondDigit > firstDidit) {
    alert(`В числі ${twoDigitNumber} друга цифра більша`);
} else if (secondDigit < firstDidit)  {
    alert(`В числі ${twoDigitNumber} перша цифра більша`);
} else {
    alert(`В числі ${twoDigitNumber} перша та друга цифри однакові`);
}