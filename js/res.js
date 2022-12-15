/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll Reveal Animation 
const sr = ScrollReveal({
    origin: 'top' ,
    distance: '80px' ,
    duration: 2000 ,
    reset: true
})
// ScrollHome
sr.reveal('.home-title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home-img', {delay:400})
sr.reveal('.home-social-icon', {interval:400})
// ScrollAbout
sr.reveal('.about-img', {})
sr.reveal('.about-subtitle', {delay: 200})
sr.reveal('.about-text', {delay: 400})
// ScrollSkills
sr.reveal('.skills-subtitle', {})
sr.reveal('.skills-text', {delay: 200})
sr.reveal('.skills-date', {interval: 200})
sr.reveal('.skills-img', {delay: 400})
// ScrollWork
sr.reveal('.work-img', {interval: 200})
// ScrollContact
sr.reveal('.contact-input', {interval: 200})
