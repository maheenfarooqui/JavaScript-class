// var myNum = [2,4,6,8,44];

// for(var i =0 ; i< myNum.length ; i++){
//     // document.write(myNum[i] + "x 5 = " + myNum[i]* 5 + "<br>")
//     document.write(`${myNum[i]} x 5 = ${myNum[i]*5} <br>`)

// }

// var usertable = +prompt("enter a number of table you want", 5)|| 5;
// var tableLength = +prompt("enter length of table", 10)||10;
 

//  for(var i = 1 ; i <=tableLength; i++ ){
//      var arr =  usertable * i ;
//      document.write(`${usertable} * ${i} = ${arr} <br>`);  
    
//  }

var stdn = ["hareem","maheen","hiba","maleeha"];
var userName = prompt("enter your name");

for(var i=0 ; i< stdn.length; i++){
    if(userName.toLocaleLowerCase() === stdn[i]){
        document.write("you are selected")
    }
}

