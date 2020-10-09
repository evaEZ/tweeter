$(document).ready(function() {
  // --- our code goes here ---
  let str = 0;
  $('textarea').keyup(function(){
    str = $(this).length;
    let count = $(this).parent().find('.counter').text();
    const remain = count - str;
    if (remain < 0) {
      $('output').css("color", "#D8000C");
    };
    $(this).parent().find('.counter').text(remain);
  });
});