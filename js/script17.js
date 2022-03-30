'use strict';

const str = 'test';
const arr = [1, 2 ,4];

console.log(arr.length);
console.log(str.length);
console.log(str[2]);

console.log(str);
console.log(str.toUpperCase());

const fruit = 'Some fruit';
console.log(fruit.lastIndexOf('fruit'));// поиск подсктроки

const logg = 'Hello world';
console.log(logg.slice(6, 11));// 2й аргумент до позиции, но не включительно
console.log(logg.slice(6)); // указываем только начало, вырежет до конца
console.log(logg.slice(-5, -1)); // "-" считает справа

console.log(logg.substring(6, 11));  // работает так же как slice,
                                     // но не поддерживает "-" значения

console.log(logg.substr(6, 5));// начинаем с позиции и сколько символов вырезать

// работа с числами

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));