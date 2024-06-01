window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let container = document.getElementById('container');
    let containerRect = container.getBoundingClientRect();

    if (containerRect.top <= 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');  
    }
});
window.addEventListener('scroll', function() {
    let button = document.getElementById('get-started');
    let container = document.getElementById('container');
    let containerRect = container.getBoundingClientRect();

    if (containerRect.top <= 0) {
        button.classList.add('scrolled');
    } else {
        button.classList.remove('scrolled'); 
    }
});
