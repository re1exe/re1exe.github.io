function Yes() {
    document.querySelector(".shrimpp").innerHTML = "Haha, you're a shrimp";
    var img = document.createElement("img");
img.src = "happy.png";
var src = document.querySelector(".shrimpp");
src.appendChild(img);
document.querySelector(".buttons").classList.add("invisible");
    console.log("Code working");

}

function No() {
    document.querySelector(".shrimpp").innerHTML = "YOU'RE NOT A SHRIMP <br>";
    var img = document.createElement("img");
img.src = "sad.png";
var src = document.querySelector(".shrimpp");
src.appendChild(img);
document.querySelector(".buttons").classList.add("invisible");
    console.log("Code working");
}
