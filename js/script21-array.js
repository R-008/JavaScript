'use strict';

const arr = [1,23,14,6,8];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// console.log(arr.length); // показывает последний индекс+1
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// arr.pop(); // удаляет последний элемент массива
// arr.push(10); // Добавляем элемент в конце

// console.log(arr);

// for (let i = 0; i< arr.length; i++) { // обычный цикл
//     console.log(arr[i]);
// }

// for (let value of arr) { // c помощью for of
//     console.log(value);
// }

// const str = prompt('','');
// const products = str.split(', '); // строку разбиваем на массив
// // console.log(products);
// products.sort();
// console.log(products.join('; ')); // склеиваем массив в строку
