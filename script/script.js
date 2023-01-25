const swiper = new Swiper('.swiper', {
  loop: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



$('.form__purcase__form__input input').focus(function() {
  $(this).parent().find('.primer__text').css({'display':'flex'});
});
$('.form__purcase__form__input input').focusout(function() {
  $(this).parent().find('.primer__text').css({'display':'none'});
});
$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 800);
    return false;
  });
  var seconds = $('.seconds').text(),
    minutes = $('.minutes').text(),
    int;
  int = setInterval(function () { // запускаем интервал
    if (seconds > 0) {
      seconds--; // вычитаем 1
      $('.seconds').text(seconds); // выводим получившееся значение в блок
    } else {
      if (minutes > 0) {
        minutes--;
        $('.minutes').text(minutes);
        seconds = 59
        $('.seconds').text(seconds);
      }
      else
        clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
    }
  }, 1000);
  return false;
});