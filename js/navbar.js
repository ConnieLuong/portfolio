$(document).ready(function(){
    // Toggle open and close nav styles on click
    $('.nav-mobile').click(function() {
        $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.nav-mobile').on('click', function() {
        this.classList.toggle('active');
    });
    
});