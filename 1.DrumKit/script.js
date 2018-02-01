let playSound = function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // bind to audio tag and to play it later
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // bind to key class and to add playing class on it later

  if (!audio) return; //if no keycode avail, just stop the function.
  audio.currentTime = 0; // set audio to be able to play over and over again
  audio.play(); // audio method

  key.classList.add('playing');
};
let removePlaying = function(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
  //check this with console.log(this), this is the object we pass in to function.
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removePlaying));

window.addEventListener('keydown', playSound);

function pressSound(a) {
  var keyNum = a.currentTarget.dataset.key; // return number of key
  const audio = document.querySelector(`audio[data-key="${keyNum}"]`);
  const key = document.querySelector(`.key[data-key="${keyNum}"]`);
  if (!audio) return; //if no keycode avail, just stop the function.
  audio.currentTime = 0; // set audio to be able to play over and over again
  audio.play(); // audio method
  key.classList.add('playing');
}

for (i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', pressSound);
}
