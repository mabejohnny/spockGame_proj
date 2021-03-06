"use strict";

//prompt asking whether the user is playing single or multiplayer (switchcase for multiplayer)
//single player game:
//welcome! plus ask for name to pass down
//display the rules
//display rules multi
//prompt choices (rock,paper,spock)
//computer random choice
//compare user choice/random choice
//whoever wins that rount alert
//add counter for winner
//loop back and do it again
//best of three
//counter for 1 point added for each win

class Game {
  constructor() {}
  //choose whether or not game is single/multi (contains while loop for best out of three)
  runGame() {
    this.chooseSingleOrMultiPlayer();
    while (this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneGesture = this.playerOne.chooseGesture();
      let playerTwoGesture = this.playerTwo.chooseGesture();
      this.letsDoTheMathToFindAWinner(playerOneGesture, playerTwoGesture);
    }
    this.displayGameWinner();
    this.wantToPlayAgain();
  }
  //prompt for user to choose single or multi player
  chooseSingleOrMultiPlayer() {
    let chooseSingleOrMultiPlayer = prompt(
      "Welcome to the classic game Rock Paper Scissors Lizard Spock!" +
        "\n" +
        "For single player, type: '1'" +
        "\n" +
        "For multi-player, type: '2'"
    );

    switch (chooseSingleOrMultiPlayer) {
      case "1":
        this.playerOne = new Human();
        this.playerTwo = new Computer();
        chooseSingleOrMultiPlayer = this.getTheSinglePlayersName();
        break;
      case "2":
        this.playerOne = new Human();
        this.playerTwo = new Human();
        chooseSingleOrMultiPlayer = this.getBothPlayerNames();
        break;
      default:
        this.chooseSingleOrMultiPlayer();
        break;
    }
  }
  //prompt for single player name
  getTheSinglePlayersName() {
    this.playerOne.name = prompt("Please enter your name:");
    alert(
      "Welcome to the game " +
        this.playerOne.name +
        "!" +
        "\n" +
        "I am comPute_R.  The artificial intelligence that will be beating you today "
    );
    this.displayRulesForSinglePlayer();
  }
  //prompt for multi player game
  getBothPlayerNames() {
    this.playerOne.name = prompt("Enter the name of 'Player One':");
    this.playerTwo.name = prompt("Enter the name of 'Player Two':");
    alert(
      "Welcome to the game " +
        this.playerOne.name +
        " and " +
        this.playerTwo.name +
        "!"
    );

    this.displayRulesForMultiPlayer();
  }
  //rules for single player
  displayRulesForSinglePlayer() {
    alert(
      "Welcome to your worst nightmare " +
        this.playerOne.name +
        "!" +
        "\n" +
        "Remember me, ahh yes, your good ol' archenemy comPute_R! Ill be your captain this evening. " +
        "\n" +
        "- Each round will be worth one point" +
        "\n" +
        "- The first player (which will be comPute_R) to win 2 out of 3 rounds will win the game!"
    );

    alert(
      "Remember! " +
        "\n" +
        "Rock crushes Scissors" +
        "\n" +
        "Scissors cuts Paper" +
        "\n" +
        "Paper covers Rock" +
        "\n" +
        "Rock crushes Lizard" +
        "\n" +
        "Lizard poisons Spock" +
        "\n" +
        "Spock Smashes Scissors" +
        "\n" +
        "Scissors decapitates Lizard" +
        "\n" +
        "Lizard eats Paper" +
        "\n" +
        "Paper disproves Spock" +
        "\n" +
        "Spock vaporizes Rock"
    );
    alert(
      "Ohh, and one more thing... comPute_R DESTROYS " +
        this.playerOne.name +
        "!"
    );
  }
  //rules for multi player
  displayRulesForMultiPlayer() {
    alert(
      this.playerOne.name +
        ", you will go first." +
        "\n" +
        this.playerTwo.name +
        ", you will go second" +
        "\n" +
        "" +
        "\n" +
        "- Each round will be worth one point" +
        "\n" +
        "- The first player to win 2 out of 3 rounds will win the game!"
    );

    alert(
      "Remember! " +
        "\n" +
        "Rock crushes Scissors" +
        "\n" +
        "Scissors cuts Paper" +
        "\n" +
        "Paper covers Rock" +
        "\n" +
        "Rock crushes Lizard" +
        "\n" +
        "Lizard poisons Spock" +
        "\n" +
        "Spock Smashes Scissors" +
        "\n" +
        "Scissors decapitates Lizard" +
        "\n" +
        "Lizard eats Paper" +
        "\n" +
        "Paper disproves Spock" +
        "\n" +
        "Spock vaporizes Rock"
    );
  }
  //prompt for user to choose to play again
  wantToPlayAgain() {
    let userChoice = prompt(
      "It was an epic match between " +
        this.playerOne.name +
        " and " +
        this.playerTwo.name +
        "!" +
        "\n" +
        "\n" +
        "Please select from the following options:" +
        "\n" +
        " Type '1' to play again" +
        "\n" +
        " Type '2' to quit"
    );
    switch (userChoice) {
      case "1":
        game.runGame();
      case "2":
        break;
      default:
        alert("Error: Please try again");
        this.wantToPlayAgain();
    }
  }
  //function to compare P1/P2 gestures/add score/display round winner
  letsDoTheMathToFindAWinner(playerOneGesture, playerTwoGesture) {
    if (playerOneGesture === playerTwoGesture) {
      alert(
        "The computer also chose " +
          playerTwoGesture +
          "\n" +
          "The result is a tie! :|"
      );
    } else if (playerOneGesture === "rock") {
      if (playerTwoGesture === "paper") {
        alert(
          "paper covers rock..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else if (playerTwoGesture === "scissors") {
        alert(
          "rock crushes scissors..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else if (playerTwoGesture === "lizard") {
        alert(
          "rock crushes lizard..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else {
        alert(
          "spock vaporizes rock..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      }
    } else if (playerOneGesture === "paper") {
      if (playerTwoGesture === "rock") {
        alert(
          "paper covers rock..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else if (playerTwoGesture === "scissors") {
        alert(
          "scissors cut paper..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else if (playerTwoGesture === "lizard") {
        alert(
          "lizard eats paper..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else {
        alert("paper disproves spock <br> You Win! :)");
      }
      this.playerTwo.score++;
    } else if (playerOneGesture === "scissors") {
      if (playerTwoGesture === "rock") {
        alert(
          "rock crushes scissors..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else if (playerTwoGesture === "paper") {
        alert(
          "scissors cut paper..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else if (playerTwoGesture === "lizard") {
        alert(
          "scissors decapitate lizard..." +
            this.playerOne.name +
            " wins this round!"
        );
        this.playerOne.score++;
      } else {
        alert(
          "spock smashes scissors..." +
            this.playerTwo.name +
            " wins this round!"
        );
      }
      this.playerTwo.score++;
    } else if (playerOneGesture === "lizard") {
      if (playerTwoGesture === "rock") {
        alert(
          "rock crushes lizard..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else if (playerTwoGesture === "paper") {
        alert(
          "lizard eats paper..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else if (playerTwoGesture === "scissors") {
        alert(
          "scissors decapitate lizard..." +
            this.playerTwo.name +
            " wins this round!"
        );
        this.playerTwo.score++;
      } else {
        alert(
          "lizard poisons spock..." + this.playerOne.name + " wins this round!"
        );
      }
      this.playerOne.score++;
    } else if (playerOneGesture === "spock") {
      if (playerTwoGesture === "rock") {
        alert(
          "spock vaporizes rock..." + this.playerOne.name + " wins this round!"
        );
        this.playerOne.score++;
      } else if (playerTwoGesture === "paper") {
        alert(
          "paper disproves spock..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      } else if (playerTwoGesture === "scissors") {
        alert(
          "spock smashes scissors..." +
            this.playerOne.name +
            " wins this round!"
        );
        this.playerOne.score++;
      } else {
        alert(
          "lizard poisons spock..." + this.playerTwo.name + " wins this round!"
        );
        this.playerTwo.score++;
      }
    }
  }
  //function to display the game winner
  displayGameWinner() {
    if (this.playerOne.score > this.playerTwo.score) {
      alert(this.playerOne.name + " wins this game!");
    } else {
      alert(this.playerTwo.name + " wins this game!");
    }
  }
}
class Gestures {
  constructor() {
    this.Gestures = ["rock", "paper", "scissors", "lizard", "spock"]; //gestures array
  }
}

class Player {
  constructor() {
    this.score = 0;
    this.name;
    this.typeOfGestures = this.typeOfGestures;
    this.Gestures = new Gestures();
  }
}

class Human extends Player {
  //inheritence
  constructor(name) {
    super(name);
  }
  //prompt/switchcase for person to choose gesture
  chooseGesture(chooseGesture) {
    let usersGestureChoice = prompt(
      "Choose your weapon!!!" +
        "\n" +
        "TYPE: '1' for 'rock' " +
        "\n" +
        "TYPE: '2' for 'paper' " +
        "\n" +
        "TYPE: '3' for 'scissors' " +
        "\n" +
        "TYPE: '4' for 'lizard' " +
        "\n" +
        "TYPE: '5' for 'spock' " +
        "\n" +
        "\n" +
        "* To return to the main menu, TYPE: '6' *"
    );

    switch (usersGestureChoice) {
      case "1":
        return "rock";
      case "2":
        return "paper";
      case "3":
        return "scissors";
      case "4":
        return "lizard";
      case "5":
        return "spock";
      case "6":
        game.runGame();
      default:
        game.runGame();
    }
  }
}
class Computer extends Player {
  //inheritence
  constructor(name) {
    super(name);
    this.name = "comPut_R";
  }
  //funtion for computer to generate a random gesture
  chooseGesture() {
    let computerChoice = Math.random();
    if (computerChoice < 0.2) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.4) {
      computerChoice = "paper";
    } else if (computerChoice <= 0.6) {
      computerChoice = "scissors";
    } else if (computerChoice <= 0.8) {
      computerChoice = "lizard";
    } else {
      computerChoice = "spock";
    }
    alert("The computer chose " + computerChoice);
    return computerChoice;
  }
}

let game = new Game();
game.runGame();
