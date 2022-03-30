'use strict';

// function showFirstMessage() {
//     console.log('Hello World!');
// }

// showFirstMessage();


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10; //  в консоле выведет 20, потому что не видит локальную переменную
                  //  но если написать num = 10, без let - то перезапишется значение
    console.log(num);

    //Замыкание - сама функция вместе со всеми переменными, которые ей доступны
}

showFirstMessage('Hello World!');
console.log(num);

function calc(a, b) {
    return(a + b);
    // console.log('jhkj'); // после ретурна код никогда не выполнится
}

console.log(calc(3, 4));
console.log(calc(5, 6));
console.log(calc(13, 2));

function ret() { // function declaration - существует до того как объявлена, как и var
                 // можно вызывать вне зависимости от положения в коде
    let num = 50; // локальная переменная
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { // function expression - выполняется только когда
    console.log('Hello!');  // доходит очередь
};

logger();

const calc1 = (a, b) => { // стрелочная функция
    console.log(1);
    return a + b;
}; 

console.log(calc1(8,5));