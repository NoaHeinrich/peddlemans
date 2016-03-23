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
    $("body").scrollTo($("#menu"));
  })

  $.fn.extend({
    changeImg: function (source) {
      $(this).fadeOut("slow", function(){
        $(this).attr("src", source).fadeIn("slow").delay("slow");
      })
    }
  })

  $.fn.scrollTo = function( target, options, callback ){
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var scrollPane = $(this);
    var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
    var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
    scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}

});