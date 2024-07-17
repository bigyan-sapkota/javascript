const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener("click", function (e) {
    const selectedButton = e.target.id;
    switch (selectedButton) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      case "purple":
        body.style.backgroundColor = "purple";
        break;
      default:
        body.style.backgroundColor = "#212121";
        break;
    }
  });
});
