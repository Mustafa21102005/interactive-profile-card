const nameText = "Mustafa Azmi";
let i = 0;
function typeEffect() {
  if (i < nameText.length) {
    document.getElementById("typed-name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }
}
typeEffect();
