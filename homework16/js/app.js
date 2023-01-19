'use strict'

let myOrdersArr = JSON.parse(localStorage.getItem('order'));
if (myOrdersArr === null) {
    myOrdersArr = [];
}
function showCategories() {
    const buttonOrders = document.getElementById('orders');
    buttonOrders.addEventListener('click', currentOrders)
    const container = document.querySelector('.categories');
    for (let i = 0; i < list.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = list[i].name;
        elem.setAttribute('list-category', i);
        elem.addEventListener('click', showProduct);
        container.appendChild(elem);
    }
}
function currentOrders() {
    if (myOrdersArr.length < 1) {
        alert('Ваші замовлення не знайдені!');
    } else {
        const container = document.getElementById('container');
        container.textContent = '';
        const form = document.getElementById('form');
        const buttonSave = document.getElementsByClassName('buttonSave');
        if (form != null) {
            form.innerHTML = '';
            buttonSave[0].remove();
        }
        const parentOrder = document.createElement('div');
        parentOrder.setAttribute('id', 'currentOrders');
        container.appendChild(parentOrder);
        for (let i = 0; i < myOrdersArr.length; i++) {
            const item = document.createElement('div');
            item.textContent = myOrdersArr[i].date + ' - ' + myOrdersArr[i].price;
            item.setAttribute('date-order', i)
            item.setAttribute('id', i);
            item.addEventListener('click', showInformOrder);
            parentOrder.appendChild(item);
            const buttonDelete = document.createElement('button');
            buttonDelete.setAttribute('id', 'button' + i);
            buttonDelete.setAttribute('date-button', i);
            buttonDelete.textContent = 'Видалити';
            item.appendChild(buttonDelete);
            buttonDelete.addEventListener('click', deleteOrder);
        }
    }
}
function deleteOrder(event) {
    let question = confirm('Ви впевнені що це замовлення потрібно видалити?');
    if (question === true) {
        event.stopPropagation();
        const index = event.target.getAttribute('date-button');
        console.log(index);
        myOrdersArr.splice(index, 1);
        console.log(myOrdersArr);
        localStorage.setItem('order', JSON.stringify(myOrdersArr));
        const deleteOrder = document.getElementById(index);
        deleteOrder.innerHTML = '';
    }
 }
function showInformOrder(event) {
    const orderIndex = event.target.getAttribute('date-order');
    const activeOrder = document.getElementById(orderIndex);
    for (let key in myOrdersArr[orderIndex]) {
        const item = document.createElement('p');
        activeOrder.appendChild(item);
        item.innerHTML = myOrdersArr[orderIndex][key];
    }  
}
function showProduct(event) {
    const categoryIndex = event.target.getAttribute('list-category');
    const products = list[categoryIndex].products;
    const container = document.querySelector('.products');
    container.innerHTML = '';
    for (let i = 0; i < products.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = products[i].name;
        elem.setAttribute('list-product', i);
        elem.setAttribute('list-category', categoryIndex);
        elem.addEventListener('click', showInformation);
        container.appendChild(elem);
    };
}
function showInformation(event) {
    const productIndex = event.target.getAttribute('list-product');
    const categoryIndex = event.target.getAttribute('list-category');
    const details = document.querySelector('.details');
    details.innerHTML = '';
    const name = document.createElement('div');
    name.textContent = list[categoryIndex].products[productIndex].name;
    name.setAttribute('id', 'purchaseProduct');
    details.appendChild(name);
    const price = document.createElement('div');
    price.setAttribute('id', 'priceProduct')
    price.textContent = list[categoryIndex].products[productIndex].price + ' грн';
    details.appendChild(price);
    const inform = document.createElement('div');
    inform.setAttribute('id', 'detailsProduct')
    inform.textContent = list[categoryIndex].products[productIndex].description;
    details.appendChild(inform);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Купити';
    details.appendChild(button);
    button.addEventListener('click', clickButton);    
}
function clickButton() { 
    const parent = document.getElementById('body');
    const form = document.createElement('form');
    form.setAttribute('id', 'form');
    parent.appendChild(form);
    for (let i = 0; i < 3; i++) {
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id', 'fieldset' + i);
        fieldset.setAttribute('class', 'fieldset');
        form.appendChild(fieldset);
        const legend = document.createElement('legend');
        legend.setAttribute('id', 'legend' + i);
        fieldset.appendChild(legend);
    }
    fieldset1();
    fieldset2();
    fieldset3();
    buttonForm();
}
function fieldset1() {
    const fieldset = document.getElementById('fieldset0');
    const legend = document.getElementById('legend0');
    legend.innerHTML = 'Персональні дані:';
    for (let i = 0; i < 3; i++) {
        const paragr = document.createElement('p');
        paragr.setAttribute('id', 'p' + i);
        fieldset.appendChild(paragr);
    }
    const paragr1 = document.getElementById('p0');
    const paragr2 = document.getElementById('p1');
    const paragr3 = document.getElementById('p2');
    const name = document.createElement('input');
    name.setAttribute('type',"text");
    name.setAttribute('name', "name");
    name.setAttribute('id',"name");
    name.setAttribute('placeholder',"Введіть Ваші ПІБ");
    paragr1.appendChild(name);
    const city = document.createElement('select');
    city.setAttribute('name', 'city');
    city.setAttribute('id', 'city');
    paragr2.appendChild(city);
    const cityArr = ['Місто','Київ', 'Львів', 'Одеса'];
    for (let i = 0; i < cityArr.length; i++) {
        const option = document.createElement('option');
        option.setAttribute('value', cityArr[i]);
        option.innerHTML = cityArr[i];
        city.appendChild(option);
    }
    const postOffice = document.createElement('input');
    postOffice.setAttribute('type',"number");
    postOffice.setAttribute('name', "postOffice");
    postOffice.setAttribute('id',"postOffice");
    postOffice.setAttribute('placeholder',"Номер пошти");
    paragr3.appendChild(postOffice);
}
function fieldset2() {
    const fieldset = document.getElementById('fieldset1');
    const legend = document.getElementById('legend1');
    legend.innerHTML = 'Виберіть тип оплати та кількість';
    for (let i = 0; i < 4; i++) {
        const paragr = document.createElement('p');
        paragr.setAttribute('id', 'p1' + i);
        fieldset.appendChild(paragr);
    }
    const paragr1 = document.getElementById('p10');
    const paragr2 = document.getElementById('p11');
    const paragr3 = document.getElementById('p12');
    const paragr4 = document.getElementById('p13');
    const money1 = document.createElement('input');
    money1.setAttribute('type', 'radio');
    money1.setAttribute('name', 'money');
    money1.setAttribute('id', 'money');
    money1.setAttribute('value', 'оплата на картку');
    paragr1.appendChild(money1);
    paragr1.innerHTML += '  оплата на картку';
    const money2 = document.createElement('input');
    money2.setAttribute('type', 'radio');
    money2.setAttribute('name', 'money');
    money2.setAttribute('id', 'money');
    money2.setAttribute('value', 'оплата при отриманні');
    paragr2.appendChild(money2);
    paragr2.innerHTML += '  оплата при отриманні';
    const amount = document.createElement('input');
    paragr3.innerHTML = 'Виберіть кількість кг:'
    amount.setAttribute('type', 'number');
    amount.setAttribute('name', 'amount');
    amount.setAttribute('id', 'amount');
    amount.setAttribute('placeholder', 'Кількість');
    paragr4.appendChild(amount);
}
function fieldset3() {
    const fieldset = document.getElementById('fieldset2');
    const legend = document.getElementById('legend2');
    legend.innerHTML = 'Коментар, дата та час замовлення:';
    const comment = document.createElement('input');
    comment.setAttribute('type',"text");
    comment.setAttribute('name', "comment");
    comment.setAttribute('class', "comment");
    comment.setAttribute('placeholder',"Коментар до замовлення!");
    fieldset.appendChild(comment);
    const date = document.createElement('input');
    date.setAttribute('type', 'date');
    date.setAttribute('name', "date");
    fieldset.appendChild(date);
    const time = document.createElement('input');
    time.setAttribute('type', 'time');
    time.setAttribute('name', "time");
    fieldset.appendChild(time);
    
}
function buttonForm() {
    const form = document.getElementById('form');
    const body = document.getElementById('body');
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.setAttribute('class', 'buttonSave');
    button.textContent = 'Зберегти';
    body.appendChild(button);
    button.addEventListener('click', verificationOfInformation);
}
function verificationOfInformation() {
    function verificationName() {
        const inputName = document.getElementById('name')
        const name = document.forms[0].elements.name.value;
        if (!name.trim() || !isNaN(name) || isFinite(name)) {
            error('Ваші ПІБ');
            return false;
        }
        return name;
    }
    function verificationCity() {
        const inputCity = document.getElementById('city');
        const city = document.forms[0].elements.city.value;
        if (city === 'Місто') {
            error('Місто');
            return false;
        }
        return city;
    }
    function verificationPostOffice() {
        const inputPostOffice = document.getElementById('postOffice');
        const postOffice = document.forms[0].elements.postOffice.value;
        if (postOffice<1 || isNaN(postOffice)) {
            error('Відділення пошти');
            return false;
        }
        return postOffice;
    }
    function verificationMoney() {
        const inputMoney = document.getElementById('money');
        const money = document.forms[0].elements.money.value;
         if (!isNaN(money)) {
            error('Тип оплати');
            return false;
        }
        return money;
    }
    function verificationAmount() {
        const inputAmount = document.getElementById('amount');
        const amount = document.forms[0].elements.amount.value;
        if (amount<1 || isNaN(amount)) {
            error('Кількість кг');
            return false;
        }
        return amount;
    }
    function verificationComment() {
        const comment = document.forms[0].elements.comment.value;
        if (!comment.trim() || !isNaN(comment) || isFinite(comment)) {
            return 'Коментар відсутній'
        }
        return comment;
    }
    function verificationDate() {
        const date = document.forms[0].elements.date.value;
        if (!isNaN(date)) {
            error('Дата замовлення');
            return false;
        }
        return date;
    }
    function verificationTime() {
        const time = document.forms[0].elements.time.value;
        if (!isNaN(time)) {
            error('Час замовлення');
            return false;
        }
        return time;
    }
    const name = verificationName();
    const city = verificationCity();
    const postOffice = verificationPostOffice();
    const money = verificationMoney();
    const amount = verificationAmount();
    const comment = verificationComment();
    const date = verificationDate();
    const time = verificationTime();
    const product = document.getElementById('purchaseProduct');
    const price = document.getElementById('priceProduct');
    const details = document.getElementById('detailsProduct');
    if (name && city && postOffice && money && amount && date && time ) { 
        const myOrder = {
            product: `Товар - ${product.textContent}`,
            price: `Ціна - ${price.textContent}`,
            details: `Опис товару - ${details.textContent}`,
            name: `Ім\'я: ${name}`,
            city: `Місто: ${city}`,
            postOffice: `Номер відділення: ${postOffice}`,
            money: `Оплата: ${money}`,
            amount: `Кількість кг: ${amount}`,
            comment: `Коментар: ${comment}`,
            date: `Дата ${date}`,
            time: `Час ${time}`,
        }
        myOrdersArr.push(myOrder);
        console.log (myOrdersArr);
        localStorage.setItem('order', JSON.stringify(myOrdersArr));
    }
    question()
}
function question() {
    let question = confirm('Дякую! Замовлення збережено!');
}
function error(value) {
    let error = value;
    alert(`Невірно введені дані (${error})`);
}

showCategories();

