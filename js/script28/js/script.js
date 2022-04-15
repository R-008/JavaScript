'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // можно сразу ('button')[0];
console.log(btns[0]); // только при вызове

// если только 1 элемент на странице, то все равно надо обращаться по номеру 
// элемента так как это массив

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);