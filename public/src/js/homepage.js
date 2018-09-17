// HOMEPAGE JS
$(function() {
  $('.burger').on('click', () => {
    $('.mobile-nav').addClass('active-nav');
  });
  $('.close-nav').on('click', () => {
    $('.mobile-nav').removeClass('active-nav');
  });
});