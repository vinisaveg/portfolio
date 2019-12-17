// Vanishing Scroll Icon when scrolling page

// Caching
const scroll_icon = document.querySelector('.scroll-icon')

const menu_icon = document.querySelector('.menu-icon')
const close_icon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')

const nav_links = document.querySelectorAll('.nav-link')

const message_form = document.querySelector('#contact-form')
const submit_button = document.querySelector('#contact-submit')
const error_span = document.querySelector('#error')

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

// Send Message Form

message_form.addEventListener('submit', (e) => {

    e.preventDefault()

    const user_name = document.querySelector('#user-name').value
    const user_email = document.querySelector('#user-email').value
    const user_message = document.querySelector('#message').value

    var data = {
        "name": user_name,
        "email": user_email,
        "message": user_message
    }

    userdata = JSON.stringify(data)

    var xmlhttp = new XMLHttpRequest()

    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 1){
            submit_button.value = 'Sending...'
    
        }

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

            var response = xmlhttp.response

            if(response == 'Sent'){
                submit_button.value = response

            }else{
                error_span.innerHTML = response
                submit_button.value = 'Send'

            }

        }
    }

    xmlhttp.open('POST', './php/contact.php', true)
    xmlhttp.setRequestHeader("Content-Type", "application/json", "Access-Control-Allow-Origin: *")
    xmlhttp.send(userdata)

})