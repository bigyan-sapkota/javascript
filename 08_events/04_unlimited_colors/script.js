// generate a random color
const randomColor = function () {
  const hex = "0123456789ABCEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 15);
    color += hex[randomNumber];
  }
  return color;
};

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
let intervalId;

const startChangingBg = () => {
  if (!intervalId) {
    intervalId = setInterval(changeBg, 1000);
  }
  function changeBg() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopChangingBg = () => {
  clearInterval(intervalId);
  intervalId = null;
};

startButton.addEventListener("click", startChangingBg);
stopButton.addEventListener("click", stopChangingBg);
