'use strict'

function showCategories() {
    const container = document.querySelector('.categories');
    for (let i = 0; i < list.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = list[i].name;
        elem.setAttribute('list-category', i);
        elem.addEventListener('click', showProduct);
        container.appendChild(elem);
    };
};
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
    price.textContent = list[categoryIndex].products[productIndex].price + ' грн за кг';
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
    legend.innerHTML = 'Коментар до замовлення:';
    const comment = document.createElement('input');
    comment.setAttribute('type',"text");
    comment.setAttribute('name', "comment");
    comment.setAttribute('class', "comment");
    comment.setAttribute('placeholder',"Коментар до замовлення!");
    fieldset.appendChild(comment);
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
    const name = verificationName();
    const city = verificationCity();
    const postOffice = verificationPostOffice();
    const money = verificationMoney();
    const amount = verificationAmount();
    const comment = verificationComment();
    const product = document.getElementById('purchaseProduct');
    const price = document.getElementById('priceProduct');
    const details = document.getElementById('detailsProduct');
    if (name !== false && city !== false && postOffice !== false && money !== false && amount !== false) { 
        
        document.write('Дякую за замовлення!', '<br/>');
        document.write('Інформація про товар: ', '<br/>');
        document.write('Товар - ', product.textContent, '<br/>');
        document.write('Ціна - ', price.textContent, '<br/>');
        document.write('Опис товару - ', details.textContent, '<br/>');
        document.write('<br/>');
        document.write('Дані для відправки: ', '<br/>');
        document.write('Ім\'я: ', name, '<br/>');
        document.write('Місто: ', city, '<br/>');
        document.write('Номер відділення: ', postOffice, '<br/>');
        document.write('Оплата: ', money, '<br/>');
        document.write('Кількість кг: ', amount, '<br/>');
        document.write('Коментар: ', comment, '<br/>'); 
    } 
}
function error(value) {
    let error = value;
    alert(`Невірно введені дані (${error})`);
}

showCategories();

