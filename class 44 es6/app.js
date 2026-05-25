// iterator used for control in loops 


// let myArray = ["Maheen","Hareem","Hiba","Hania"];
// let iterate = myArray[Symbol.iterator()];

// let iterateMethod = myFucntion(myArray);

// generators used for control in functions
// var fruits = ["apple", "banana", "strawberry", "guava"];
// // for(i=0; i<=fruits.length;i++){
// //     console.log(fruits[i])
// // }
// console.log(fruits);
// let array = fruits[Symbol.iterator]();
// console.log(array)
// console.log(array.next().value);
// array.next().value;
// console.log("hello");

// console.log(array.next().value);
// console.log(array.next())
// console.log(array.next())
// for(let values of fruits ){
//     console.log(values)
// // }
// var fname = " ummehani"
// var iteratorName = fname[Symbol.iterator]()
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())
// console.log(iteratorName.next())

// // CUSTOM ITERATOR
// function customiterator(array) {
//   let index = 0;
//   return {
//     next: function () {
//       if (index < array.length) {
//         return {
//           value: array[index++],
//           done: false,
//         };
//       } else {
//         return {
//           value: array[index++],
//           done: true,
//         };
//       }
//     },
//   };
// }

// let numberArray = [1,2,3,4,5,67]
// let myName = "Umra"
// let arrayiterator = customiterator(myName)
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())
// console.log(arrayiterator.next())





// function test(){
//     console.log("first")

//     console.log("second")

//     console.log("Third")

// }
// test()

// function* test(){
//     console.log("hello world1")
//     yield "first"
//     console.log("hello world2")
//     yield "second"
//     console.log("hello world3")
//     yield "third"

// }
// let g = test()
// console.log(g.next())
// console.log("umra")
// g.next()
// console.log("Batool")
// console.log(g.next())
// // console.log(g.next())

// function* myNum(){
//     let nextNum =300
//     while (true){
//         yield(nextNum++)
//     }

// } 
   
// let g= myNum()

// for(let value of g){
//     if(value>305){
       
//     break;

//     }
//      console.log(value)
// }
function* myNUm(){
    console.log("hellow world");
    yield "how are you?"
    
    
}
let ge = myNUm();
console.log(ge.next());
