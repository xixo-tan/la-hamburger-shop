$(function ($) {
  $('.bg-switcher').bgSwitcher({
    images: ['images/bg1.jpg', 'images/bg2.jpg', 'images/bg3.jpg'],
    interval: 5000,
    loop: true
  });

  $(window).scroll(function () {
    var targetElement = $('.fadein').offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 200) {
      $('.fadein').css('opacity', '1');
      $('.fadein').css('transform', 'translateY(0)');
    }
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    dots: true,
    centerMode: true,
    centerPadding: '20%',
  });

  $('.more-btn').on('click', function () {
    if ($('.open-box').is(':hidden')) {
      $('.open-box').slideDown();
      $(this).text('close');
      $(this).css('background-color', '#808080');
    } else {
      $('.open-box').slideUp();
      $(this).text('more');
      $(this).css('background-color', '#fabb51');
    }
  });

});