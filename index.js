// for (var i = 0; i < 7; i++) {  // Use |||| (i < document.querySelectorAll("".drum").length)
//   document.querySelectorAll("button")[i].addEventListener("click" , function() {
//     var audio = this.innerHTML;
//     // var audio = new Audio('sounds/tom-1.mp3');
//     // audio.play();
//     switch (audio) {
//       case "w":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//         break;
//       case "a":
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//         break;
//         case "s":
//         var tom2 = new Audio('sounds/tom-2.mp3');
//         tom2.play();
//           break;
//           case "d":
//           var tom3 = new Audio('sounds/tom-3.mp3');
//           tom3.play();
//             break;
//             case "j":
//             var tom4 = new Audio('sounds/tom-4.mp3');
//             tom4.play();
//               break;
//               case "k":
//               var ki = new Audio('sounds/kick-bass.mp3');
//               ki.play();
//                 break;
//                 case "l":
//                 var sn = new Audio('sounds/snare.mp3');
//                 sn.play();
//                   break;
//       default:
//           console.log(audio);
//
//     }
//   });
//
// }
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
