const board = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");
const player1Input = document.getElementById("player1");
const player2Input = document.getElementById("player2");
const p1NameDisplay = document.getElementById("p1Name");
const p2NameDisplay = document.getElementById("p2Name");
const p1Display = document.getElementById("p1Display");
const p2Display = document.getElementById("p2Display");
const winLine = document.getElementById("winLine");

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;
let player1 = "Player 1";
let player2 = "Player 2";

const winConditions = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // cols
  [0,4,8], [2,4,6]           // diagonals
];

startBtn.addEventListener("click", startGame);
resetBtn.addEventListener("click", resetGame);
board.forEach((cell, i) => cell.addEventListener("click", () => cellClicked(i)));

function startGame() {
  player1 = player1Input.value || "Player 1";
  player2 = player2Input.value || "Player 2";
  p1NameDisplay.textContent = player1;
  p2NameDisplay.textContent = player2;
  statusText.textContent = `${player1}'s turn (X)`;
  running = true;
  startBtn.disabled = true;
  highlightTurn();
}

function cellClicked(index) {
  if (!running || options[index] !== "") return;
  options[index] = currentPlayer;
  board[index].textContent = currentPlayer;
  checkWinner();
}

function checkWinner() {
  let winner = null;
  let winIndex = null;

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (options[a] && options[a] === options[b] && options[a] === options[c]) {
      winner = options[a];
      winIndex = i;
      break;
    }
  }

  if (winner) {
    const winnerName = winner === "X" ? player1 : player2;
    statusText.textContent = `${winnerName} Wins! 🎉`;
    running = false;
    drawWinLine(winIndex);
  } else if (!options.includes("")) {
    statusText.textContent = "It's a Draw! 😐";
    running = false;
  } else {
    changePlayer();
  }
}

function drawWinLine(index) {
  const line = winLine;
  line.style.opacity = 1;

  // 8 possible win lines (rows, columns, diagonals)
  const lineStyles = [
    { top: "50px", left: "0", rotate: "0deg" },   // Row 1
    { top: "150px", left: "0", rotate: "0deg" },  // Row 2
    { top: "250px", left: "0", rotate: "0deg" },  // Row 3
    { top: "150px", left: "-100px", rotate: "90deg" }, // Col 1
    { top: "150px", left: "0", rotate: "90deg" },      // Col 2
    { top: "150px", left: "100px", rotate: "90deg" },  // Col 3
    { top: "150px", left: "0", rotate: "45deg" },      // Diagonal 1
    { top: "150px", left: "0", rotate: "-45deg" }      // Diagonal 2
  ];

  const { top, left, rotate } = lineStyles[index];
  line.style.top = top;
  line.style.left = left;
  line.style.transform = `rotate(${rotate})`;
}

function changePlayer() {
  currentPlayer = (currentPlayer === "X") ? "O" : "X";
  const currentName = currentPlayer === "X" ? player1 : player2;
  statusText.textContent = `${currentName}'s turn (${currentPlayer})`;
  highlightTurn();
}

function highlightTurn() {
  if (currentPlayer === "X") {
    p1Display.classList.add("active");
    p2Display.classList.remove("active");
  } else {
    p2Display.classList.add("active");
    p1Display.classList.remove("active");
  }
}

function resetGame() {
  options = ["", "", "", "", "", "", "", "", ""];
  board.forEach(cell => (cell.textContent = ""));
  currentPlayer = "X";
  running = true;
  winLine.style.opacity = 0;
  winLine.style.transform = "none";
  statusText.textContent = `${player1}'s turn (X)`;
  highlightTurn();
}
