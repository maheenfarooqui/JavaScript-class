// var subject1 = Number(prompt("enter subject 1 number"));
// var subject2 = Number(prompt("enter subject 2 number"));
// var subject3 = Number(prompt("enter subject 3 number"));
// var subject4 = Number(prompt("enter subject 4 number"));

// function calculateAverege(){
//     var average = (subject1 + subject2 + subject3 + subject4)/4
//     console.log(average);
// }
// calculateAverege();

function palindromeCheker(){
var userInput = document.getElementById("input").value;
    var myWord = "";
   for (var i = userInput.length - 1; i >= 0; i--) {
     myWord += userInput[i];
   }
    if (myWord === userInput) {
        document.getElementById("check").innerHTML = `its plaindrome`;
        document.getElementById("input").value =""

    //  console.log("its plaindrome");
   } else {
     document.getElementById("check").innerHTML = `its not`;
     document.getElementById("input").value=""
   }
}