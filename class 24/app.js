var inp =document.getElementById("inp");
function submitVal(){
    console.log(inp.value);
    Swal.fire({
  title: "Good job!",
  text: "You submited form!",
  icon: "success"
});
// inp.value=""
    

}
function formAcc(){
    console.log(event);
    // console.log(event.key ,event.KeyCode);
    
    
    if(event.keyCode === 13){
        submitVal()
    }
}