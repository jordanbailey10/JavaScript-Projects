function addition_Function() { //creating addition function
    var addition = 12 + 12;//creating variable;
    document.getElementById("Math").innerHTML = "12 + 12 =" + addition;
}

function subtraction_Function() { //creating subtraction function
    var subtraction = 10 - 2;
    document.getElementById("Math").innerHTML = "10 - 2 =" + subtraction
}

function multiplication_Function() {
    var multiplication = 5 * 5;
    document.getElementById("Math").innerHTML = "5 x 5 =" + multiplication;
}

function division_Function() {
    var division = 21 / 3;
    document.getElementById("Math").innerHTML = "21 / 3 =" + division;
}

function more_Math() {
    var mult_op_Math =  (2 + 2) * 6 / 2 -1;
    document.getElementById("Math").innerHTML = "2 plus 2, multiplied by 6, divided in half then subtracted by 1 equals " + mult_op_Math;
}

function modulus_Operator() {
    var remainder = 13 % 5; 
    document.getElementById("Math").innerHTML = "When upi dovode 13 by 5 you have a remainder of: " + remainder;
}

function negation_Operator() {
    var x = 20;
    document.getElementById("Math").innerHTML = -x;
}

var X = 8;
X++;
document.write(X);

var X = 29;
X--;
document.write(X);

window.alert(Math.random() * 500);

document.write(Math.round(5.6));
