function call_Loop(){
var i = 1;
var text;
while (i <= 10) {
    text += "The number is " + i;
    i++;
}
document.getElementById("Loop").innerHTML = text

var Instruments = ["Guitar", "Drums", "Piano",