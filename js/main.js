// Vanishing Scroll Icon when scrolling page

// Caching
const scroll_icon = document.querySelector('.scroll-icon')

const menu_icon = document.querySelector('.menu-icon')
const close_icon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

const nav_links = document.querySelectorAll('.nav-link')

// Scroll Icon
window.onscroll = () =>{

    scroll_icon.style.opacity = 0

}

// Responsive navbar Toggle
// Open
menu_icon.addEventListener('click', () =>{

    nav.classList.toggle('nav-closed')

})

// Close
close_icon.addEventListener('click', () =>{

    nav.classList.toggle('nav-closed')

})

// navbar links 

nav_links.forEach((link) => {

    link.addEventListener('click', () => {

        console.log('link')
        nav.classList.toggle('nav-closed')

    })

})