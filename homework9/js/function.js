let products = [
  {
    name: 'AKM',
    price: 700,
  },
  {
    name: 'AR-15',
    price: 1500,
  },
  {
    name: 'Savage 110',
    price: 500,
  },
  {
    name: 'Mossberg 500',
    price: 1000
  },
  {
    name: 'Glock 17',
    price: 600,
  },
];

products.push({ name: 'iPhone', price: 1000 });

const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;
let productNumber;
let selectedProduct;
let amount;
let finalPrice;
let superFinalPrice;
let continuedShoppingQuestion;


function showProducts() {
  // Show products
  for (let i = 0; i < products.length; i++) {
    console.log(`#${(i+1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
  }
}
function getProductNumber() {
    do {
        productNumber = prompt('Enter the product you wanna buy:');
        productNumber--;
    } while (productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
    selectedProduct = products[productNumber];
}

function numberOfGoods() {
    do {
        amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
    } while (amount <= 0 || isNaN(amount));
}

function calculateTheInitialPrice() {
    finalPrice = selectedProduct.price * amount;
}
function checkIfDiscountNeeded() {
    if (finalPrice * EXCHANGE > DISCOUNT_STARTS_FROM) {
        superFinalPrice = finalPrice - finalPrice * DISCOUNT;
    }
}
function outputOfThePriceToTheBuyer() {
    if (finalPrice * EXCHANGE < DISCOUNT_STARTS_FROM) {
        console.log('The price is $' + finalPrice);
    } else {
        console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
        console.log('Please pay $' + superFinalPrice);
    }
} 
function continuedShopping() { 
  if (continuedShoppingQuestion === true) {
    showProducts();
    getProductNumber();
    numberOfGoods();
    calculateTheInitialPrice();
    checkIfDiscountNeeded();
    outputOfThePriceToTheBuyer();
  } else {
    console.log('Thanks for the answer! Have a good day!')
  }
}
function continuationCycle() {
  do {
    continuedShoppingQuestion = confirm('Do you want to continue shopping?');
    continuedShopping();
  } while (continuedShoppingQuestion);
}



showProducts();
getProductNumber();
numberOfGoods();
calculateTheInitialPrice();
checkIfDiscountNeeded();
outputOfThePriceToTheBuyer();
continuationCycle();


    

