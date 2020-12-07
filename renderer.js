const colors = ['blue', 'gold', 'pink', 'cyan', 'yellow', 'peacockgreen', 'red', 'green', 'black', 'magenta', 'purple', 'teal', 'orange', 'indigo', 'brown', 'violet', 'silver'];

let currentColor = 0;
// eslint-disable-next-line no-undef
const lis = document.querySelectorAll('#hBT');

function changeColor() {
  // eslint-disable-next-line no-plusplus
  --currentColor;
  if (currentColor < 0) {
    currentColor = colors.length - 1;
  }

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.color = colors[(currentColor + i) % colors.length];
  }
}
setInterval(changeColor, 1000);

// eslint-disable-next-line no-undef
const x = document.getElementById('myAudio');

function playAudio(){
  x.play();
}

setInterval(playAudio, 1000);

