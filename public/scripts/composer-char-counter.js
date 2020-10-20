$(document).ready(function() {
  // --- our code goes here ---
  let str = 0;
  $('textarea').keyup(function(e){
    const pCount = $(this).parent().find('.counter').text();
    const str1 = $(this).val()
    str = str1.length - (140 - pCount);
    let count = $(this).parent().find('.counter').text();
    const remain = count - str;
    if (remain < 0) {
      $('output').css("color", "#D8000C");
    };
    $(this).parent().find('.counter').text(remain);
  });
});