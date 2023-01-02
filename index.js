var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6+1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=("🍾Player 1 Won ");
    document.querySelector("h1").style.color= " #F761d1";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML=("🍾Player 2 Won ");
    document.querySelector("h1").style.color= " #F761A1";
}else{
    document.querySelector("h1").innerHTML=("Draw");
}
