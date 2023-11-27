const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav__link')
const burger = document.querySelector('.nav__burger')

const showMenu = () => {
	nav.classList.toggle('active')
}

navLinks.forEach(link => {
	link.addEventListener('click', showMenu)
})
burger.addEventListener('click', showMenu)
