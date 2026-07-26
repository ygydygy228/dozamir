const openBtn = document.getElementById('authButton');
const overlay = document.getElementById('regOverlay');
const closeBtn = document.getElementById('regClose');



openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
});
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
});
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none'
    }
});

//function headBtnActivate(headBtn) {
   // headBtn.style.color = '#333';
  //  headBtn.style.borderBottom = '2px solid #8b45e0';
   // headBtn.style.paddingBottom = '10px'; 
//};

const headBtns = document.querySelectorAll('.golova__list a');

headBtns.forEach(headBtn => {
    headBtn.addEventListener('click',() => {
        headBtns.forEach(otherBtn => {
            otherBtn.classList.remove('active')
        })
        headBtn.classList.toggle('active')
    })
});
