// var vid = $('#background_video');
// var played = $("#play");
// var paused = $("#pause");
// vid.volume = 0.00;

// function pauseVid() {
//   vid.pause();
//   paused.style.opacity = 0.4;
//   played.style.opacity = 1.0;
// }

// function playVid() {
//   vid.play();
//   played.style.opacity = 0.4;
//   paused.style.opacity = 1.0;
// }


var video = $('#background_video');

$('#play').on('click', function() {
    if(video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
    return false;
};
