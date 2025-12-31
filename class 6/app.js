// if("umrah"){
//     console.log("hellow");
    
// }
// // falsey values !!NaN , !!0, !!false , !!"" , !!undefined , !!null

// // authentic way to search falsey value 
// console.log(Boolean(null));


// var learn1 = prompt("do you know javaScript ans yes or no");
// var learn2 = prompt("do you know  css yes or no");
// var learn3 = prompt("do you know html ans yes or no");
// var learn4 = prompt("do you know bootstrap ans yes or no");

// if(learn1 == "yes" && learn2 == "yes"){
//     if(learn3 == "yes" || learn4 == "yes"){
//         console.log("you are eligible");
//     }
//     console.log("you are eligible");
    
// }
// else{
//     console.log("you are not");
    
// }

// javascript ati hy tbhe pocho 2 sal ka hy to pocho karachi 
// 

// var user = prompt("dp you know javaScript yes or no");
// var message;
// if(user == "yes"){
//     var exp = +prompt("what is your experience?");
//     if(exp >= 2){
//         var city = prompt("enter your city");
//     if(city == "karachi"){
//         message = "congratulations! you are eligible";
//     }else{
//         message = "please you should be live in karachi";
//     }
          
//     }else{
//         message = "please increse your experience"
//     }
    
    
// }
// else{
//     message = "sorry! you are not" ;
    
// }
// console.log(message);

// Admission Form

// Write a program that:

// Ask user if they have passed matric (yes/no)

// If yes, ask for marks

// If marks are 70 or above, ask for group (science / arts)

// If group is science, display
// “Admission confirmed”

// Otherwise display suitable messages

var edu = prompt("have you passed matric (yes/no)?");
var message ;

if(edu == "yes"){
    var marks = +prompt("enter your marks");
    if(marks >= 70){
        var group = prompt("enter your group science or arts");
        if(group == "science"){
            message ="congratulations! Admission confirmed"

        }else{
            message = "science group is mendatory";
        }

    }else{
        message = "please increase your marks"
    }
}
else{
    message = "sorry! you are not eligible for admission";

}
console.log(message);

