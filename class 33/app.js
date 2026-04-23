// var stdn ={
//     stdName : "maheen",
//     class : 12,
//     rollNo : 1234,

// }

// fo of loop use in array and its alaways print values. 

// var arr = [1,2,3,4,5,6,7];
// for(var values of arr){
//     console.log(values);
    
// }


// for in loop use in object and its get keys



var stdn ={
    stdName : "maheen",
    class : 12,
    rollNo : 1234,

}
// other method to get object value 

// console.log(stdn["class"]);

// for(var keys in stdn){
//     console.log(`${stdn[keys]}: ${keys}`);
    
// }


var userDetail = {
    userNAme : "maheen",
    userAge : 32,
    userID : 2345,
    courses: ["wma","grd"],
    userAddres : {
        city : "karachi",
        area : "north nazimabad"
    }
}

for(var keys in userDetail){
    if(keys.isArray){
    }
   if(typeof userDetail[keys] === "object"){
   for(var innerkeys in userDetail[keys]){
    console.log(`${keys}: ${userDetail[keys][innerkeys]}`);
    
   }
        
    }
    else{
        console.log(`${keys} : ${userDetail[keys]}`);
        
    }
    

   }
    

