$(function ($) {
  $('.bg-switcher').bgSwitcher({
    images: ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'],
    interval: 4000,
    loop: true,
    shuffle: false
  });

  $('.fadein').on('click', function () {
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateX(0)');
    }
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '20%',
  });

  $('.slider').on('mouseover', function(e) {
    $slide.slick('slickPause');
})
.on('mouseout', function(e) {
    $slide.slick('slickPlay');  // 自動切り替え再開
});

  $('.more-btn').on('click', function () {
    if ($('.open-box').is(':hidden')) {
      $('.open-box').slideDown();
      $(this).text('close');
      $(this).css('background-color', '#808080');
      $(this).css('color', '#000');
    } else {
      $('.open-box').slideUp();
      $(this).text('more');
      $(this).css('background-color', '#fa7e51');
    }
  });

  $('.modal-btn').modaal();

  $('.news-switcher').bgSwitcher({
    images: ['images/banner1.jpg', 'images/banner1.jpg', 'images/banner1.jpg'],
    interval: 3000,
    loop: true,
  });

  $('nav a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - adjust + 50;
    $('body,html').animate({
      scrollTop: position
    }, speed, 'swing');
    return false;
  });

});