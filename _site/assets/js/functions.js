$( document ).ready(function() {

  $('#wrapper').fullpage({
    verticalCentered: true,
    scrollOverflow: true,
    afterRender: function(){
      //playing the video
      $('video').get(0).play();
    }
  });

  $(function() {
      var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
          if(iOS) { // Is iOS.
              $("video#bgvid").addClass('displayNone');
              $("img#bgimg").removeClass('displayNone');
              $("figure").addClass('iosHeight');
          }

          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $("h2.onDesktop").addClass('displayNone');
            $("h2.onMobile").removeClass('displayNone');
          }
  });
});
