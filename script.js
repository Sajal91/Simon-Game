let startBtn = document.querySelector('#start-btn');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let body = document.querySelector('body');
let h2 = document.querySelector('h2');

let inGameArraySeq = [];
let userArraySeq = [];



let flash = function () {
    startBtn.disabled = true;
    h2.innerText = "Let's Start the game !!"
    let x = Math.floor(Math.random()*4+1);
    if(x == 1) {
        box1.style.animation='blink 0.2s ease alternate';
        inGameArraySeq.push(`${x}`);
    } else if(x == 2) {
        box2.style.animation='blink 0.2s ease alternate';
        inGameArraySeq.push(`${x}`);
    } else if(x == 3) {
        box3.style.animation='blink 0.2s ease alternate';
        inGameArraySeq.push(`${x}`);
    } else if(x == 4) {
        box4.style.animation='blink 0.2s ease alternate';
        inGameArraySeq.push(`${x}`);
    }
    let count;
    let userFun1 = function () {
        count = 1;
        userArraySeq.push(`${count}`);
        console.log(userArraySeq);
        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        if(userArraySeq[0] == inGameArraySeq[0]) {
            body.style.animation = 'won 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Congratulations!! You Won the Game..!";
            },500);
        } else {
            body.style.animation = 'loss 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Better Luck Next Time..!!";
            },500);
        }
    }
    let userFun2 = function () {
        count = 2;
        userArraySeq.push(`${count}`);
        console.log(userArraySeq);
        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        if(userArraySeq[0] == inGameArraySeq[0]) {
            body.style.animation = 'won 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Congratulations!! You Won the Game..!";
            },500);
        } else {
            body.style.animation = 'loss 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Better Luck Next Time..!!";
            },500);
        }
    }
    let userFun3 = function () {
        count = 3;
        userArraySeq.push(`${count}`);
        console.log(userArraySeq);
        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        if(userArraySeq[0] == inGameArraySeq[0]) {
            setTimeout(()=>{
                h2.innerText = "Congratulations!! You Won the Game..!";
            },500);
            body.style.animation = 'won 0.1s ease';
        } else {
            body.style.animation = 'loss 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Better Luck Next Time..!!";
            },500);
        }
    }
    let userFun4 = function () {
        count = 4;
        userArraySeq.push(`${count}`);
        console.log(userArraySeq);
        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        if(userArraySeq[0] == inGameArraySeq[0]) {
            body.style.animation = 'won 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Congratulations!! You Won the Game..!";
            },500);
        } else {
            body.style.animation = 'loss 0.1s ease';
            setTimeout(()=>{
                h2.innerText = "Better Luck Next Time..!!";
            },500);
        }
    }
    box1.addEventListener('click',userFun1);
    box2.addEventListener('click',userFun2);
    box3.addEventListener('click',userFun3);
    box4.addEventListener('click',userFun4);
    console.log(inGameArraySeq);
};

console.dir(startBtn);
startBtn.addEventListener('mousedown', function () {
    startBtn.style.transform = "scale(1.1)";
});

startBtn.addEventListener('mouseup', function () {
    startBtn.style.transform = "scale(1)";
});

startBtn.addEventListener('mouseleave', function () {
    startBtn.style.transform = "scale(1)";
});

startBtn.addEventListener('mousemove', function () {
    startBtn.style.cursor = "pointer";
});

startBtn.addEventListener('click',flash);
