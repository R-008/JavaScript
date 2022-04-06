/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    prvat:false,
    start: function() {
        personalMovieDB.count =  +prompt('Сколько фильмов Вы уже посмотрели?', '');
    
        while( personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count =  +prompt('Сколько фильмов Вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10 && personalMovieDB.count >0) {
            console.log('Мало смотришь');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Ты хороший зритель');
        } else if(personalMovieDB.count >= 30){
            console.log('Да ты киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
         if (personalMovieDB.prvat) { // если true, то...
            personalMovieDB.prvat = false; // переключаем на false
        } else { // иначе переключаем в true
            personalMovieDB.prvat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i < 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');

            // if (genre === '' || genre == null) {
            //     console.log('Операция не поддерживается');
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }

            let genre = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

            if (genre === '' || genre == null) {
                console.log('Операция не поддерживается');
                i--;
            } else {
                personalMovieDB.genres = genre.split(', ');
                personalMovieDB.genres.sort();
            }            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
