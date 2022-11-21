///page load 
window.addEventListener("load", autoPlay);
var video = document.getElementById("videoplayer");

function autoPlay(){
video.autoplay = false;
video.loop = false;
}


///Play Video
document.getElementById("play").addEventListener("click", playVid);

let vid = document.getElementById("videoplayer")

function playVid(){
vid.play();
}

///Pause Video
document.getElementById("pause").addEventListener("click", pauseVid);

let pause = document.getElementById("videoplayer")

function pauseVid(){
pause.pause();
}


///slow down - Slow down the video to the next lowest playback speed from the list: 0.5, 1, 2. If the video is already on the slowest speed, add an alert saying "Video is at slowest speed!"

document.getElementById("slower").addEventListener("click",slowVid);
let slow = document.getElementById("videoplayer")


function slowVid(){
    if (slow.playbackRate === 1){
    slow.playbackRate = 0.5;
}   else if (slow.playbackRate === 2){
    slow.playbackRate = 1;
}   else if(slow.playbackRate === 0.5){
    window.alert("Video is at slowest speed!");}
}





///speed up - Speed up the video to the next highest playback speed from the list: 0.5, 1, 2. If the video is already on the highest speed, add an alert saying "Video is at fastest speed!"
document.getElementById("faster").addEventListener("click",speedVid);
let speed = document.getElementById("videoplayer")


function speedVid(){
    if (speed.playbackRate === 1){
    speed.playbackRate = 2;}

    else if(speed.playbackRate === 0.5){
        speed.playbackRate = 1;}

    else if(speed.playbackRate === 2){
    window.alert("Video is at fastest speed!");}
}




///skip ahead - Advance the current video by 15 seconds. If the video length has been exceeded go back to the start of the video. unable to go back to start of video
document.getElementById("skip").addEventListener("click",skipVid);
let skip = document.getElementById("videoplayer")

// function skipVid(){
//     skip.currentTime = skip.currentTime + 15;
//     skip.currentTime = 0;
//     skip.load();
// }


function skipVid(){
if(skip.currentTime > vid.duration *.99){
    skip.currentTime = 0;
    video.play();
} 
else ((skip.currentTime = skip.currentTime + 15));

}



///mute - Mute/unmute the video and update the text in the button.
document.getElementById("mute").addEventListener("click",muteVid);
let mute = document.getElementById("videoplayer")

function muteVid(){
if (mute.muted === false) {
    mute.muted = true;
    document.getElementById("mute").innerHTML="Unmute";
}
else {
mute.muted = false;
document.getElementById("mute").innerHTML="Mute";
}

}
///volume slider - Change the volume based on the slider and update the volume information.

let vol = document.getElementById("videoplayer");


document.querySelector("#slider").addEventListener("change", function(){
	console.log("Change volume");
	vol.volume= document.getElementById("slider").value/100;
	document.querySelector("#volume").innerHTML = vol.volume*100+"%";
});