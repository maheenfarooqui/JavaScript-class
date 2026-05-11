// let info = ["Maheen","Bsc","ku","modeve Desing"]
// // let information = [username , edu, intitute, company]= info
// let [username , edu, intitute, company]= info
// console.log(username);


// clousers

// function handler(size){
//     return function(){
//         document.getElementById("heading").style.fontSize = `${size}`;
//     } 

// }
// one.onclick = handler("20px");
// two.onclick = handler("30px");
// three.onclick = handler("40px");


// 1. Array Methods Practice

// In methods ko mix karke tasks banao:

// map
// filter
// reduce
// forEach
// Tasks
// Numbers array ka:
// even numbers nikalo
// squares nikalo
// total sum nikalo
// max number find karo

// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr = arr.filter(a => a % 2 === 0)
// console.log(newArr);
// let square = arr.map(a => a*a)
// console.log(square);
// let sum = arr.reduce((a,b)=> a+b,0)
// console.log(sum);
// let max = arr.reduce((a,b)=> {
//    return a> b ? a:b;
// } ,arr[0]
// )
// console.log(max);


// Odd numbers
// Double of each number
// Average of array
// Smallest number

// let arr = [1,2,3,4,5,6,7,8,9,10]

// let odd = arr.filter(a => a % 2 !== 0)
// console.log(odd);

// let double = arr.map(a => a * 2)
// console.log(double);

// let average =arr.reduce((a,b)=>a+b , 0)/arr.length
// console.log(average);


// let products = [
//  {name:"Laptop", price:80000},
//  {name:"Mouse", price:2000},
//  {name:"Keyboard", price:5000},
//  {name:"Monitor", price:30000}
// ];

// let pName = products.map(product => product.name)
// console.log(pName);
// let exp = products.filter(a=> a.price >5000)
// console.log(exp);

let students = [
 {name:"Ali", marks:80},
 {name:"Sara", marks:90},
 {name:"Ahmed", marks:70}
];

let userName = students.map(uName => uName.name)
console.log(userName);
let maxNum = students.filter(max => max.marks > 80)
console.log(maxNum);
let totalM = students.reduce((total,studen)=>{
    return total + studen.marks
},0)

console.log(totalM);






