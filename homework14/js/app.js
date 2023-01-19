function showCategories() {
    const container = document.querySelector('.categories');
    for (let i = 0; i < list.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = list[i].name;
        elem.setAttribute('list-category', i)
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
        elem.setAttribute('list-product', i)
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
    details.appendChild(name);
    const price = document.createElement('div');
    price.textContent = list[categoryIndex].products[productIndex].price + ' грн за кг';
    details.appendChild(price);
    const inform = document.createElement('div');
    inform.textContent = list[categoryIndex].products[productIndex].description;
    details.appendChild(inform);
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Купити';
    details.appendChild(button);
    button.addEventListener('click', clickButton);
}
function clickButton() {
    const body = document.getElementById('body');
    const elem = document.createElement('div');
    elem.setAttribute('id', 'gratitude');
    elem.innerHTML = 'Товар куплений! Дякую за замовлення!';
    body.appendChild(elem);
    document.querySelector('.products').innerHTML = '';
    document.querySelector('.details').innerHTML = '';
    document.querySelector('.categories').addEventListener('click', closeGratitude);
}
function closeGratitude() {
    document.getElementById('gratitude').innerHTML = '';
}
showCategories();