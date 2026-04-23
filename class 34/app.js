// constructor objects give us a new instance of our object or copy.

// always start with uppercase

function Student(a,b,c,d){
    this.name = a;
    this.email = b;
    this.rollNumber = c;
    this.address = d;
    // this.studentDetails = function(){
    //     return `Hellow my name is ${this.name} and my email is ${this.email} and roll number is ${this.rollNumber} and Address is ${this.address}`
    // }
}

// its reduce the memory, and not create separate funtion to all objects;
Student.prototype.fullName = function(){
     return `Hellow my name is ${this.name} and my email is ${this.email} and roll number is ${this.rollNumber} and Address is ${this.address}`
   
}

var student1 = new Student("Maheen","maheenzuhra@gmail.com","121","A-154,North Karachi");
var student2 = new Student("Hareem","Hareemzuhra@gmail.com","121","B-24,North Nazimabad");
var student3 = new Student("Hiba","Hibazuhra@gmail.com","131","B-45,Nazimabad");

// console.log(student2.studentDetails());
// in checks prototype and hasOwnproperty does not check prototype only given one check
console.log(Object.keys(student1));
console.log(Object.values(student1));
console.log(Object.entries(student1));



