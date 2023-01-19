
let num = prompt('Напиши число, яке потріно піднести в степінь!');
let degree = prompt('Який степінь?');

function pow(num, degree) {
    if (degree === 1) {
        return num;
    } else if (degree === 0) {
        return num = 1;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log (`Число ${num} в степені ${degree} = ` + pow(num, degree));