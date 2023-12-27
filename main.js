// typing text
var typed= new Typed(".text", {
    strings:["Student From Universitas Pasundan"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});