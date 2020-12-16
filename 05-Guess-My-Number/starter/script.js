'use strict';

// document.querySelector('.message').textContent = 'Correct Number!';
// document.querySelector('.guess').value = 27;

// 1. Ortaya random sayı atayacağım.
// 2. Girilen sayının ortadakine göre durumunu belirleyeceğim.

// Random sayı oluştur.
let randSayi = Math.trunc(Math.random()*20)+1;
// Bu sayıyı ortaya yazdır.
document.querySelector('.number').textContent = randSayi;
//////////////////////////////// 1. Görev bitti. //////////////////////////////////////////////




// 2. Görev başladı.
// Butona basınca girilen sayıyı çek.
let numb;
let scores = 20;
 document.querySelector('.check').addEventListener('click',
    function(){
   numb =  Number(document.querySelector('.guess').value);

   if (!numb) {
     document.querySelector('.message').textContent = 'No answer!';
   } else if (numb > randSayi) {
     document.querySelector('.score').textContent = scores--;
     document.querySelector('.message').textContent = 'Too high';
   } else if (numb < randSayi) {
     document.querySelector('.score').textContent = scores--;
     document.querySelector('.message').textContent = 'Too Low';
   } else if (numb === randSayi) {
     document.querySelector('.message').textContent = 'CORRECT!';

     document.querySelector('body').style.backgroundColor = '#60b347';
   }
}
);

// Ortadaki sayıyla kıyasla
// if (girildi === 1) {
//   document.querySelector('.message').textContent = 'No input';
// }