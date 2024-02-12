window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
  if (!audio) return;
  audio.currentTime = 0; // Rewind to the beginning
  audio.play();
  key.classList.add("playing");
  key.classList.remove("playing");
  key.classList.toggle("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
