var imgTag = document.getElementById("imgFlower");
var arr =["img.jpg","img1.jpg","img2.jpg"];
var index = 0;
function nextImg(){
    if(index === arr.length -1 ){
        index = 0;
    }else{
index++;
    }

imgTag.src = arr[index];
}
function previousImg(){
    if(index === 0 ){
        index = arr.length -1;
    }else{
index--;
    }

imgTag.src = arr[index];
}