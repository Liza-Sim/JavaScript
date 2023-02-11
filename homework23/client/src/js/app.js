import '../scss/styles.scss';


import { createCheckoutForm, createElement, createProductCard, updateProductPrice} from './helpers/domHelpers.js';
import {API_CATEGORIES_LIST, API_PRODUCTS_BY_CATEGORY_ID} from './urls.js';

let productsArr = [];
let currentProduct = {};
let index = 0;
let sizeBurger = '';
let toppingPrice = 0;
let toppingCurrent;
export { index, sizeBurger, toppingPrice, toppingCurrent };

class Price {
  constructor (topping, size) {
    this.burgerSize = size;
    this.burgerTopping = topping;
  }
  calculator() {
    return this.burgerSize + this.burgerTopping;
  }
}
const changeSizeHandler = function(event) {
  const size = event.target.value; //
  if (size === 'big') {
    currentProduct.updatedPrice = currentProduct.price * 1.2;
    sizeBurger = 'big';
  } else {
    currentProduct.updatedPrice = currentProduct.price;
    sizeBurger = 'small';
  }
  let price = currentProduct.updatedPrice + toppingPrice;
  updateProductPrice(price);
}
const changeToppingHandler = function(event) {
  const toppingName = event.target.value;
    const topping = currentProduct.available_toppings.find(topping => topping.name === toppingName);
    const calcToppingPrice = new Price(topping.price, currentProduct.updatedPrice);
    toppingPrice = topping.price;
    toppingCurrent = topping.name;
    updateProductPrice(calcToppingPrice.calculator());
}
const clickBuyHandler = function(event) {
  const productId = event.target.getAttribute('data-product-id');
  currentProduct = productsArr.find(product => product.id === productId);
  index = productId;
  currentProduct.updatedPrice = currentProduct.price;
  createCheckoutForm(currentProduct, changeSizeHandler, changeToppingHandler);
}
const menuItemClickHandler = function (event) {
  const currentId = event.target.getAttribute('data-menu-item');
    fetch(API_PRODUCTS_BY_CATEGORY_ID.replace(':category', currentId))
    .then(res => res.json())
    .then(products => {
      productsArr = products;
      document.querySelector('#content').innerHTML = '';
      for(let product of products) {
        createProductCard(product, clickBuyHandler);
      }
    })
}
// onload:
fetch(API_CATEGORIES_LIST)
  .then(res => res.json())
  .then(categories => {

    for(let category of categories) {
      createElement(
        'li',
        category.name, 
        {
          'data-menu-item': category.id
        },
        {
          click: menuItemClickHandler
        },
        '#menu ul'
      );
    }
  })

