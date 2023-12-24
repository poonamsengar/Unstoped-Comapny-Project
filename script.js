function DecstopedMode(){
  // alert("hello")
  window.location.href="index.html"

}
function mobileRes(){
  window.location.href="mobile.html"

}

console.log("Screen Width: " + screen.width);

function reportWindowSize(){
  console.log(screen.width)
  if(screen.width<=751){
         mobileRes();
  }
  else{
    DecstopedMode()
  }
}
window.addEventListener("resize",reportWindowSize);

