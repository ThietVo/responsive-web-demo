const moblieNav = document.querySelector('.moblie-nav')
const modal = document.querySelector('.modal')
const body = document.querySelector('body')

moblieNav.addEventListener('click', function(e) {
    modal.style.display = 'block';
    body.style.overflow  = 'hidden';
})

const modalClose = document.querySelector('.modal-close')

modalClose.addEventListener('click', function(e) {
    modal.style.display = 'none';
    body.style.overflow  = 'auto';
})  