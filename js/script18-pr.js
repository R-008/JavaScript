/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start () {
    numberOfFilms =  +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while( numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms =  +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prvat:false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >0) {
        console.log('Мало смотришь');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Ты хороший зритель');
    } else if(personalMovieDB.count >= 30){
        console.log('Да ты киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.prvat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
       const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
       personalMovieDB.genres[i - 1] = genre;
    }
    
    // let i =1;
    // while (i < 4) {
    //     const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    //     personalMovieDB.genres[i - 1] = genre;
    //     i++;
    //  }
}

writeYourGenres();