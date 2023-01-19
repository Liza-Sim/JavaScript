let distanceOne = Number(prompt('Привіт! Введи першу відстань в кілометрах!'));
distanceOne = distanceOne / 1000;
let distanceTwo = Number(prompt('Введи другу відстань в футах!'));
distanceTwo = distanceTwo / 3.28;
if (distanceOne > distanceTwo) {
    alert('Перша відстань більша');
} else if (distanceOne < distanceTwo) {
    alert('Друга відстань більша');
} else {
    alert('Дві відстані однакові');
}

    




