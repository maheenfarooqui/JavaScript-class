// var myNum = 10;
// ++myNum;
// console.log(myNum);
// --myNum;
// console.log(myNum);
// myNum++;
// console.log(myNum);
// myNum--;
// console.log(myNum);

// var a = 4;
// var b = "3";
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log("3"+"3"-"3");
// // + always check type and a;; other not check type its perform the math operation.

var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
var age = prompt("Enter your age");
var email = prompt("Enter your email");
var welcomemsg =fullName +" "+
  "welcome back to school!Remember that you are not alone as we begin a new school year together. I will be there for you every step of the way. In our classroom, you can ask questions, take risks, and grow academically and personally. Expect to learn more about [include the highlights of your subject] this semester. Let us make this year unforgettable through fun, companionship, and a common love of learning. Thank you for coming back!";
  
document.write("<div class='card'><h1>" + fullName + "</h1>" +
  "<p>Age: " + age + "</p>" +
  "<p>Email: " + email + "</p>" +
  "<p>" + welcomemsg + "</p>" +
  "</div>");