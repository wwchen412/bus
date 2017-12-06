// header.js
$('header').load('index.html header');
$('footer').load('index.html footer');
// faq.js
$('.faq-q').each(function() {
    $(this).click(function() {

        $(this).siblings('.faq-a').slideToggle();
    })
});
// 精選逛品牌品牌選擇

// 假資料
var brandlist = [{
    brandName: '點點心',
    brandLogo: 'Content/img/logo.png',
    shopBanner: [
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img2.png'
    ]
}, {
    brandName: 'LA BELLE',
    brandLogo: 'Content/img/logo-2.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: 'Rocky Mountain',
    brandLogo: 'Content/img/logo-3.png',
    shopBanner: [
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png',
        'Content/img/brand-img2.png'
    ]
}, {
    brandName: 'Pa',
    brandLogo: 'Content/img/logo-4.png',
    shopBanner: [
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png',
        'Content/img/brand-img3.png'
    ]
}, {
    brandName: 'adidas',
    brandLogo: 'Content/img/logo-5.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img4.png',
        'Content/img/brand-img4.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-6.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-7.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-8.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-9.png',
    shopBanner: [
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png',
        'Content/img/brand-img.png'
    ]
}, {
    brandName: '無印良品',
    brandLogo: 'Content/img/logo-8.png',
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
    brand[i].setAttribute('alt', brandlist[i].brandName);
    brand[i].innerHTML = '<img src="' + brandlist[i].brandLogo + '" alt="" class="img-fluid ">';
    brand[i].addEventListener('click', brandSelect, false);

}

// 切換選擇的圖片
function brandSelect() {
    var index = $(this).index();
    var brandItems = document.querySelectorAll('.brand-items li');

    for (var a = 0; a < brandItems.length; a++) {
        var bImg = brandlist[index].shopBanner[a];

        brandItems[a].innerHTML = '<img src="' + bImg + '" alt="" class="img-fluid ">';
    }
};