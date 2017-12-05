// header.js
$('header').load('index.html header');

// faq.js
$('.faq-q').each(function() {
    $(this).click(function() {

        $(this).siblings('.faq-a').slideToggle();
    })
})