// -Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

let wholeТumber = Number (prompt('Введи ціле число, будь-ласка'));
let primeNumberChange = 0;

if (wholeТumber === 0) {
    primeNumberChange++;
} else if (wholeТumber === 1) {
    primeNumberChange++;
} else if (wholeТumber > 0) {
    for (let i = 2; i < wholeТumber; i++) {
    if (wholeТumber % i === 0) {
        primeNumberChange++;
        break;
    } 
    }  
}
if (primeNumberChange === 0) {
    console.log(`Число ${wholeТumber} є простим (true)`);
} else {
    console.log(`Число ${wholeТumber} не є простим (false)`);
}

