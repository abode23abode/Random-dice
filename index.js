
function game(){

  var first_dice =Math.ceil(Math.random()*6);
  var second_dice =Math.ceil(Math.random()*6);
  document.querySelector(".img1").setAttribute("src","images/dice"+first_dice+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+second_dice+".png");
  if(first_dice>second_dice)
  {
   document.querySelector("h1").innerHTML="🚩 Player1 Win!"
  }
  else if(first_dice<second_dice)
  {
   document.querySelector("h1").innerHTML="Player2 Win! 🚩"
  }
  else{
   document.querySelector("h1").innerHTML="Draw!"
  }
}
 
 $(document).on("click",game)

 $(document).on("keyup",game)
