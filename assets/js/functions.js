$( document ).ready(function() {

  $('#wrapper').fullpage({
    verticalCentered: true,
    scrollOverflow: true,
    afterRender: function(){
      //playing the video
      $('video').get(0).play();
      $('.my-slider').unslider();
    }
  });
});
