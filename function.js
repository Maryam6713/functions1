//-----Function--------------------//
//----to string---------------------//
function fullName(a,b){
    console.log(a,b)
}
fullName("maryam" , "amir")//----maryam amir

//-----to numbers of addition--------------//
function number(a,b){
    console.log(a+b)
}
number(10,10)//-----20

//-----to percentage----------------------//
function percentage(a,b,c){
    console.log((a*b)/c + "%")
}
percentage(300,100,400)//-----75%

//-----for variable----------------------//

function fullName(){
    var firstName = "maryam"
    var lastNmae = "amir"
    console.log(firstName + " "  +lastNmae)
}
fullName()//---maryam amir--dispaly two times
fullName()

//------for userOutput----------------------------//

function userName(){
    var userOutput = prompt("enter your name")
    alert("Hello " + userOutput)
}
userName()//----Hello maryam

//------for array---------------------------//

var myArr = ["maryam" , "fatima" , "ayesha"]
function names(addname){
   myArr[3] =  addname
}
names("mehak")
console.log(myArr);

//-----------for loop------------//
var num1 = 1
function myLoop(){
    for(var i = 0 ; i <= 10 ; i++)
    console.log(i);
}
myLoop()//counting 1 to 10

//---------loop for string-------//

function stringLoop(){
    for(var i = 0; i< 5 ; i++){
       console.log("hello");
    }
}
stringLoop()//hello printed 5 time

//--------even and odd numbwe------//
var num  = prompt("enter a number")
function checkNumber(number){
    if(number % 2 === 0){
console.log(number + " is an even number");

    }else{
        console.log(number+ " is an odd number");
    }
}

checkNumber(num)//it tells about type of number
                //even or odd
