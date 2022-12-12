window.addEventListener("keydown", (e) => {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // WARNING - keyCode Depreciated
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop event listener

	audio.currentTime = 0; // Return at start audio function
	audio.play(); // play the sound

	key.classList.add("play");
	
	function removeTransition(e) {
		if (e.propertyName !== "transform") return; // skip if its not transform
		this.classList.remove("play");
	}

	// End of transition
	const keys = document.querySelectorAll(".key"); //Array with each keys
	keys.forEach((key) =>
		key.addEventListener("transitionend", removeTransition)
	);
});
