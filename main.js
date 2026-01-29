function roll_dice() {
  const dices = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
  let dice_choice = Math.floor(Math.random() * dices.length);
  const display = document.getElementById("dice_face");

  display.classList.add('roll-animation');

  setTimeout(() => {
    display.classList.remove("roll-animation");
    display.innerHTML = dices[dice_choice];
  }, 200);
}
