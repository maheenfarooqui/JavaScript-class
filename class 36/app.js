    function divide(a,b){
        if(b === 0){
        throw new Error ("b cannot be zero")
    }
    return a/b
   
}
try{
console.log(divide(4,0));

 
}catch(error){
    console.log(error);
    
}


