'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Helo');
    }
};


const John = Object.create(soldier); // создается прототипная связь

// const John = {
//     health: 100
// };

// устаревший формат

// John.__proto__ = soldier; // не используется

// современный формат

// Object.setPrototypeOf(John, soldier); // создается прототипная связь

// console.log(John.armor);

John.sayHello();