// flag variable we give flag any value iniatlly but make sure to change in if block



// var stdn = ["maheen", "hareem", "huda", "hiba"];
// var userName = prompt("enter your name");
// var flag = false;

// for(var i = 0 ; i< stdn.length ; i++){
//     if(userName.toLowerCase()=== stdn[i].toLowerCase()){

//         flag = true;
//         break;
//         }
// }
// if(flag){
//     console.log(userName + " is found at index " + i);
    
// }
// else{
//     console.log(userName + "  not found");
    
// }
// for(var i = 0 ; i< stdn.length ; i++){
//     if(userName.toLowerCase()=== stdn[i].toLowerCase()){

//         flag = true;
//          console.log(userName + " is found at index " + i);
//         break;
//         }
// }
// if(!flag){
//     console.log(userName + "  not found");
    
// }

// ****
// ****
// ****
// ****

// for(var i=0 ; i<4 ; i++){
//     for(var j= 0 ; j<4 ; j++){
//         document.write("*")
        
        
//     }
//     document.write("<br>")
// }
//   *
//  ***
// *****

for(var i = 1 ; i<6 ; i++){ 
    for(k = 0 ; k < 5 - i ; k++){
        document.write("5")
    }      
    for(var j =0 ; j< i ; j++){
        document.write("*");
       
    
    
    }
    document.write("<br>")
}

