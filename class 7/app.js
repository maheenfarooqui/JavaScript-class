// // Admission Form

// // Write a program that:

// // Ask user if they have passed matric (yes/no)

// // If yes, ask for marks

// // If marks are 70 or above, ask for group (science / arts)

// // If group is science, display
// // “Admission confirmed”

// // Otherwise display suitable messages

// var edu = prompt("have you passed matric (yes/no)?");
// var message ;

// if(edu == "yes"){
//     var marks = +prompt("enter your marks");
//     if(marks >= 70){
//         var group = prompt("enter your group science or arts");
//         if(group == "science"){
//             message ="congratulations! Admission confirmed"

//         }else{
//             message = "science group is mendatory";
//         }

//     }else{
//         message = "please increase your marks"
//     }
// }
// else{
//     message = "sorry! you are not eligible for admission";

// }
// console.log(message);


// array.................

// by default true value is 1 and false value is 0 .
// 

var students = ["hina" , "madiha", "farheen gul", 7, false];

console.log(2 + students[3]);

console.log(2 + students.push("maheen",("umrah")));
// .push() add in the end () give value in parenthesis which we need to add
//  .pop() remove from the end

