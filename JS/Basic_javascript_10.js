function call_Loop() { //call loop function
var i = 1;
var text = ";"
while (i <= 10) {
    text += "The number is " + i;
    i++;
}
document.getElementById("Loop").innerHTML = text
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin","Trumpet", "Flute"]; //for loop
var Content = "";
var Y;
function for_Loop()  {
    for (Y = 0; Y < Instruments.length;  Y++) {
        Content += Instruments[Y] + "<br>"; 
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function constant_function() { //constant function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
Musical_Instrument.color = "blue";
Musical_Instrument.price = "$900";
document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;

}

var X = 82;  // let keyword
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);


let car = {   //let keyword/object
    make: "Dodge ", 
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();