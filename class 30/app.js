var box =document.createElement("div");
box.setAttribute("id", "box");
var imgE =document.createElement("img");
imgE.setAttribute("src","img.jpg");
box.appendChild(imgE);
console.log(box);
var mainBox = document.getElementById("main");
mainBox.appendChild(box);