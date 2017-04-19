var main = function() {

  $('#top-text').keyup(function() {
    var top = $(this).val() || "U say something?";
    $('.top-caption').text(top);
});
  $('#bottom-text').keyup(function() {
    var bottom = $(this).val() || "Deal with it";
    $('.bottom-caption').text(bottom)
});
  $('#image-url').keyup(function() {
    var image = $(this).val() || "pancham.png";
    $('div.meme > img').attr('src',image);
 });
};

$(document).ready(main);
