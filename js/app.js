$(document).ready(function(){
  $("#falafel").mouseenter(function(){
    $(this).changeImg("imgs/falafel2.jpg");
  });
  $("#falafel").mouseleave(function(){
    $(this).changeImg("imgs/falafel1.jpg");
  })

  $(".goHome").on("click", function(event){
    event.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, "slow");
  })

  $(".goMenu").on("click", function(event){
    event.preventDefault();
    $("#menu").ScrollTo();
  })

  $(".goInfo").on("click", function(event){
    event.preventDefault();
    $("#info").ScrollTo();
  })

  $.fn.extend({
    changeImg: function (source) {
      $(this).fadeOut("slow", function(){
        $(this).attr("src", source).fadeIn("slow").delay("slow");
      })
    }
  })

});
