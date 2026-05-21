// iterator used for control in loops 


// let myArray = ["Maheen","Hareem","Hiba","Hania"];
// let iterate = myArray[Symbol.iterator()];

// let iterateMethod = myFucntion(myArray);

// generators used for control in functions

function* myNUm(){
    console.log("hellow world");
    yield "how are you?"
    
    
}
let ge = myNUm();
console.log(ge.next());
