var X = 10;
function Add_numbers_1() {//global variable
    document.write(10 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
} 

Add_numbers_1();
Add_numbers_2();


function Add_numbers_1()  {
    var X= 10;  //local variable
    document.write(20 + X + "<br>");
}
function Add_numbers_1()  {
    document.write(20 + X + 100);
}
Add_numbers_1();
Add_numbers_2();

//console log debug
function Add_numbers_1()  {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2()  {//error because x is not defined
    console.log(X+ 100);
}
Add_numbers_1();
Add_numbers_2();


function get_Date() {
    if (new Date().getHours() > 18){
    document.getElementById("Greeting").innerHTML = "How are you tonight?";
    }
    if (new Date().getHours() < 18{
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}