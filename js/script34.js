'use strict';

// touchstart - событие при касании
// touchmove
// touchend
// touchenter - когда палец наезжает на элемент
// touchleave
// touchcancel - прерываеие касания

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Касание');
        console.log(e.targetTouches);
    });
    
    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();

        console.log('Отрыв');
    });
});

// touches
// targetTouches
// changetTouches