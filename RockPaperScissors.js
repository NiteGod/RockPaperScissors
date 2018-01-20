
//Randomly return either rock, paper, or scissors
  function computerPlay(){
  let hand = ['rock', 'paper', 'scissors'];
  return hand[Math.floor(Math.random() * 10 % 3)];
}

//Play the game!
function play(playerSelection, computerSelection){
  //check for correct input type
  if(typeof playerSelection != 'string'){
    return [null, "That doesn't even make sense!  Try again!"];
  };
  //change to lower case (no longer needed with gui)
  playerSelection = playerSelection.toLowerCase();
  //Various hand outcomes
  if(playerSelection == 'rock'){
    if(computerSelection == 'rock'){
      return ['d', "It's a draw."];
    }
    else if(computerSelection == 'paper'){
      return ['l', "You lose!  Paper covers Rock!"];
    }
    else{
      return ['w', "You win!  Rock crushes Scissors!"];
    }
  }

  else if(playerSelection == 'paper'){
    if(computerSelection == 'rock'){
      return ['w', "You win!  Paper covers Rock!"];
    }
    else if(computerSelection == 'paper'){
      return ['d', "It's a draw."];
    }
    else{
      return ['l', "You lose!  Scissors cuts Paper!"];
    }
  }

  else if(playerSelection == 'scissors'){
    if(computerSelection == 'rock'){
      return ['l', 'You lose!  Rock crushes Scissors!'];
    }
    else if(computerSelection == 'paper'){
      return ['w', "You win!  Scissors cuts Paper!"];
    }
    else{
      return ['d', "It's a draw."];
    }
  }

  else{
    return [null, 'You have to enter rock, paper, or scissors!  Try again...'];
  }

}

function addListeners(){
  const buttons = document.querySelectorAll('.rps_button');
  const pScoreDisplay = document.querySelector('.p_score');
  const cScoreDisplay = document.querySelector('.c_score');
  console.log(pScoreDisplay);
  console.log(cScoreDisplay);

  let playerWins = 0;
  let cpuWins = 0;
  let round = 0;

  buttons.forEach((input) => {
    input.addEventListener('click', (e) => {
      let cpuChoice = computerPlay();
      let outcome = play(input.id, cpuChoice);
     //Invalid choice.  Do nothing.
      if(outcome[0] == null){}
      //Player draw. Increase round.
      else if(outcome[0] == 'd'){
        round++;
      }
      //Player wins.  Increase round and player wins.
      else if(outcome[0] == 'w'){
        round++;
        playerWins++;
      }
      //Computer wins.  Increase round and computer wins.
      else if(outcome[0] == 'l'){
        round++;
        cpuWins++;
      }

      pScoreDisplay.innerHTML = cpuWins;
      cScoreDisplay.innerHTML = playerWins;

      console.log(cpuChoice + "\n" + outcome + "\n" + playerWins + "\n" + cpuWins + "\n" + round);

      //Return result of the hand and win/loss record
      //alert("Player picked: " + playChoice + "\nComputer picked: " + cpuChoice + "\n" + outcome[1] + "\nYou have won " + playerWins + " and the computer has won " + cpuWins + " matches");
    //}
/**
    if(playerWins > cpuWins){
      alert("Congrats!  You win!")
    }
    else if(playerWins < cpuWins){
      alert("Too bad you're a loser!  Try again!")
    }
    else{
      alert("It's a tie.  Well...that was pointless...")
    }
*/
    });
  });

}

function game(){
  let playerWins = 0;
  let cpuWins = 0;
  let round = 0;

  console.log(addListeners());

  if(playerWins > cpuWins){
    alert("Congrats!  You win!")
  }
  else if(playerWins < cpuWins){
    alert("Too bad you're a loser!  Try again!")
  }
  else{
    alert("It's a tie.  Well...that was pointless...")
  }
}
