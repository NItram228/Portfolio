$(document).ready(function() {
    $('.block-title').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    })  
    $('.block-item').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    })
    $('.block-social-icon').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    })
    $('.number').click(function(event){
        $(this).toggleClass('active').next().slideToggle(300);
    })
})