'use strict';

const showModal = document.querySelectorAll('.show-modal');
showModal.addEventListener('click', function(){
  document.querySelector('.hidden').style.display = 'grid';
});

for (let i = 0; i<3; i++)
  showModal[i];