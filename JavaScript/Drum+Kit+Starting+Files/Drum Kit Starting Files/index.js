

// var nuOfDrum=document.querySelectorAll(".drum").length;

// for(var i=0;i<nuOfDrum;i++)
// {   
// document.querySelectorAll(".drum")[i].addEventListener("click",function()
// {
//     var audio=new Audio("sounds/tom-1.mp3");
//     audio.play();
//     (this.style.color = "black"); 
// });
// }


//when a single class is exist them always give its index as zero.
/*
document.querySelectorAll(".w")[0]/* zero is give to understand the first index *//*.addEventListener("click",function()

{
        var audio=new Audio("sounds/tom-1.mp3"); //audio tag to play audio.
        audio.play(); 
    });
    document.querySelectorAll(".a")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play(); 
    });

    document.querySelectorAll(".s")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play(); 
    });

    document.querySelectorAll(".d")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play(); 
    });

    document.querySelectorAll(".j")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/snare.mp3");
        audio.play(); 
    });
    document.querySelectorAll(".k")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/crash.mp3");
        audio.play(); 
    });

    document.querySelectorAll(".l")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play(); 
    });
*/




/*

    document.querySelectorAll(".drum")[0].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[1].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[2].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[3].addEventListener("click",function()
    {
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[4].addEventListener("click",function()
    {
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[5].addEventListener("click",function()
    {
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
    });
    document.querySelectorAll(".drum")[6].addEventListener("click",function()
    {
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
    });
    
    */





/* BY USING SWITCH CASES.*/

/*
var nuOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<nuOfDrum;i++)
{   
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{

var innerBUTTON = this.innerHTML

switch (innerBUTTON) {

    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

    case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

    case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

    case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default:
        console.log(innerBUTTON);
}

})
};
*/

var nuOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<nuOfDrum;i++)
{   
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}

//key press syntax.
document.addEventListener("keypress",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key)
{
    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
    
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
    
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
    
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
    
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
    
        default:
            console.log(innerBUTTON);
    }
}

//Animation part 
function buttonAnimation(currkey)
{
    var activeButton = document.querySelector("."+currkey);
    activeButton.classList.add("pressed");
    //To add the animation.
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    //To remove the animation.    
    },100);
}
