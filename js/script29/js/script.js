'use strict';

const box      = document.getElementById('box'),
      btns     = document.getElementsByTagName('button'),
      circles  = document.getElementsByClassName('circle'),
      hearts   = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('div');


box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText ='background-color: LimeGreen; width: 70%; opacity: 0.5;'; 
// box.style.cssText =`background-color: LimeGreen; width: 70%; opacity:num${};`;  // ${}


btns[1].style.color = 'red';
btns[2].style.borderRadius = '100%';

circles[0].style.border = '5px #121212 solid';

for (let i = 0; i < hearts.length; i++) {
    
}