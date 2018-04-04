var video = $('#bgVideo');

var WindowWidth = $(window).width();

if (WindowWidth < 900) {
            //It is a small screen
           video.append("<source src='img/video-xsmall.mp4' type='video/mp4' >");
} else {
            //It is a big screen or desktop
            video.append("<source src='img/video.mp4' type='video/mp4' >");
}
video.append("<source src='img/video.webm' type='video/webm' >");