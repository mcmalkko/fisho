
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    var body = document.body;

    menuToggle.addEventListener('click', function() {
        nav.style.left = '0';
        body.classList.add('menu-open');
        body.style.overflow = 'hidden';
    });

    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && !event.target.matches('#menuToggle')) {
            nav.style.left = '-250px';
            body.classList.remove('menu-open');
            body.style.overflow = 'auto';
        }
    });
});
