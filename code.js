const openBtn = document.getElementById('authButton')
const overlay = document.getElementById('regOverlay')
const closeBtn = document.getElementById('regClose')

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'
})
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none'
})
overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none'
    }

})