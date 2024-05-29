function check(){
    var score = 0
var rightAnswer1 = document.getElementById("q1-a1"); 
var qus1Answer2 = document.getElementById("q1-a2");
var qus1Answer3 = document.getElementById("q1-a3");
var qus1Answer4 = document.getElementById("q1-a4");
if(rightAnswer1.checked == true){
score++
alert("Your Q1 Answer is Correct")
}
else {
    alert("Your Q1 Answer is !!Wrong!!")
}



var rightAnswer2 = document.getElementById("q2-a1"); 
var qus2Answer2 = document.getElementById("q2-a2");
var qus2Answer2 = document.getElementById("q2-a3");
var qus2Answer2 = document.getElementById("q2-a4");
if(rightAnswer2.checked == true){
score++
alert("Your Q2 Answer is Correct")
}
else {
    alert("Your Q2 Answer is !!Wrong!!")
}



var rightAnswer3 = document.getElementById("q3-a4"); 
var qus3Answer1 = document.getElementById("q2-a2");
var qus3Answer2 = document.getElementById("q2-a3");
var qus3Answer4 = document.getElementById("q2-a4");
if(rightAnswer3.checked == true){
score++
alert("Your Q3 Answer is Correct")
}
else {
    alert("Your Q3 Answer is !!Wrong!!")
}
alert("Your score is " + score++)
}