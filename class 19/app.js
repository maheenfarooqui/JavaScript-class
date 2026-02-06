// function calculate(num1,num2,operator){
//     var result;
//     if(operator === "+"){
//         result = num1 + num2;

//     }
//     else if(operator === "-"){
//         result = num1 - num2;

//     }
//     else if(operator === "*"){
//         result = num1 * num2;

//     }
//     else if(operator === "/"){
//         result = num1 / num2;

//     }
//     else if(operator === "%"){
//         result = num1 % num2;

//     }
//     else{
//         result = "enter correct operator"
//     }
// return result;
// }
// var userNum1 = Number(prompt("enter a number"));
// var userNum2 = Number(prompt("enter a number"));
// var useroper = prompt("enter a number");
// document.write(calculate(userNum1,userNum2,useroper))

// function factorial(num){
//     var result = 1;
//     for(var i = 1 ; i <= num; i++){
//         result = result * i ;
       
// }
//  return result
 
//     }
    


// console.log(factorial(5));

function hypothe(base,per){
function square(num){
    return num**2
}
var hypothes = square(base) + square(per);
return hypothes;

}

console.log(hypothe(2,3));

// Q11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capital(str){
    var mystr =str.split(" ");
    console.log(mystr);
//     var word = "";
//     for(var i = 0 ; i < mystr.length; i++){
//          word += ` ${mystr[i][0].toUpperCase()}${mystr[i].slice(1)}`;

        
//     }
// return word;
//     console.log(word);
    
    var cap = mystr[0][0].toUpperCase();
    var cap2 = mystr[1][0].toUpperCase();
    var cap3 = mystr[2][0].toUpperCase();
    var cap4 = mystr[3][0].toUpperCase();
    console.log(cap,cap2,cap3,cap4);
    var word1 = cap + mystr[0].slice(1);
    var word2 = cap2 + mystr[1].slice(1);
    var word3 = cap3 + mystr[2].slice(1);
    var word4 = cap4 + mystr[3].slice(1);
    var sentece = word1 +" "+ word2+ " " + word3+ " " + word4;
    console.log(sentece);
    
    

    
    
    
}
// console.log(capital("my name is maheen zuhra and i am th estudent in smit how are you all"));

capital("the quick brown fox");