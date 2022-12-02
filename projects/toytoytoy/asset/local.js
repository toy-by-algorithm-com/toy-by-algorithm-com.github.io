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
      { src:'photo/01.jpg', fade:1000 },
      { src:'photo/02.jpg', fade:1000 },
      { src:'photo/03.jpg', fade:1000 },
      { src:'photo/04.jpg', fade:1000 },
      { src:'photo/05.jpg', fade:1000 },
      { src:'photo/06.jpg', fade:1000 },
      { src:'photo/07.jpg', fade:1000 },
      { src:'photo/08.jpg', fade:1000 },
      { src:'photo/09.jpg', fade:1000 },
      { src:'photo/10.jpg', fade:1000 },
      { src:'photo/11.jpg', fade:1000 },
      { src:'photo/12.jpg', fade:1000 },
      { src:'photo/13.jpg', fade:1000 },
      { src:'photo/14.jpg', fade:1000 },
      { src:'photo/15.jpg', fade:1000 },
      { src:'photo/16.jpg', fade:1000 },
      { src:'photo/17.jpg', fade:1000 },
      { src:'photo/18.jpg', fade:1000 },
      { src:'photo/19.jpg', fade:1000 },
      { src:'photo/20.jpg', fade:1000 },
      { src:'photo/21.jpg', fade:1000 },
      { src:'photo/22.jpg', fade:1000 },
      { src:'photo/23.jpg', fade:1000 },
      { src:'photo/24.jpg', fade:1000 },
      { src:'photo/25.jpg', fade:1000 },
      { src:'photo/26.jpg', fade:1000 },
      { src:'photo/27.jpg', fade:1000 },
      { src:'photo/28.jpg', fade:1000 },
      { src:'photo/29.jpg', fade:1000 },
      { src:'photo/30.jpg', fade:1000 },
      { src:'photo/31.jpg', fade:1000 },
      { src:'photo/32.jpg', fade:1000 },
      { src:'photo/33.jpg', fade:1000 },
      { src:'photo/34.jpg', fade:1000 },
      { src:'photo/35.jpg', fade:1000 },
      { src:'photo/36.jpg', fade:1000 },
      { src:'photo/37.jpg', fade:1000 },
      { src:'photo/38.jpg', fade:1000 },
      { src:'photo/39.jpg', fade:1000 },
      { src:'photo/40.jpg', fade:1000 },
      { src:'photo/41.jpg', fade:1000 },
      { src:'photo/42.jpg', fade:1000 },
      { src:'photo/43.jpg', fade:1000 },
      { src:'photo/44.jpg', fade:1000 },
      { src:'photo/45.jpg', fade:1000 },
      { src:'photo/46.jpg', fade:1000 },
      { src:'photo/47.jpg', fade:1000 },
      { src:'photo/48.jpg', fade:1000 },
      { src:'photo/49.jpg', fade:1000 },
      { src:'photo/50.jpg', fade:1000 },
      { src:'photo/51.jpg', fade:1000 },
      { src:'photo/52.jpg', fade:1000 }
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
