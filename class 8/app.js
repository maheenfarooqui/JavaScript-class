// there are two arrays create method literal notation and object notation.
// but mostly we use leteral notation method.

// premitive data type and non premetive data type
// array is non premitive changeable , object , or may be function
// null boolean string these are premitive these are non changeable
// pop() return jo remove huwa
// push() updated length return
// shift() return remove element
// unshif() updated length
// var myarr = ["maheen", "meeha"];
// var shifted = myarr.push("hello", "world");
// console.log(shifted);  

// lefo last int first out (push and shift)
// fefo first in first out (unshif , shift)


// var mynewArr = ["maheen",3,true,"hareem"];
// mynewArr.unshift(5, "fizza");
// var myshifeted = mynewArr.unshift(5, "fizza");
// console.log(myshifeted);

// var fruits = ["apple", "banana", "grapes"];
// var mysplice = fruits.splice(2,0, "guava","cherry", 9);
// console.log(mysplice);

// splice return which element it removes in array 
// if we remove nothing it gives empty array splice

var fruits = ["apple", "banana", "grapes"];
fruits.splice(0,2, 3,4,5);

console.log(fruits);

// slice have two values one in encluded and second one is excluded so its return included arrays 

// slice always five the copy of array not working on existing array.

// sort() alphabetic order me krdyga
// reverse() reverse the array

