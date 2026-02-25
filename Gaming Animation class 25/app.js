Swal.fire({
  icon: 'info',
  title: '🥊 Fighter Game Controls',
  html: `
    <h3>🎮 Player 1</h3>
    <p>
      ⬆️ Move Up : <b>W</b><br>
      ⬇️ Move Down : <b>S</b><br>
      ➡️ Forward : <b>D</b><br>
      ⬅️ Back : <b>A</b>
    </p>

    <hr>

    <h3>🎮 Player 2</h3>
    <p>
      ⬆️ Move Up : <b>↑ Arrow</b><br>
      ⬇️ Move Down : <b>↓ Arrow</b><br>
      ➡️ Forward : <b>→ Arrow</b><br>
      ⬅️ Back : <b>← Arrow</b>
    </p>
  `,
  confirmButtonText: 'Start Game 🚀'
});
var player1 = document.getElementById("img1");
var player2 = document.getElementById("img2");
var left = 0;
var right = 0;
function moveChar(){
  // Player 1
  if(event.key === "d" && left < 500){
    left +=10;
    player1.style.left = left +"px";
    player1.src = "assets/brian-walkforward.gif";
    setTimeout(() => {
      player1.src = "assets/brianbattler-stance98.gif";
    }, 1000)
   }
   if(event.key === "a" && left > 10){
left -=10;
    player1.style.left = left +"px";
    player1.style.transform = "scaleX(-1)";
    setTimeout(() =>{
      player1.style.transform = "scaleX(1)";
    },1000);
   }
   if(event.key === "w"){
    player1.src = "assets/brian-dumb-attack.gif";
    setTimeout(() =>{
player1.src = "assets/brianbattler-stance98.gif";
    },3500);
   }
   if(event.key === "x"){
    player1.src ="assets/brian-taunt.gif";
    setTimeout(() =>{
player1.src = "assets/brianbattler-stance98.gif";
    },3500);
   }
  // Player 2

  if(event.key === "ArrowLeft" && right < 500 ){
    right +=10;
    player2.style.right = right +"px";
    player2.src = "assets/rolento-final-fight-mame-capcom.gif";
    setTimeout(() => {
      player2.src = "assets/rolento-grn-taunt.gif";
    }, 1000)
   }
   if(event.key === "ArrowRight" && right > 50){
right -=10;
    player2.style.right = right +"px";
    player2.src = "assets/rolento-final-fight-mame-capcom.gif";
    player2.style.transform = "scaleX(-1)";
    setTimeout(() =>{
      player2.style.transform = "scaleX(1)";
      player2.src = "assets/rolento-grn-taunt.gif";
    },1500);
   }
   if(event.key === "ArrowUp"){
    player2.src = "assets/knife.gif";
    setTimeout(() =>{
player2.src = "assets/rolento-grn-taunt.gif";
    },3500);
   }
   if(event.key === "ArrowDown"){
    player2.src ="assets/rolento-spin-hits.gif";
    setTimeout(() =>{
player2.src = "assets/rolento-grn-taunt.gif";
    },3500);
   }
}
window.onkeydown = moveChar;


