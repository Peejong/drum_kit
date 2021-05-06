const keys = document.querySelectorAll('.key');

window.addEventListener('keydown', playSound);

function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!key) return; // stop the function from pressing wrong key
  audio.currentTime = 0; // rewind from the sound
  audio.playBackRate = 1.5; // add speed

  key.classList.add('playing');
  audio.play()
}


keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
  if(e.propertyName !== 'transform') return; // skip it if the value is not transform
  this.classList.remove('playing');
}