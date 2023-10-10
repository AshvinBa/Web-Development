// Player - 1.

var randomNumber1=Math.floor(Math.random() * 6) + 1;  // to generate no btn 1-6 except(0.9,0.2).

var randomDiceImage = "dice" + randomNumber1 + ".png";  // to randomly change our images.

var randomImageSource = "images/" + randomDiceImage;  // for image changing

var image1= document.querySelectorAll("img")[0];  // for first image slot change

image1.setAttribute("src",randomImageSource);  //  Applying the following process

// Player - 2.

var randomNumber2=Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

// To check whether that who is the winner of the Gamepad.

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player1 Wins.";
}
else if(randomNumber1 === randomNumber2)
{
    document.querySelector("h1").innerHTML="Match Draw."
}
else
{
    document.querySelector("h1").innerHTML="Player2 wins.";
}