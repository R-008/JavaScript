'use strict';


const answers =[];
answers[0] = prompt('Как Ваше имя?', ''); // пустые ковычки для значения по умолчанию
answers[1] = prompt('Как Ваше фамилия?', ''); 
answers[2] = prompt('Сколько Вам лет?', ''); 

document.write(answers);

console.log(typeof(answers));
console.log(typeof(null)); // официально признанная ошибка

// alert('Привет Человеки)');

// const result =confirm(' Есть тут кто? =)');
// console.log(result);

// const answer = +prompt('Ты совершеннолетний?', '18');
// console.log(typeof(answer));
// console.log(answer + 5);


// let number = 5;
// const leftBorderWidth =1;

// number = 10;
// console.log(number);
// console.log(-4/0);
// console.log("строка"*8);

// const persone = 'Rafil';
// const bool = false;

// // console.log(fdgdgdfg);

// let und;
// console.log(und);

// const obj = {
//     firstName: "Джон",
//     lastName: "Уик",
//     age: "34",
//     isMarried: false

// };

// // console.log(obj.lastName);
// console.log(obj["age"]);

// let arr = ['plum.png','orange.jpg','beer.gif'];
// console.log(arr[2]);