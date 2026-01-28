function roll_dice() {
  const dices = ["&#9856;", "&#9857;", "&#9858;", "&#9859;", "&#9860;", "&#9861;"];
  let dice_choice = Math.floor(Math.random() * dices.length);
  document.getElementById("dice_face").innerHTML = dices[dice_choice];
}