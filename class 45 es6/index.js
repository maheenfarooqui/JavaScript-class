// var let const (hoisting, tdz, scope, errors)
// JS RUNS IN TWO PHASES
// 1. MEMORY PHASE (creation)
// 2. EXECUTION PHASE

// HOISTING - at the time of creation - declarations gets allocated

// case 01

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a,b,c);

// case 02 (early calling)

// is not defined - ERROR
// UNDEFINED - IS NOT AN ERROR

// console.log(d); // error
// var d; // or d = 300;

// console.log(e);
// let e; // e = 444;
// console.log(e)
// console.log(f);
// const f = 99;

// var belongs to the nearest function

// function abc(){
//     if(true){
//         var x = 99;
//     }
//     console.log(x); // 99
// }
// abc()
// let const belongs to the scope
// function abc(){
//     if(true){
//         var x = 99;
//         let y = 100;
//         const z = 222;
//     }
//     console.log(x); // 99
//     console.log(y); // error
//     console.log(z); // error
// }
// abc()

// function abc() {
//   if (true) {
//     var x = 99;
//     let y = 100;
//     const z = 222;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x); // 99
// }
// abc();

// let y = 100;
// const z = 222;

// function abc() {
//   if (true) {
//     var x = 99;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x); // 99
// }
// abc();

// let y = 100;
// const z = 222;

// function abc() {
//   if (true) {
//     var x = 99;
//     console.log(y);
//     console.log(z);
//   }
//   console.log(x); // 99
// }
// abc();

// scopes are anything with {}

// Lexical - where the variables or values are WRITEN

// Scope chain - upward 

let name = "muheerah";
console.log(name);

function sayName() {
  var name = "sara";
  console.log(name);
  function inner() {
    name = "saira";
    console.log(name);
  }
  inner();
}

sayName();