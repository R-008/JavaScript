'use strict';

// let x = 5;

// console.log(x++); // сначало возвращает начальный вариант,
// а если ++ спереди, то сразу дает измененное значение (префиксная форма)


// console.log([] + false); // дает false
// console.log(typeof([] + false)); // тип строка (пустой массив как пустая строка '', 
// // поэтому приводится к строке)
// console.log([] + false - null); // NaN 

// x = [ ] + false - null + true ; // NaN
// console.log(x); 

// let y = 1; let x = y = 2; 
// console.log(x); 

// console.log([ ] + 1 + 2); // '12'

// console.log( "Ваня"[3] ); // я

// console.log(2 && 1 && null && 0 && undefined); // null

// И запинается на лжи
// Или запинается на правде

// console.log(!!( 1 && 2 ) === (1 && 2));

// console.log( null || 2 && 3 || 4 ); // cначало выполняется И - возвращает последнее 
// // значение =3

//  const a = [1, 2, 3];
//  const b = [1, 2, 3];
 
//  console.log(a == b); не равны

// console.log(typeof( +"Infinity" )); 

// console.log("Ёжик" > "яблоко"); 

console.log(0 || "" || 2 || undefined || true || falsе );