let userData = fetch("https://api.github.com/users/maheenfarooqui");
// console.log(userData);

// userData.then((result)=>{
//     return result 
    
// }).then((result) => {

//     console.log(result);
//   })
//   .catch((error) => {
//     console.error("Data fetch karne mein error aya:", error);
//   });

async function asynFunctionuse(){
    
    try{
        let myPromise = await userData;
        console.log(myPromise);

    }
    catch(error){
        console.log("error hy",error);
        
}
}
asynFunctionuse()

