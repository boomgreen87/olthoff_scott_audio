(() => {
	//Create a variable stack and grab all of the DOM elements from the page
	let aud = document.querySelector('audio'),
		play = document.querySelector('#playButton'),
		pause = document.querySelector('#pauseButton'),
		rewind = document.querySelector('#rewindButton'),
		tracks = document.querySelectorAll('.trackHolder');

		//Write the functions for the audio element
		function playAudio() {
			aud.play();
		}

		function pauseAudio() {
			aud.pause(true);
		}

		function rewindAudio() {
			aud.currentTime = 0;
		}

		function swapSource() {
			let currentTrack = this.dataset.currenttrack;

			aud.src = `audio/${currentTrack}`;
			aud.load();
			aud.play();
		}

		//Add event handlers
		play.addEventListener("click", playAudio);
		pause.addEventListener("click", pauseAudio);
		rewind.addEventListener("click", rewindAudio);
		tracks.forEach(track => track.addEventListener("click", swapSource));
})();