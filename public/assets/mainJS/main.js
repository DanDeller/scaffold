"use strict";

/*\
 * ACCOUNT SELECTION JS
 * - Sidebar code in this file is also shared with the
 * other personal account files. Duplicating code will
 * result in page conflicts and should be avoided.
 *
\*/
$(function () {
  $('.sidebar-block i').on('click', function () {
    $(this).toggleClass('rotate');
    $(this).parent().parent().find('.sidebar-list').toggleClass('hide-list');
  });
});
"use strict";

// HOMEPAGE JS
$(function () {
  $('.burger').on('click', function () {
    $('.mobile-nav').addClass('active-nav');
  });
  $('.close-nav').on('click', function () {
    $('.mobile-nav').removeClass('active-nav');
  });
  $('test').on('click', function () {
    $('.mobile-nav').removeClass('active-nav');
  });
});
"use strict";

// PERSONAL INFO JS
$(function () {});
"use strict";

// CATALOG PAGE JS
$(function () {});