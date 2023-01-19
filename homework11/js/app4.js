// Создать функцию, которая убирает из строки все символы, которые мы передали вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor".
// Исходную строку и символы для удаления задаёт пользователь

function wordUser() {
    let str = prompt ('З якого речення потрібно видаляти літери?')
    let arrStr = str.split('');
    return arrStr;
}
function getLetterUser() {
    let letterUserArr = [];
    let amountOfElements = prompt('Скільки символів видаляти?');
    for (let i = 0; i < amountOfElements; i++) {
        let value = prompt('Введи літеру № ' + [i + 1]);
        letterUserArr[i] = value;
    }
    return letterUserArr;
}
function search(arr, letter) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if (letter.indexOf(arr[i]) == -1) {
      result.push(arr[i]);
    }
  }
  return result.join('');
}

let arr = wordUser();
let letter = getLetterUser();
let newArr = search(arr, letter);
console.log(newArr);


