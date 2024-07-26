let inputBtn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".reset");

let newGameBtn = document.querySelector(".newBtn");
let winMassage = document.querySelector(".winMassage");
let msg = document.querySelector(".winner");

let turnO = false;
let won = false;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = false;
    count = 0;
    won = false;
    enableButtons();
};

const newGame = () =>{
    turnO = true;
    count = 0;
    won = false;
    enableButtons();
};

let count = 0;
inputBtn.forEach((btn) => {
    btn.addEventListener("click", ()=> {
        count++; //counter for dr
        console.log(count);
        
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }
        else{
            btn.innerText = "X";
            turnO = true;
        }
        if(count === 9 && won==false){
            draw();
        }
        btn.disabled = true;

        checkWinner();
    });
});


const checkWinner = ()=> {
    for(let pattern of winPatterns){

        let pos1 = inputBtn[pattern[0]].innerText;
        let pos2 = inputBtn[pattern[1]].innerText;
        let pos3 = inputBtn[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1===pos2 && pos2===pos3){
                won = true;
                disableButtons();
                showWinner(pos1);
            }
        }
    }
};

const showWinner = (winner)=>{
    msg.innerText = `Congratulations!! \n "${winner}" won the game.`;
    winMassage.classList.remove("hide");
};

const draw = () =>{
    console.log("Game Drawed!");
    msg.innerText = `Draw!`;
    winMassage.classList.remove("hide");
};

const disableButtons = () =>{
    for(let bt of inputBtn){
        bt.disabled = true;
    }
};

const enableButtons = () =>{
    for(let bt of inputBtn){
        bt.disabled = false;
        bt.innerText = "";
        winMassage.classList.add("hide");
    }
}

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
