var index = 0;
var answer = [];
var score = 0;
var questions = [
  {
    question: "Q1: Which keyword is used to declare a variable in JavaScript?",
    opt1: "var",
    opt2: "int",
    opt3: "string",
    opt4: "declare",
    answer: "var",
  },
  {
    question:
      "Q2: Which method is used to add an element at the end of an array?",
    opt1: "pop()",
    opt2: "push()",
    opt3: "shift()",
    opt4: "unshift()",
    answer: "push()",
  },
  {
    question: "Q3: What will typeof null return in JavaScript?",
    opt1: "null",
    opt2: "undefined",
    opt3: "object",
    opt4: "string",
    answer: "object",
  },
];

function nextQ() {
  var selectedOpt = document.querySelector("input[name = 'option']:checked");
  if (!selectedOpt) {
    alert("check the box");
    return;
  }

  answer[index] = selectedOpt.value
  
  

  if (index < questions.length - 1) {
    index++;
    displayQuestion();
  } else {
    document.getElementById("quizQontainer").style.display = "none";
    document.getElementById("sumbitbtn").style.display = "block";
    document.getElementById("sumbitbtn").innerHTML =
      `<h2>Do You Really Want To Submit Your Quiz ? </h2>
        <div class="btn">
            <button onclick="goBack()">Go Back</button>
            <button onclick="sumbitQuize()">sumbit</button>
        </div>`;
  }
}
function sumbitQuize() {
    score = 0;
    for(var i = 0 ; i < questions.length; i++){
        if(answer[i] === questions[i].answer){
            score++
        }
    }
  
  var percentage = (score / questions.length) * 100;
  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML =
    `<h2>your result  is ${percentage.toFixed(1)} out of ${questions.length}</h2>`;
}
function goBack() {
  document.getElementById("quizQontainer").style.display = "block";
  document.getElementById("result").style.display = "none";
  displayQuestion();
  document.getElementById("sumbitbtn").style.display = "none";
}
function previousQ() {
  if (index > 0) {
    index--;
    displayQuestion();
  } else {
    alert("quize finsidhed");
  }
}
function displayQuestion() {
  document.getElementById("quizQontainer").innerHTML = `
<div class="quiz">
            <h2>${questions[index].question} </h2>
            <label><input type="radio" name="option"  value="${questions[index].opt1}">${questions[index].opt1}</label>
            <label><input type="radio" name="option" value="${questions[index].opt2}">${questions[index].opt2} </label>
            <label><input type="radio" name="option" value="${questions[index].opt3}">${questions[index].opt3} </label>
            <label><input type="radio" name="option" value="${questions[index].opt4}">${questions[index].opt4} </label>
        </div>
        <div class="buttons">
            <button onclick = "previousQ()">Previous</button>
            <button onclick="nextQ()">Next</button>
        </div>`;
}
displayQuestion();
