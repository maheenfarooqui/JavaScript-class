// function greet(){
//     console.log("hellow world");

// }
// greet();

// function myTime(){
//     var time =moment().format("dddd, MMMM Do YYYY, h:mm:ss a | dddd");
//     console.log(time);

// }
// myTime();

function greet() {
  console.log(
    "YOur name is " + username + "and your father name is " + fatherName,
  );
}
var username = prompt("enter your name");
var fatherName = prompt("enter your father name");
greet();
