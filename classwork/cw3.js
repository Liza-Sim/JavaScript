let a = Number(prompt('Привіт! Введи число a!'));
let b = Number(prompt('Введи число b!'));
let balance = a % b;
console.log(balance);
if (balance === 0) {
    alert('Число b ділить число a без остачі');
} else if (a < b) {
    alert('Число b більше за a, неповна частка відсутня');
} else {
    alert(`Число b ділить число a з остачею ${balance}`);
}
let balanceTwo = b % a;
if (balanceTwo === 0) {
    alert('Число a ділить число b без остачі');
} else if (a>b) {
    alert('Число a більше за b, неповна частка відсутня');
} else {
    alert(`Число a ділить число b з остачею ${balanceTwo}`);
}

