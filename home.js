$('.navbar-nav a').click(function(){
    $('#nav a').css('text-decoration', 'none', function(){
        $(this).css('text-decoration', 'underline');
    });
    return;
});