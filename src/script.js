let screen = document.querySelector("canvas");
let buttonNewGame = (document.getElementById(
  "btn-new-game"
).style.display = "none");
let btnExitHidden = (document.getElementById("btn-exit").style.display =
  "none");
let divAddWord = (document.getElementById(
  "add-word"
).style.display = "none");
let btnNewGame = document.getElementById("btn-new-game");
let btnExit = document.getElementById("btn-exit");
let btnCancel = document.getElementById("btn-cancel");

let words = [
  "SQUEEZE",
  "SUSPEND",
  "CLOUDY",
  "PARALLEL",
  "SCRAPE",
  "PUPPY",
  "HORSES",
  "SEDATE",
  "GUARDED",
  "PART",
  "NAME",
  "SOLID",
  "QUEUE",
  "ALIKE",
  "HOME",
  "TALENTED",
  "INCREASE",
  "SILKY",
  "RUDE",
  "HYPNOTIC",
  "KITTEN",
  "RABBIT",
  "OILY",
  "DELICIOUS",
  "SNOW",
  "STICKY",
  "VIEW",
];

const table = document.getElementById("hangman").getContext("2d");
let secretWord = "";
let letters = [];
let rightWord = "";
let errors = 8;
let incorrectLetters = [];
let numErrors = 8;
let chosenLetter = [];


document.getElementById("start-game").onclick = () => {
  startGame();
};

document.getElementById("btn-save").onclick = () => {
  saveWord();
};

btnNewGame.addEventListener("click", function () {
  location.reload();
});

btnExit.addEventListener("click", function () {
  location.reload();
});

btnCancel.addEventListener("click", function () {
  location.reload();
});

function pickSecretWord() {
  let word = words[Math.floor(Math.random() * words.length)];
  secretWord = word;
  return word;
}

function verifyClickedLetter(key) {
  if (letters.length < 1 || letters.indexOf(key) < 0) {
    letters.push(key);
    return false;
  } else {
    letters.push(key);
    return true;
  }
}

function addRightLetter(i) {
  rightWord += secretWord[i].toUpperCase();
}

function addWrongLetter(letter) {
  if (secretWord.indexOf(letter) <= 0) {
    errors -= 1;
  }
}

function verifyEndGame(letter) {
  if (chosenLetter.length < secretWord.length) {
    incorrectLetters.push(letter);

    if (incorrectLetters.length > numErrors) {
      youLose();
    } else if (chosenLetter.length < secretWord.length) {
      addWrongLetter(letter);
      writeWrongLetter(letter, errors);
    }
  }
}

function verifyWinner(letter) {
  chosenLetter.push(letter.toUpperCase());
  if (chosenLetter.length == secretWord.length) {
    youWin();
  }
}

function verifyLetter(keyCode) {
  if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
    return true;
  } else {
    return false;
  }
}

function screenAddWord() {
  document.getElementById("div-hidden").style.display = "none";
  document.getElementById("add-word").style.display = "block";
}

function saveWord() {
  let newWord = document.getElementById("input-new-word").value;

  if (newWord !== "") {
    words.push(newWord.toUpperCase());
    alert("Word added successfully!");

    document.getElementById("add-word").style.display = "none";
    startGame();
  } else {
    alert("No word was found.");
  }
}

function startGame() {
  document.getElementById("div-hidden").style.display = "none";

  drawCanvas();
  pickSecretWord();
  drawLine();

  document.getElementById("btn-new-game").style.display = "block";
  document.getElementById("btn-exit").style.display = "block";

  document.onkeydown = (e) => {
    let letter = e.key.toUpperCase();
    if (incorrectLetters.length <= numErrors) {
      if (!verifyClickedLetter(e.key) && verifyLetter(e.keyCode)) {
        if (secretWord.includes(letter)) {
          addRightLetter(secretWord.indexOf(letter));
          for (let i = 0; i < secretWord.length; i++) {
            if (secretWord[i] === letter) {
              writeRightLetter(i);
              verifyWinner(letter);
            }
          }
        } else {
          if (!verifyClickedLetter(e.key) && !verifyWinner(letter))
            return;
          drawHangman(errors);
          verifyEndGame(letter);
        }
      }
    } else {
    }
  };
}
