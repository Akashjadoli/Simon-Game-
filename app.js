let gameSeq = [];
let userSeq = [];


let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;


let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is sterted");

        document.querySelectorAll(".btn").forEach(btn => {
                btn.classList.remove("breathing");
            });

            reSet();
        started = true;
        levelup();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 150);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level} `;

    let randIdx = Math.floor(Math.random() * 4 );
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);

}

function checkAns(idx){
    if (userSeq[idx] === gameSeq[idx]){
        if (userSeq.length == gameSeq.length){
            setTimeout(levelup, 500);
        }
    } else{
            h2.innerHTML = `Game Over! your Score Was <b>${level}</b> <br> Press Enter To Restart The Game Shawty !`;
            document.querySelectorAll(".btn").forEach(btn => {
                btn.classList.add("breathing");
            });
            reSet();
        }
        
}            
    
function btnPress(){
    let btn = this;
    btnFlash(btn);
    
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}

function reSet(){
    started = false;
    gameSeq= [];
    userSeq = [];
    level = 0 ; 

}
