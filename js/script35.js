'use strict';

const p = document.querySelectorAll('p');
console.log(p);

function loadScript(src) {
    const script = document.createElement('script');
    script.async = false; // выключаем async
    script.src = src; // при такой загрузке будет как async
    document.body.append(script);
}

loadScript('js/test35.js');
loadScript('js/some35.js');