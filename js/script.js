'use strict';

console.log('arr' + ' - object');
console.log(4 + +'5');// унарный + пред строкой

let incr = 10,
    decr = 10;

// incr++;//++incr; + перд это префиксная
// decr--;//--incr; после это постфиксная



console.log(incr++, decr--);
console.log(++incr, --decr);

console.log(5%2);// показывает остаток оставшийся от деления

console.log(2*4 == '8');// сравнивает только по значению, а не по типу

console.log(2*4 === '8');// строгое равеноство, и по значению и по типу

console.log(2*4 === 8); // тип и значение совпадют (число 8= числу 8)

const IsChecked = true,
      IsClose = false;
console.log(IsChecked && IsClose); // оператор И
console.log(IsChecked || IsClose); // оператор ИЛИ

const IsCheckeds = false,
      IsCloses = false;
console.log(IsCheckeds || !IsCloses); // оператор отрицания НЕ !

console.log(2 + 2 * 2 === 8); // сначало * (6 не равен 8)
console.log(2 + 2 * 2 != '6'); // 6=6 поэтому false
console.log(2 + 2 * 2 !== '6'); // строго, число не равно строке