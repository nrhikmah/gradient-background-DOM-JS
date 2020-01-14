var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var colorText = document.querySelector("h3");
console.log(colorText)

function colorGradient() {
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

    colorText.textContent = body.style.background;
}
color1.addEventListener("input", colorGradient)

color2.addEventListener("input", colorGradient)