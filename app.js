$(document).ready( () => {
    $('.navbar .navbar-nav a').on('click', function() { 
        $('.navbar .navbar-nav').find('li.active').removeClass('active'); 
        $(this).parent().addClass('active');
        console.log("Hello");
    });
})
