$(document).ready(function(){
  $("#falafel").mouseenter(function(){
    $(this).changeImg("imgs/falafel2.jpg");
  });
  $("#falafel").mouseleave(function(){
    $(this).changeImg("imgs/falafel1.jpg");
  })

  jQuery.fn.extend({
    changeImg: function (source) {
      $(this).fadeOut("slow", function(){
        $(this).attr("src", source).fadeIn("slow").delay("slow");
      })
    }
  })
});