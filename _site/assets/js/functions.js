$( document ).ready(function() {

  $('#wrapper').fullpage({
    verticalCentered: true,
    afterRender: function(){
      //playing the video
      $('video').get(0).play();
    }
  });
});
