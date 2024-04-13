var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1")
	video.autoplay =false;
	video.loop = false;
	console.log('Autoplay is set to '+ video.autoplay)
});

document.getElementById("play").addEventListener("click", function(){
	video.play();
	document.getElementById("volume").innerText = document.getElementById("slider").value + "%";

})

document.getElementById("pause").addEventListener("click", function(){
	video.pause();
})


document.getElementById("slower").addEventListener("click", function(){
	video.playbackRate -= 0.10;
	console.log('Playback Speed: ' + video.playbackRate);
})


document.getElementById("faster").addEventListener("click", function(){
	video.playbackRate += 0.10;
	console.log('Playback Speed: ' + video.playbackRate);
})


document.getElementById("skip").addEventListener("click", function(){

	if (video.currentTime >= video.duration){
		video.play();
		console.log('Current time: ' + video.currentTime);
	}
	else {
		video.currentTime += 10;
		console.log('Current time: ' + video.currentTime);
	}
})


document.getElementById("mute").addEventListener("click", function(){
	if (video.muted) {
		video.muted = false;
		this.innerText = 'Mute'
	}
	else {
		video.muted = true;
		this.innerText = 'Unmute'
	}
})


document.getElementById("slider").addEventListener("change", function(){
	document.getElementById("volume").innerText = this.value + "%";
	video.volume = this.value / 100;
})



document.getElementById("vintage").addEventListener("click", function(){
	video.classList = "oldSchool"
})


document.getElementById("orig").addEventListener("click", function(){
	video.classList = "video"
})