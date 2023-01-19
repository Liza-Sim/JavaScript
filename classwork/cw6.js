let aThreeDigitNumber = Number(prompt('Привіт! Введи будь-яке трьохзначне число!'));
let threeDigit = aThreeDigitNumber % 10;
let aTwoDigitNumber = (aThreeDigitNumber - threeDigit) / 10;
let twoDigit = aTwoDigitNumber % 10;
let oneDigit = (aTwoDigitNumber - twoDigit) / 10;
let sum = oneDigit + twoDigit + threeDigit;

if (sum % 2 === 0) {
    alert(`Сума цифр числа ${aThreeDigitNumber} = ${sum}! Це парне число`);
} else {
    alert(`Сума цифр числа ${aThreeDigitNumber} = ${sum}! Це непарне число`);
}

if (sum % 5 === 0) {
    alert(`Сума цифр числа ${aThreeDigitNumber} = ${sum}! Сума кратна 5`);
} else {
    alert(`Сума цифр числа ${aThreeDigitNumber} = ${sum}! Сума не кратна 5`);
}

let multiplication = oneDigit * twoDigit * threeDigit;
if (multiplication < 100) {
    alert(`Добуток цифр в числі ${aThreeDigitNumber} = ${multiplication}! Добуток менший ніж 100`);
} else if (multiplication === 100) {
    alert(`Добуток цифр в числі ${aThreeDigitNumber} = ${multiplication}! Добуток дорівнює 100`);
} else {
    alert(`Добуток цифр в числі ${aThreeDigitNumber} = ${multiplication}! Добуток більший ніж 100`);
}
    
