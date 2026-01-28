//  number method Math.round() give the round number if we have the
// Math.floor() give always floor
// Math.ciel()  give the ciel number
//  Math.random give 16 number after decimal
// all are number methods.

// var diceNum = Math.ceil(Math.random() * 6);
// console.log(diceNum);

// make the dice game
// learn dom on click get element by id and inner html.

// ................string to number
// parseInt() remove decimal
// parseFloat() give exact number
// Number() give exact number

// ..............numbers to string
// toString()

// tofixed() if not give value to wohi value otherwise give it value whic given. return number in string its a number method.

var userNum = Number(prompt("Enter a number 0 or 1"));

var diceNum = Math.floor(Math.random() * 2);
console.log(diceNum);

if (userNum === diceNum) {
  console.log("you win");
} else {
  console.log("you defeat");
}
