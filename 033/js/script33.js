/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', () => { // только после загрузки 
    // дом стркутуры начнут работать скрипты

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList =  document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), // получаем форму с классом .add
          addInput = addForm.querySelector('.adding__input'), // инпут
          checkbox = addForm.querySelector('[type="checkbox"]'); // чекбокс по атрибуту
    
    addForm.addEventListener('submit', (event) => { // навешивем событие на форму
        event.preventDefault(); // отменяем стандартное поведение браузера

        let newFilm = addInput.value;// записываем данные введенные в инпут
        const favorite = checkbox.checked; // полчаем Bool значение чекбокса

        if (newFilm) { // полвеока не пустая ли строка, она даcт false
            if (newFilm.length > 21) { // если > 21 символа, то...
                newFilm = `${newFilm.substring(0, 22)}...`; // вырезаем с 0 по 22 бкувы не включительно и + ...
            }

            if (favorite) { // если чексбокс отмечен = true, то ...
                console.log('Добавляем любимый фильм'); 
            }
            movieDB.movies.push(newFilm); // записывам(пушим) введнные данные в массив
            sortArr(movieDB.movies); // сортируем данные по алфавиту в массиве

            createMovieList(movieDB.movies, movieList); // создаетм список по новой
        }

        event.target.reset(); // сбрасываем форму
    });
    
    const deleteAdv = (arr) => { // ф.удаляет рекламу
        arr.forEach(item => {
            item.remove();
        });
    };
 
    // adv.forEach (function (item) {
    //     item.remove();
    // });
    
    const makeChanges = () => { // ф.изменения надписи и фона

        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr =(arr) => { // ф.сортировки
        arr.sort();
    };

    function createMovieList(films, parent) { // ф.добавления введенного фильма в список

        parent.innerHTML = '';
        sortArr(films); // сортируем при каждом вызове функции
        
        // console.log(poster.innerHTML);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => { //перебираем все корзинки
            // btn - кнопка, i - нумерация
            btn.addEventListener('click', () => {// обращаемся к каждой корзинке на событие клик
                btn.parentElement.remove();// удаляем родительский элемент
                movieDB.movies.splice(i, 1);// вырезаем из массива

                createMovieList(films, parent);// вызываем чтобы список (нумерация) перестраивалась
            });
        });
    }
    deleteAdv(adv); // вызываем функции
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});