function My_First_Function() {       //Defining a function and naming it
    var str ="This text is purple!";//Defining a variable and giving it a str value

    var result = str.fontcolor("purple");//using the fontcolor method on str var
    document.getElementById("Purple_Text").innerHTML = result;//putting the value of result into HTML element with "Purple_Text" id
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
}