

var typed = new Typed(".text", {
    strings: ["Mr Misael","Brandon", "Ronald", "Cristian", "Yarim", "Luis A", "Antonio", "Yael", "Alfred", "Alexa", "Jorge", "Carlos", "Angel", "Rebe", "Dariana"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    }
    else {
        toTop.classList.remove("active");
    }
})


