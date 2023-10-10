var randomNumber=Math.floor(Math.random()*2)+1; 

var randomtossImage = "toss" + randomNumber + ".jpeg";

var randomImageSource = "images/" + randomtossImage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

if(randomNumber>1)
{
    document.querySelector("h1").innerHTML="Tail";
}
else
{
    document.querySelector("h1").innerHTML="Head";
}