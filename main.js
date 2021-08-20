var video=document.querySelector("video");
var show=document.querySelector("#show");
var button=document.querySelector('button');
button.onclick=function(){
    button.parentElement.removeChild(button);
    show.style.visibility="visible";
    video.play();
    setTimeout(function()
    {
        video.parentElement.removeChild(video);
        show.style.visibility="visible";
        setTimeout(function(){window.location.replace("cake/index.html");},4000);
    },3000);
}