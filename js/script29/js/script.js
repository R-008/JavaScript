'use strict';

const box      = document.getElementById('box'),
      btns     = document.getElementsByTagName('button'),
      circles  = document.getElementsByClassName('circle'),
      wrapper  = document.querySelector('.wrapper'),
      hearts   = document.querySelectorAll('.heart'),
    //   hearts   = wrapper.querySelectorAll('.heart'), // можно указать определенный блок,
    //  внутри которого находится другой, а не весь документ
      oneHeart = document.querySelector('div');
     


box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText ='background-color: LimeGreen; width: 70%; opacity: 0.5;'; 
// box.style.cssText =`background-color: LimeGreen; width: 70%; opacity:num${};`;  // ${}


btns[1].style.color = 'red';
btns[2].style.borderRadius = '100%';

circles[0].style.border = '5px #121212 solid';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'LimeGreen';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);

// wrapper.append(div); // добавляет элемент в конец

// wrapper.appendChild(div); // устаревшее, добавляет элемент в конец внутри выбранного элемента 

wrapper.prepend(div); // добавляет элемент в начало внутри выбранного элемента

// hearts[0].before(div); // помещает перед элементом
// hearts[0].after(div);  // помещает после элемента

// wrapper.insertBefore(div, hearts[1]); // устаревшее - вставлять перед каким элементом

// circles[0].remove();   // удалет элемент
// wrapper.removeChild(hearts[0]);  // устаревшее(надо через родителя - неудобно)

// hearts[0].replaceWith(circles[0]); // меняет местами
// wrapper.replaceChild(circles[0], hearts[0]); // устаревшее (3 аргумента)

div.innerHTML = '<h1>Привет</h1>'; // передает и HTML-теги
// div.textContent = '<h1>Привет</h1>'; // передает только текст

div.insertAdjacentHTML('afterend', '<h2>Привет</h2>');//before