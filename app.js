let gameSeq = [];
let userSeq = [];
let btns = ["red", "green", "yellow", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (!started){
        console.log("Game is started");
        levelUp();
        started = true;
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 1000);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
}

function btnPress(){
    let btn = this;
    let userColor = btn.classList[1];
    userSeq.push(userColor);
    userFlash(btn);

    // Check if the user input is correct
    if (userSeq[userSeq.length - 1] !== gameSeq[userSeq.length - 1]) {
        console.log("Game Over");
        h2.innerText = "Game Over. Press Any Key to Restart.";
        resetGame();
    } else if (userSeq.length === gameSeq.length) {
        console.log("Next Level");
        setTimeout(levelUp, 1000);
        userSeq = [];
    }
}

function resetGame(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click", btnPress);
}
