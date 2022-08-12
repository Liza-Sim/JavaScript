//1//
let greeting = 'Hello world'
let greetingArr = greeting.split('')
greetingArr[6] = 'W'
console.log (greetingArr.join(''))

//2//
let stringCharacter = 'a123';
let stringCharacterSymbol = stringCharacter.split('');
let stringCharacterArr = []
for (let i3 = 0; i3 < stringCharacter.length; i3++) {
    if (+stringCharacterSymbol[i3]) {
        stringCharacterArr.push('number');
    }
    else {
        stringCharacterArr.push('string');
    }
}
console.log(stringCharacterArr.join(', '))

let stringCharacter2 = 'a123';
let stringCharacterSymbol2 = stringCharacter.split('');
let stringCharacterArr2 = []
let i4 = 0;
while (i4 < stringCharacter2.length) {
    if (+stringCharacterSymbol2[i4]) {
        stringCharacterArr2.push('number');
    }
    else {
        stringCharacterArr2.push('string');
    }
    i4++
}
console.log(stringCharacterArr2.join(', '))
    
//3//
for (i = 13; i > 3; i--) {
    if (i % 2 == 0) {
        console.log (i + 'even')
    }
    else if (i % 2 != 0) {
        console.log (i + 'odd')
    }
}
let i2 = 13;
while (i2 > 3) {
    if (i2 % 2 == 0) {
        console.log (i2 + 'even')
    }
    else if (i2 % 2 != 0) {
        console.log(i2 + 'odd')
    }
    i2--
}




