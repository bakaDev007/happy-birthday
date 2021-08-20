
var sign= document.querySelector("img");

function signDance(deg) 
{
    sign.style.transform="rotate("+deg+"deg) translate(0,-15%)";
    deg=-deg;
    setTimeout(function(){requestAnimationFrame(function(){signDance(deg)});
    },500);
}
signDance(5);

var button = document.querySelector('button');
var candle= document.querySelector("#candle");
var sen=document.querySelector('#sen');
button.onclick=function()
{
    candle.src="../images/tuh.gif";
    button.parentElement.removeChild(button);
    setTimeout(function(){
        candle.src="../images/died.png";
        setTimeout(function(){sen.style.visibility="visible";},4000)
    },2500);

}
