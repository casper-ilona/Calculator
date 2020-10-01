import './index.css';

const btn = document.querySelectorAll('.button');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.forEach(function (elementButton) {
    elementButton.addEventListener('click', function () {
        
        let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
        document.body.style.backgroundColor = rndCol;
    });
});


// function random(number) {
//  return Math.floor(Math.random() * (number+1));
//  }
//
// btn.addEventListener('click',function () {
//     let rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//
// })


// function bgChange() {
//    let rndCol = 'rgb ('+ random(255) + ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//     btn.addEventListener('click',bgChange)
// }


// function random(number) {
//  return Math.floor(Math.random() * (number+1));
// }
//
// btn.onclick = function () {
//     const rndCol = 'rgb(' + random(255)+ ',' + random(255) + ',' + random(255) + ')';
//     document.body.style.backgroundColor = rndCol;
//
// }
//! устаревшая версия
