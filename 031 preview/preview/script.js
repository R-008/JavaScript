'use strict';

// const btn = document.querySelector('button'),
const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Пример');
// };

// btn.onclick = function() {
//     alert(' 2ой пример');
// };  // будет выводится только 2ое событие это минус

// btn.addEventListener('click', ()=> {
//     alert('Правильный Пример');
// });

// btn.addEventListener('click', ()=> {
//     alert('2ой клик');
// });

// btn.addEventListener('mouseenter', (e)=> {
//     console.log(e.target);
//     e.target.remove(); // удаляет объект со страницы
//     console.log('Действие при каждом наведении');
// });

// let i = 0;
// const deleteElement = (e)=> {
//         console.log(e.target);
//         i++;
//         if (i == 3) {
//             btn.removeEventListener('click', deleteElement); // удаляем
//         }
// };

// btn.addEventListener('click', deleteElement); // назначаем обработчик события

const deleteElement = (e)=> {
             console.log(e.target);
             console.log(e.type);

};

// btn.addEventListener('click', deleteElement); // назначаем обработчик события
// overlay.addEventListener('click', deleteElement); // назначаем обработчик события

btn.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // {once: true} - если
    // надо чтобы выполнилось только 1 раз
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault(); // отменяем стандартное поведение браузера

    console.log(event.target);
});