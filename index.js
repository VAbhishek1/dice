var first= Math.floor((Math.random()*6)+1);
var second= Math.floor((Math.random()*6)+1);
var image1="images/dice"+first+".png";
document.querySelector(".img1").setAttribute("src",image1);
var image2="images/dice"+second+".png";
document.querySelector(".img2").setAttribute("src",image2);
if(first===second){
    document.querySelector("h1").innerHTML="draw";

}
else if(first>second){ 
    document.querySelector("h1").innerHTML="player 1 wins";

}
else
{
    document.querySelector("h1").innerHTML="Player 2 wins";

}