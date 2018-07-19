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
