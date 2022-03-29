'use strict';

if (4) {
    console.log('Ok!');
} else {
    console.log('Error');
}


const num = 50;
// if(num < 49) {
//     console.log('Error');
// } else if(num > 100) {
//     console.log('Многовато');
// } else {
//     console.log('Всё гуд типа =)');
// }

// (num === 50) ? console.log('Если выражение верно') : console.log('Если не верно');

switch(num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
            console.log('Неверно');
            break;
    case 50:
        console.log('Верно');
        break;
    default:
        console.log('Ни одно условие не подошло');
        break;
}