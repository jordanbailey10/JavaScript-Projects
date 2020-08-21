document.write(typeof 12);

document.write(3E430);

document.write(-3E310);

document.write(20 > 5);

document.write(20 < 5);

console.log(4 + 4);

document.write("20" + 6);

console.log(10 > 20);

document.write(12 == 12);

document.write(12 == 20);

X = 20;
Y = 20;
document.write(X === Y); //=== same value- true

X = 20;
Y = "30";
document.write(X === Y);// different data type and value- false

X = 20;
Y = "20";
document.write(X === Y);/// different data type and same value- false

X = 20;
Y = 30;
document.write(X === Y);// same type of data, different value- false

document.write(6 > 3 && 12 > 6);//&& logical operator for AND true

document.write(3 > 6 && 6 > 12);//&& logical operator for AND false

document.write( 6 > 12 || 12 > 5);//|| OR operator true

document.write( 6 > 12 || 5 > 12); //|| OR operator false

function not_Function() {
    document.getElementById("Not").innerHTML = !(30 > 20);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 30);
}