import { index, sizeBurger, toppingCurrent } from '../app'
import '../../scss/styles.scss';
import { API_ORDERS } from '../urls.js';

export function createElement(tagName, content, attributes, eventHandlers, parent) {
  const parentElem = 
    typeof parent === 'string' ?
      document.querySelector(parent) :
      parent;
  const element = document.createElement(tagName);
  element.textContent = content;

  if (attributes && Object.keys(attributes).length > 0) {
    for (let key in attributes) {
      if (key === 'className') {
        element.setAttribute('class', attributes[key]);
      } else {
        element.setAttribute(key, attributes[key]);
      }
    }
  }

  if (eventHandlers && Object.keys(eventHandlers).length > 0) {
    for (let eventNameKey in eventHandlers) {
      element.addEventListener(eventNameKey, eventHandlers[eventNameKey]);
    }
  }

  parentElem.appendChild(element);
  return element;
}

export function createProductCard(product, buyClickHandler) {
  const parentElem = createElement('div', '', {className: 'product_card'}, null, '#content');
  createElement('h3', product.name, null, null, parentElem);
  createElement('p', `UAH ${product.price}`, null, null, parentElem);
  createElement(
    'input',
    '',
    {
      type: 'button',
      value: 'Buy',
      'data-product-id': product.id,
    },
    {click: buyClickHandler},
    parentElem
  );
}

export function createCheckoutForm(product, changeSizeHandler, changeToppingHandler) {
  document.querySelector('#modal_details').innerHTML = '';
  document.querySelector('#modal_price').innerHTML = '';
  updateProductPrice(product.price);
  

  createElement('p', product.name, null, null, '#modal_details');

  const sizeP = createElement('p', '', null, null, '#modal_details');
  createElement('h4', 'Size:', null, null, sizeP);
  // Radio "small"
  createElement(
    'input',
    '',
    { type: 'radio', name: 'size', value: 'small', checked: 'checked' },
    { change: changeSizeHandler },
    sizeP
  );
  createElement('span', 'Small', null, null, sizeP);
  
  // Radio "big"
  createElement(
    'input',
    '',
    { type: 'radio', name: 'size', value: 'big' },
    { change: changeSizeHandler },
    sizeP
  );
  createElement('span', 'Big', null, null, sizeP);

  const toppingsP = createElement('p', '', null, null, '#modal_details');
  createElement('h4', 'Toppings:', null, null, toppingsP);

  for(let topping of product.available_toppings) {
    const p = createElement('p', '', null, null, toppingsP);
    createElement('input', '', { type: 'radio', name: 'toppings', value: topping.name }, {change: changeToppingHandler}, p);
    createElement('span', `${topping.name} UAH ${topping.price}`, null, null, p)
  }
  const buttonsP = createElement('p', '', null, null, '#modal_details');
  createElement('input', '', { type: 'text', name: 'client_name', id: 'client_name', placeholder: 'Enter your name'}, null, buttonsP);
  createElement('input', '', {type: 'button', value: 'Order'}, {click: sendingOrder}, buttonsP);
}

let price; // eslint-disable-line
export function updateProductPrice(newPrice) {
  price = newPrice;
  document.querySelector('#modal_price').innerHTML = '';
  createElement('span', `UAH ${newPrice}`, { id: 'price' }, null, '#modal_price');
}

function sendingOrder() {
  const name = document.getElementById('client_name');
  if (nameValidator()) {
    const order =
    {
      name: name.value,
      product: index,
      size: sizeBurger || 'small',
      topping: toppingCurrent || 'not topping',
      price: price,
    }

    fetch(API_ORDERS, {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(order)
    })
      .then(() => {
        document.querySelector('#content').innerHTML = '';
        document.querySelector('#modal_details').innerHTML = '';
        document.querySelector('#modal_price').innerHTML = '';
      alert('Thank you for the order!')
    })

    fetch(API_ORDERS)
      .then(res => res.json())
      .then(res => {console.log(res)});
  }
}
function nameValidator() {
  const input = document.getElementById('client_name');
  const name = document.getElementById('client_name').value;
  const pattern = /[A-Z][a-z]/;
  const result = name.match(pattern);
  if (result) {
    return true;
  } else {
    input.classList.add('red')
    return false;
  }
}