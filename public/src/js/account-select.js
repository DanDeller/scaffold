/*\
 * ACCOUNT SELECTION JS
 * - Sidebar code in this file is also shared with the
 * other personal account files. Duplicating code will
 * result in page conflicts and should be avoided.
 *
\*/
$(function() {
  $('.sidebar-block i').on('click', function() {
    $(this).toggleClass('rotate');
    $(this).parent().parent().find('.sidebar-list').toggleClass('hide-list');
  });
});