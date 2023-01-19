// Создать сущность человека имя,возраст.Метод вывода данных
function Person (pName, pAge) {
    this.name = pName ;
    this.age = pAge;
    this.showPerson = function () {
        console.log(`Ваші персональні дані: Iм\'я ${this.name}, вік - ${this.age} років!`);
    }
}
