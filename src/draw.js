function drawCanvas() {
  table.lineWidth = 8;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.fillStyle = "#b3e59f";
  table.strokeStyle = "#146940";
  table.fillRect(0, 0, 1200, 800);
  table.beginPath();
  table.moveTo(650, 500);
  table.lineTo(900, 500);
  table.stroke();
  table.closePath();
}

function drawLine() {
  table.lineWidth = 6;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.strokeStyle = "#146940";
  table.beginPath();
  let w = 600 / secretWord.length;
  for (let i = 0; i < secretWord.length; i++) {
    table.moveTo(500 + w * i, 640);
    table.lineTo(550 + w * i, 640);
  }
  table.stroke();
  table.closePath();
}
function writeRightLetter(index) {
  table.font = "bold 52px Inter";
  table.lineWidth = 6;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.fillStyle = "#146940";
  let w = 600 / secretWord.length;
  table.fillText(secretWord[index], 505 + w * index, 620);
  table.stroke();
}

function writeWrongLetter(letter, errorsLeft) {
  table.lineWidth = 6;
  table.font = "bold 40px Inter";
  table.lineCap = "round";
  table.lineJoin = "round";
  table.fillStyle = "#146940";
  table.fillText(letter, 535 + 40 * (10 - errorsLeft), 710, 40);
}

function drawHangman(points) {
  table.lineWidth = 8;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.strokeStyle = "#146940";
  if (points === 8) {
    table.moveTo(700, 500);
    table.lineTo(700, 100);
  }
  if (points === 7) {
    table.moveTo(850, 100);
    table.lineTo(700, 100);
  }
  if (points === 6) {
    table.moveTo(850, 100);
    table.lineTo(850, 171);
  }
  if (points === 5) {
    //head
    table.moveTo(900, 230);
    table.arc(850, 230, 50, 0, Math.PI * 2);
  }
  if (points === 4) {
    //body
    table.moveTo(850, 389);
    table.lineTo(850, 289);
  }
  if (points === 3) {
    //left leg
    table.moveTo(850, 389);
    table.lineTo(800, 450);
  }
  if (points === 2) {
    //right leg
    table.moveTo(850, 389);
    table.lineTo(890, 450);
  }
  if (points === 1) {
    //left hand
    table.moveTo(850, 330);
    table.lineTo(800, 389);
  }
  if (points === 0) {
    //right hand
    table.moveTo(850, 330);
    table.lineTo(890, 389);
  }
  table.stroke();
  table.closePath();
}

function youLose() {
  table.font = "bold 42px Inter";
  table.lineWidth = 6;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.fillStyle = "red";
  table.fillText("You lose!", 930, 320);
}

function youWin() {
  table.font = "bold 42px Inter";
  table.lineWidth = 6;
  table.lineCap = "round";
  table.lineJoin = "round";
  table.fillStyle = "green";
  table.fillText("You win,", 950, 320);
  table.fillText("Congrats!", 930, 360);
  setTimeout(refresh, 3000);
}

function refresh() {
  location.reload();
}