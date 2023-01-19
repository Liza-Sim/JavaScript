function enterName() {
    let nameUser = prompt('Введіть ім\'я');
    if (!nameUser.trim() || !isNaN(nameUser)) {
        enterName();
    }
    return nameUser;
}
function enterAge() {
    let ageUser = prompt('Скільки Вам років?');
    if (ageUser < 18 || isNaN(ageUser)) {
        enterAge();
    }
    return ageUser;
}
function enterBrand() {
    let getBrand = prompt('Введіть марку автомобіля!');
    if (!getBrand.trim() || !isNaN(getBrand)) {
        enterBrand();
    }
    return getBrand;
}
function enterYearCar() {
    let getYear = prompt('Якого року випуску автомобіль?');
    if (isNaN(getYear) || getYear == 0 || !getYear.trim()) {
        enterYearCar();
    }
    return getYear;
}
function enterFuelСonsumption() {
    let getFuelСonsumption = prompt('Яка витрата палива на 100км?');
    if (isNaN(getFuelСonsumption) || getFuelСonsumption == 0 || !getFuelСonsumption.trim()) {
        enterFuelСonsumption();
    }
    return getFuelСonsumption;

}
function enterOwner() {
    let getOwner = prompt('Хто власник авто?');
    if (!getOwner.trim() || !isNaN(getOwner)) {
        enterOwner();
    }
    return getOwner;
}
function enterOwnerCar(name, owner) {
    let nameSearch = name;
    let ownerSearch = owner;
    if (nameSearch === ownerSearch) {
        return ownerSearch;
    } else {
        console.log(`за Вашим ім\'ям ${nameSearch} машина не знайдена`)
    }  
}

function infoCar() {
    let namePerson = enterName();
    let agePerson = enterAge();
    let person = new Person(namePerson, agePerson);
    let brandCar = enterBrand();
    let yearCar = enterYearCar();
    let fuelСonsumptionCar = enterFuelСonsumption();
    let owner = enterOwner();
    let ownerCar = enterOwnerCar(namePerson, owner);
    let car = new Car(brandCar, yearCar, fuelСonsumptionCar, owner, agePerson);
    if (ownerCar === namePerson) {  
        car.showCar();
    } else {
        person.showPerson();
        car.infoCar();
    }
} 

infoCar();




