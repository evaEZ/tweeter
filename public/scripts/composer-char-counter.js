$(document).ready(function() {
  // --- our code goes here ---
  let str = 0;
  $('textarea').keyup(function(){
  //console.log($(this).val());
  str = $(this).length;
  //console.log( $('.counter').text());
  //console.log($(this).parent().find('.counter').text());
  let count = $(this).parent().find('.counter').text();
  const remain = count - str;
  $(this).parent().find('.counter').text(remain);
   
  //console.log(str);
  });
  //const valueTextarea = $('.section form textarea');
  //console.log(valueTextarea);
  //valueTextarea.focus(focusHandler);
});