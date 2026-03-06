var container = document.getElementsByClassName("container")[0];
console.log(container);
var box1 = container.childNodes[3]
console.log(box1);
var body = box1.parentNode.parentNode
console.log(body);

var content =document.getElementById("form-content");
var child = document.getElementById("last-name")
var box = document.getElementById("result")
var maincontent = document.getElementById("main-content")
var lastNAme = document.getElementById("lastName");
var email = document.getElementById("email");

var typeC =content.nodeType;
var typeofChild = child.nodeType;
var mainChild = maincontent.firstElementChild
var lastChild = maincontent.lastElementChild
var lastSibling = lastNAme.nextElementSibling;
var firstSibling = lastNAme.previousElementSibling;
var parentE = email.parentElement
var parentType = email.parentElement.nodeType

console.log(parentType);



box.innerHTML = `<h3> ${typeC}</h3>
<h3> ${typeofChild}</h3>
<h3> ${mainChild.innerHTML}</h3>
<h3> ${lastChild.innerHTML}</h3>
<h3> ${lastSibling.innerHTML}</h3>
<h3> ${firstSibling.innerHTML}</h3>
<h3> ${parentE.innerHTML}</h3>
<h3> ${parentType}</h3>`

