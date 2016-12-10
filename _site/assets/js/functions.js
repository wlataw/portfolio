$( document ).ready(function() {

  $('#wrapper').fullpage({
      verticalCentered: true,
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
      afterRender: function(){
        //playing the video
        $('video').get(0).play();
      }
    });

});
