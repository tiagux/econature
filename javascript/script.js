const linksinternos = document.querySelectorAll('nav a[href^="#"]')
console.log(linksinternos)

function navLink(evento) {
    evento.preventDefault()
    const href = evento.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const topo = section.offsetTop

    window.scrollTo({
        top: topo,
        behavior: 'smooth',
    })
}

linksinternos.forEach((link) => {
    link.addEventListener('click', navLink)
})