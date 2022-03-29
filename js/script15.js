/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


'use strict';

const numberOfFilms =  +prompt('Сколько фильмов Вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prvat:false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?',''),
//       a1 = prompt('Один из последних просмотренных фильмов?', ''),
//       b1 = prompt('На сколько оцените его?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[a1] = b1;

// console.log(personalMovieDB);

for(let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?','');

     if(a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Все супер!');
     } else {
         console.log('Ошибка');
         i--;

     }  
}

// let i = 0;
// while( i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?','');

//      if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Все супер!');
//      } else {
//          console.log('Ошибка');
//          i--;

//      }  
//      i++;
// }

// let i = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?','');

//      if(a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Все супер!');
//      } else {
//          console.log('Ошибка');
//          i--;

//      }  
//      i++;
// }
// while( i < 2);


if (personalMovieDB.count < 10 && personalMovieDB.count >0) {
    console.log('Мало смотришь');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Ты хороший зритель');
} else if(personalMovieDB.count >= 30){
    console.log('Да ты киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);