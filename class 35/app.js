function login() {
  var username = document.getElementById("name").value;
  var useremail = document.getElementById("email").value;
  var userpassword = document.getElementById("password").value;
  localStorage.setItem("name", username);
  localStorage.setItem("email", useremail);
  localStorage.setItem("userpassword", userpassword);
  document.getElementById("display").innerHTML = `    <h1>LogIn</h1>
    <form>
        <input type="name" placeholder="Enter your Name" id="name">
        <input type="email" placeholder="Enter your Email" id="email">
        <input type="password" placeholder="Enter your password" id="password">
        <button type="button" onclick="sinup()">Login</button>
    </form>`;
}
function sinup() {
  var username = document.getElementById("name").value;
  var useremail = document.getElementById("email").value;
  var userpassword = document.getElementById("password").value;
  localStorage.setItem("name", username);
  localStorage.setItem("email", useremail);
  localStorage.setItem("userpassword", userpassword);
  var useN = localStorage.getItem(name);
  var useE = localStorage.getItem(email);
  var useP = localStorage.getItem(userpassword);
  if (useN === username && useE === useremail && useP === userpassword) {
    alert("login Succefull");
  } else {
    alert("error");
  }
}
