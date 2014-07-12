$(document).ready(
  function () {
    $('#navigation li').hover(
      function () { //appearing on hover
        $('ul', this).fadeIn();
      },
      function () {
        $('ul', this).fadeOut();
      }
    );
  }
);