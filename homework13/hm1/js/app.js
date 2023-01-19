// Имеется текстовое поле на странице. При фокусировке на этом поле сбоку появляется <div> с информацией.
// При пропаже фокуса - <div> так же пропадает
'use strict';

const text = document.getElementById('text');
text.addEventListener('focus', addTextOnFocus);
text.addEventListener('blur', blurText);
const parent = document.getElementById('body');

function addTextOnFocus() {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'newText');
    newDiv.innerHTML = 'Enter your name!';
    parent.appendChild(newDiv);
}
function blurText() {
    document.getElementById('newText').remove();
}
