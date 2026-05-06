// let info = ["Maheen","Bsc","ku","modeve Desing"]
// // let information = [username , edu, intitute, company]= info
// let [username , edu, intitute, company]= info
// console.log(username);


// clousers

function handler(size){
    return function(){
        document.getElementById("heading").style.fontSize = `${size}`;
    } 

}
one.onclick = handler("20px");
two.onclick = handler("30px");
three.onclick = handler("40px");

