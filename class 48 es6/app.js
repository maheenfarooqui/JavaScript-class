// programming paradiagm


// class and object
// its just like construtor object but isme hame prototype wala problem nhe hota wo class contrutor khudi handle kr lyta hy

// class Person {
//     constructor(name , rollNo,course){
//         this.name = name;
//         this.rollNo=rollNo;
//         this.course=course;
//     }
//     constructorInfo(){
//         console.log(`Construtor name is ${this.name} and roll no is ${this.rollNo}`);
        
//     }
// }
// let student = new Person("Mahen",123,"web dev")
// console.log(student);


// Pillars of OOP in JavaScript

// 1. 🔒 Encapsulation

// class Atm {
//     #balance=1000;
//     withdraw(amount){
//         this.#balance -= amount
//         console.log(`withdraw amount ${amount}`);
//         }
//     checkBlance(){
//         console.log(this.#balance);
        
//     }
// }
// let blance = new Atm()
// console.log(blance.withdraw(200));
// console.log(blance.checkBlance());

// 2. 🧬 Inheritance

class Animal {
    constructor(animalName){
        this.animalName = animalName
    }
    eat(){
        console.log(`${this.animalName} is eating`);
        
    }
    sleep(){
        console.log(`${this.animalName} is sleeping`);
        
    }
}

class Cat extends Animal{
    constructor(animalName){
        super(animalName)
    }
}

let cat = new Cat("cat");
cat.eat()
cat.sleep();




