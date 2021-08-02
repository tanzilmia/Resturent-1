// ============show menu=============

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

        //   conditon cheking 

        if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('shwo-menu')
            })
        }
}

showMenu('nav-toggle','nav-menu')

// remove mneu ============

const navLink = document.querySelectorAll('.nav__link')

function linckAction () {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('shwo-menu')
}
navLink.forEach(n => n.addEventListener('click',linckAction))



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


//  change backgound header 

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



// =================DARK LIGHT THEME----------
const themButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// previously selected topic ( if user selected )
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark theme 
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
// dark icons
const getCurrentIcon = () => themButton.classList.contains(iconTheme)? 'bx-moon' : 'bx-sun'

// we validet if the user previously cross the topic
if(selectedTheme){
    //  if the validation is fulfilled, we ask what the issue was to know if we active the 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);

}
// Active the theme manually with the button
themButton.addEventListener('click',()=>{
    document.body.classList.toggle(darkTheme)
    themButton.classList.toggle(iconTheme)
    // 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())


});

// scroll reveal animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
sr.reveal(`.home__data, .home__img, .about__data, .about__img, .services__content, .menu__content, .app__data, .app__img, .contact__data, .contact__button, .footer__content`,{
    interval:200
})


























































