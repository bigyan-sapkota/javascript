const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");

  if (isNaN(height) || height === "" || height < 0) {
    result.innerText = `Please give a valid height ${height}`;
  } else if (isNaN(weight) || weight === "" || weight < 0) {
    result.innerText = `Please give a valid height ${weight}`;
  } else {
    const bmi = (weight / (height ** 2 / 10000)).toFixed(2);
    let youAre;
    if (bmi < 18.6) {
      youAre = "Under-weight";
    } else if (bmi > 24.9) {
      youAre = "Over-weight";
    } else {
      youAre = "Normal";
    }

    result.innerHTML = `<span>Your BMI is ${bmi}.<br/>
     You are ${youAre}<span>`;
  }
});
