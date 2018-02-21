// header.js

// 可直接刪除
$('header').load('index.html header');
$('footer').load('index.html footer');
// end

// 手機版展開選單
$(window).bind("load", function() {

    $('.menu-btn').click(function() {
        $(this).find('svg').toggleClass('active-menu');
        $('.menu').slideToggle('fast');
    })

});

// faq.js

$('.faq-nav li.active').click(function() {
    event.preventDefault();
    $(this).siblings().slideToggle();

})
$('.faq-q').each(function() {
    $(this).click(function() {
        $(this).siblings('.faq-a').slideToggle();
    })
});


// 精選逛品牌品牌選擇

// 假資料 之後改用ajaxload

var brandlist = [{
    brandName: '點點心',
    brandLogo: 'Content/img/logo.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/123.mp4',
        'Content/img/brand-img2.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img2.png'
    ]
}, {
    brandName: 'LA BELLE',
    brandLogo: 'Content/img/logo-2.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: 'Rocky Mountain',
    brandLogo: 'Content/img/logo-3.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png'
    ]
}, {
    brandName: 'Pa',
    brandLogo: 'Content/img/logo-4.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png'
    ]
}, {
    brandName: 'adidas',
    brandLogo: 'Content/img/logo-5.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img4.png',
        'Content/img/brand-img4.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-6.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-7.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-8.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-9.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品6',
    brandLogo: 'Content/img/logo-6.png',
    brandLink: 'shop.html',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}];
// load 資料
var brand = document.querySelectorAll('.brand-slick li');

for (var i = 0; i < brand.length; i++) {
    
    brand[i].innerHTML = '<img src="' + brandlist[i].brandLogo + '" alt="' + brandlist[i].brandName + '" class="img-fluid ">';
    brand[i].addEventListener('click', brandSelect, false);

}

// 切換選擇的圖片
function brandSelect() {
    var index = $(this).index();
    var brandItems = document.querySelectorAll('.brand-items li');

    for (var a = 0; a < brandItems.length; a++) {
        var bImg = brandlist[index].shopBanner[a];
        var bLink = brandlist[index].brandLink;
        var type = bImg.split(".")[1];
        var videoType = "mp4" || "mpeg" || "flv" || "3gp";
        
        if (type == videoType) {
          brandItems[a].innerHTML = '<a href="' + bLink + '"><video src="' + bImg + '" alt="" loop autoplay muted playsinline></a>';
        } else {
          brandItems[a].innerHTML = '<a href="' + bLink + '"><img src="' + bImg + '" alt="" class="img-fluid "></a>';
        }
        
    }
};

// 數字增減


(function() {

    window.inputNumber = function(el) {

        var min = el.attr('min') || false;
        var max = el.attr('max') || false;

        var els = {};

        els.dec = el.prev();
        els.inc = el.next();

        el.each(function() {
            init($(this));
        });

        function init(el) {

            els.dec.on('click', decrement);
            els.inc.on('click', increment);

            function decrement() {
                var value = el[0].value;
                value--;
                if (!min || value >= min) {
                    el[0].value = value;
                }
            }

            function increment() {
                var value = el[0].value;
                value++;
                if (!max || value <= max) {
                    el[0].value = value++;
                }
            }
        }
    }
})();