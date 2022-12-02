var processingInstance;

function pulsed() {
    if (!processingInstance) {
        processingInstance = Processing.getInstanceById('sketch');
    }
    processingInstance.P5pulsed();
}


jQuery(function( $ ){

  $.vegas('slideshow', {
    delay:3000,
    backgrounds:[
      {src:'photo/01.jpg', fade:3000},
      {src:'photo/02.jpg', fade:3000},
      {src:'photo/03.jpg', fade:3000},
      {src:'photo/04.jpg', fade:3000},
      {src:'photo/05.jpg', fade:3000},
      {src:'photo/06.jpg', fade:3000},
      {src:'photo/07.jpg', fade:3000},
      {src:'photo/08.jpg', fade:3000},
      {src:'photo/09.jpg', fade:3000},
      {src:'photo/10.jpg', fade:3000},
      {src:'photo/11.jpg', fade:3000},
      {src:'photo/12.jpg', fade:3000},
      {src:'photo/13.jpg', fade:3000},
      {src:'photo/14.jpg', fade:3000},
      {src:'photo/15.jpg', fade:3000},
      {src:'photo/16.jpg', fade:3000},
      {src:'photo/17.jpg', fade:3000},
      {src:'photo/18.jpg', fade:3000}
    ]
  });

  $.vegas('overlay', {
    src:'vegas/overlays/01.png',
    opacity:0.8
  });

  //bgm

  var mySound = new buzz.sound("asset/env", {
    formats: [ "ogg", "mp3" ],
    preload: true,
    autoplay: false,
    loop: true
    });

  //mySound.loop();

  var $volume = $( '#pauseplay' );
  $volume.click( function() {
      mySound.togglePlay();
      if ( mySound.isPaused() ) {
        $( 'a#pauseplay' ).text("EnvironmentSound ON");
      } else {
        $( 'a#pauseplay' ).text("EnvironmentSound OFF");
      }
      pulsed();
      return false;
  });

  var $btn_prev = $( '#gotoprev' );
  $btn_prev.click( function() {
      $.vegas('previous');
      pulsed();
      return false;
  });

  var $btn_next = $( '#gotonext' );
  $btn_next.click( function() {
      $.vegas('next');
      pulsed();
      return false;
  });

});
