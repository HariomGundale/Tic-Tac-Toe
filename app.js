let boxes = document.querySelectorAll(".box");
let msg = document.querySelector(".msg");
let new_game = document.querySelector(".newgame");
let newgame_btn = document.querySelector("#new-btn");
let resetbtn = document.querySelector("#regame");

let turnO = true;
let count = 0;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turnO = true;
    count =0;
    enableBoxes();
    new_game.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = winnerchecker();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () =>{
    msg.innerText = `Game was Draw. `;
    new_game.classList.remove("hide");
    disableboxes();
};

const disableboxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{ 
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation! Winner is ${winner}`;
    new_game.classList.remove("hide");
    disableboxes();
};

const winnerchecker = () => {
    for(let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
                return true;
            }
        } 
    }
};

newgame_btn.addEventListener("click",resetgame);
resetbtn.addEventListener("click", resetgame);