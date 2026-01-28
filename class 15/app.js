var myDate = new Date();
// myDate = myDate.toString();
// var myDay = myDate.slice(0, 3);
// console.log(myDay);

// if (myDay === "Sat") {
//   //  myday = myDay + "urday"
//   console.log(myDay + "urday");
// } else if (myDay === "Tue") {
//   console.log(myDay + "sday");
// } else if (myDay === "Wed") {
//   console.log(myDay + "nesday");
// } else if (myDay === "Thu") {
//   console.log(myDay + "rsday");
// }
// if (myDay === "Fri" || myDay === "Sun" || myDay === "Mon") {
//   console.log(myDay + "day");
// } else {
//   console.log("Write correct day ");
// }

// var myArr = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"]
// var day=myDate.getDay();
// console.log(myArr[day]);

var myMonth = [
  "جنوری",
  "فروری",
  "مارچ",
  "اپریل",
  "مئی",
  "جون",
  "جولائی",
  "اگست",
  "ستمبر",
  "اکتوبر",
  "نومبر",
  "دسمبر"
];
var month = myDate.getMonth();
console.log(myMonth[month]);




