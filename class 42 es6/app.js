// call back hell

function greet(fName ,callBack){
    console.log(fName);
    callBack()
    
}
function hello(){
    console.log("i am here");
    
}
greet("Maheen", hello);

function calculate(a,b,multiply){
    return multiply()
}
