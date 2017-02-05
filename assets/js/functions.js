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

  $(function() { // Wait for page to finish loading.
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          if(iOS) { // Is iOS.
              $("video#bgvid").addClass('displayNone');
              $("img#bgimg").removeClass('displayNone');
          }
  });
});
