const navbar = document.getElementById('navbar')
const pixelScroll = '50'

window.addEventListener('scroll', function() {
    if(this.window.scrollY > pixelScroll) {
        navbar.classList.add('changeStyle')
    } else {
        navbar.classList.remove('changeStyle')
    }
})

document.querySelectorAll('[mr-nav]').forEach(link => {
    const conteudo = document.getElementById('main')
    

    link.onclick = function (e) {
        e.preventDefault()
        fetch(link.getAttribute('mr-nav'))
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
    }
})





