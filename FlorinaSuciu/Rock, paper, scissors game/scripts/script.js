var gameOptions = ["rock", "paper", "scissors"];
var gameDisplays = ["Play again!", "User wins!", "Computer wins!"]

function play() {
  //pick random option for computer
  var computerChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  console.log("Computer:", computerChoice);
  //pick a random option for user
  var userChoice = gameOptions[Math.floor(Math.random()*gameOptions.length)];
  console.log("User:", userChoice);
  //apply game rules
  if (computerChoice === userChoice) {
    console.log(gameDisplays[0]);
  } else if (computerChoice === gameOptions[0]) {
      if(userChoice === gameOptions[1]) {
        console.log(gameDisplays[1]);
      } else {
        console.log(gameDisplays[2]);
      } 
  } else if (computerChoice === gameOptions[1]) {
      if (userChoice === gameOptions[0]) {
        console.log(gameDisplays[2]);
      } else {
        console.log(gameDisplays[1]);
      }
  } else if (computerChoice === gameOptions[2]) {
     if (userChoice === gameOptions[0]) {
       console.log(gameDisplays[1]);
     } else {
       console.log(gameDisplays[2])
     }
  }
}


play();