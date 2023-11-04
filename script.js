const menu = document.getElementById('menu')
const nav = document.querySelector('header nav')

menu.addEventListener('click' , () => {

    if(nav.style.display === 'none'){
        nav.style.display =' flex'
        menu.setAttribute('src' ,'img/icon-close.png')
    }

    else{
        nav.style.display = 'none'
        menu.setAttribute('src' ,'img/icon-hamburger.png')
    }
})