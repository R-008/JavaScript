'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка на obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {     // создаем поверхностную копию
    let objCopy = {};

    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; // поверхностная копия, поэтому Х передается по ссылке

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add));

// 2й метод assign

const clone = Object.assign({}, add); // добавляет объект add к numbers

clone.d = 20;

console.log(add);
console.log(clone);

// 3й метод slice

const oldArray = ['a','b','c'];
const newArray = oldArray.slice(); // метод копирует массив oldArray

newArray[1] = 'ertthjjtdh';
console.log(newArray);
console.log(oldArray);

// 4й метод - оператор разварота

const video = ['youtube','vimeo','rutube'],
      blogs = ['wordpress','livejournal','blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b ,c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];
log(...num);

//в ES9 развертывание работает и для объектов

const array = ['a', 'b'];

const newAarray = [...array]; // создаем копию с массива с помощью спред-оператора


const q = {
    one:1,
    two:2
};

const newObj = {...q}; // создаем копию объекта


