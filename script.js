'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtns = document.querySelector('.close-modal');
const openBtns = document.querySelectorAll('.show-modal');

function CloseBtn(){
    modal.classList.add('hidden')

    overlay.classList.add('hidden');
}
function OpenBtn(){
    modal.classList.remove('hidden')

    overlay.classList.remove('hidden');
}


for (let i = 0; i <openBtns.length; i++){

openBtns[i].addEventListener('click',OpenBtn)
}


closeBtns.addEventListener('click',CloseBtn)
overlay.addEventListener('click',CloseBtn)
document.addEventListener('keydown',function(e){
    
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        CloseBtn()
    }
})