// Создать сущность автомобиля: Характеристики автомобиля отдельными свойствами
// Методы: Вывода на экран данных об этом автомобиле
// Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)


function Car(brand, year, fuelСonsumption, owner, ageOwner) {
    this.brand = brand;
    this.year = year;
    this.fuelСonsumption = fuelСonsumption;
    this.owner = owner;
    this.showCar = function () {
        console.log(`Марка машини ${this.brand}. Рік випуску ${this.year}. Витрати палива: ${fuelСonsumption}л. на 100км. Власник ${owner} - ${ageOwner} роки`);
    }
    this.infoCar = function () {
        console.log(`Марка машини ${this.brand}. Рік випуску ${this.year}. Витрати палива: ${fuelСonsumption}л. на 100км. Власник ${owner}`);
    }
}
