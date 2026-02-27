// if you see array so to get element always loop laga do
// function sumbitForm() {
//   var gender = document.getElementsByName("gender");
//   for (var i = 0; i < gender.length; i++) {
//     if (gender[i].checked) {
//       console.log(gender[i].value);
//     }
//   }
// }
function seeMore() {
  var para = document.getElementById("para");
  var shortText =
    " Wikipedia, a free-content online encyclopedia written and maintained by a community of volunteers known as Wikipedians, began with its first edit on 15 January 2001, two days after the domain was registered";
var text = "Wikipedia, a free-content online encyclopedia written and maintained by a community of volunteers known as Wikipedians, began with its first edit on 15 January 2001, two days after the domain was registered.[2] It grew out of Nupedia, a more structured free encyclopedia,  as a way to allow easier and faster drafting of articles and translations. The technological and conceptual underpinnings of Wikipedia predate this; the earliest known proposal for an online encyclopedia was made by Rick Gates in 1993,[3] and the concept of a free-as-in-freedom online encyclopedia (as distinct from mere open source)[4] was proposed by Richard Stallman in "
var button =document.getElementById("seeMore");
if(button.innerHTML === "See More"){
    para.innerHTML = text;
    button.innerHTML = "See Less";
}
else if(button.innerHTML === "See Less"){
    para.innerHTML = shortText;
    button.innerHTML = "See More";
}

}
