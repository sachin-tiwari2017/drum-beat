
//for mouse clicke
for(var i=0 ; i<document.querySelectorAll(".drum").length ; i++)
{
document.querySelectorAll('.drum')[i].addEventListener('click' , function()
 {
  sound(this.textContent);
 });
}

// for keyboard buttons
document.addEventListener('keydown', function(event)
{
  sound(event.key);
});

function sound(pressOrclick)
{


  switch (pressOrclick) {
    case 'A':
       new Audio("sounds/tom-4.mp3").play();
      break;
    case 'S':
      new Audio("sounds/tom-3.mp3").play();
      break;
    case 'D':
      new Audio("sounds/tom-2.mp3").play();
      break;
    case 'F':
      new Audio("sounds/tom-1.mp3").play();
      break;
    case 'H':
      new Audio("sounds/snare.mp3").play();
      break;
    case 'J':
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case 'K':
      new Audio("sounds/crash.mp3").play();
      break;
    default:
  }

}
/*
               sound by clicking through mouse first method
document.querySelectorAll(".drum")[0].addEventListener("click" , function()
{new Audio("sounds/tom-4.mp3").play() } );

document.querySelectorAll(".drum")[1].addEventListener("click" , function()
{new Audio("sounds/tom-3.mp3").play() } );

document.querySelectorAll(".drum")[2].addEventListener("click" , function()
{new Audio("sounds/tom-2.mp3").play() } );

document.querySelectorAll(".drum")[3].addEventListener("click" , function()
{new Audio("sounds/tom-1.mp3").play() } );

document.querySelectorAll(".drum")[4].addEventListener("click" , function()
{new Audio("sounds/snare.mp3").play() } );

document.querySelectorAll(".drum")[5].addEventListener("click" , function()
{new Audio("sounds/kick-bass.mp3").play() } );

document.querySelectorAll(".drum")[6].addEventListener("click" , function ()
{ new Audio("sounds/crash.mp3").play() } );


//           second method by switch statement

 for(i=0 ; i<document.querySelectorAll(".drum").length ; i++)
{
   document.querySelectorAll(".drum")[i].addEventListener('click' , function()
  {
     var char = alert(this.textContent);  //for finding which event got occured
          this.style.color = "#ffffff";    //for coloring elemetn white when clicked

     var char = this.textContent;
     switch (char) {
       case 'A':
          new Audio("sounds/tom-4.mp3").play();
         break;
       case 'S':
         new Audio("sounds/tom-3.mp3").play();
         break;
       case 'D':
         new Audio("sounds/tom-2.mp3").play();
         break;
       case 'F':
         new Audio("sounds/tom-1.mp3").play();
         break;
       case 'H':
         new Audio("sounds/snare.mp3").play();         break;
       case 'J':
         new Audio("sounds/kick-bass.mp3").play();
         break;
       case 'K':
         new Audio("sounds/crash.mp3").play();
         break;
       default:

     }
 } );


   document.addEventListener('Keydown' , function()
   {
       var char = this.textContent;
       switch (char) {
         case 'A':
           new Audio("sounds/tom-4.mp3").play();
           break;
         case 'S':
           new Audio("sounds/tom-3.mp3").play();
           break;
         case 'D':
           new Audio("sounds/tom-2.mp3").play();
           break;
         case 'F':
           new Audio("sounds/tom-1.mp3").play();
           break;
         case 'H':
           new Audio("sounds/snare.mp3").play();
         break;
         case 'J':
           new Audio("sounds/kick-bass.mp3").play();
           break;
         case 'K':
           new Audio("sounds/crash.mp3").play();
           break;
         default:

       }
   } );

 }
 document.querySelectorAll(".drum")[0].addEventListener("click" , function()
 {new Audio("sounds/tom-4.mp3").play() } );

document.addEventListener('mouseover' , function ()
{
  alert('i got clicked');
});
*/
