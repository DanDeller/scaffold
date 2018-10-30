// PERSONAL INFO JS
$(function() {
  $('.sidebar-block i').on('click', function() {
    $(this).toggleClass('rotate');
    $(this).parent().parent().find('.sidebar-list').toggleClass('hide-list');
  });
});