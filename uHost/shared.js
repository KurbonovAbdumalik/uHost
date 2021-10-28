const backdrop = document.querySelector('.backdrop')
const planBtn = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelectorAll('.modal button')
const mobileNav = document.querySelector('.mobile')
const mobileBtn = document.querySelector('.toggle-button')

for (let i = 0; i < planBtn.length; i++) {
    planBtn[i].addEventListener('click', close)
}

for (let i = 0; i < planBtn.length; i++) {
    planBtn[i].addEventListener('click', block)
}


for (let i =0; i < modalBtn.length; i++) {
    modalBtn[i].addEventListener('click', close)
}

backdrop.addEventListener('click', close)

mobileBtn.addEventListener('click', block)

function block() {
    backdrop.style.display = 'block'
    modal.style.display = 'block'
    mobileNav.style.display = 'block' 
}

function close() {
    backdrop.style.display ='none'
    mobileNav.style.display = 'none'
}