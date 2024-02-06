let levelDisplay = document.querySelector('#level-display');
let scoreDisplay = document.querySelector('#score-display');
let colors = document.querySelectorAll('.colors');
let gameCount = false;
let startBtn = document.querySelector('#btn');
let body = document.querySelector('body');

let blueColor = document.querySelector('#blue');
let greenColor = document.querySelector('#green');
let yellowColor = document.querySelector('#yellow');
let redColor = document.querySelector('#red');

for(let color of colors) {
    color.setAttribute('disabled',true);
}

let userArray = [];
let gameArray = [];

let levelCount = 0;

function gameOver() {
    gameCount = false;
    startBtn.removeAttribute('disabled');
    startBtn.innerHTML = 'Retry!';
    levelDisplay.innerHTML = 'Game Over...!'
    gameArray = [];
    userArray = [];
    levelCount = 0;
    for(let color of colors) {
        color.setAttribute('disabled',true);
    }
}

function gameStarted() {
    if(gameCount == false) {
        gameCount = true;
        startBtn.setAttribute('disabled',true);
        colorBlink();
        for(let color of colors) {
            color.removeAttribute('disabled');
        }
    }
}

function colorBlink() {
    userArray = [];
    levelCount++;
    levelDisplay.innerHTML = `Level ${levelCount}`;
    scoreDisplay.innerHTML = `Your score is ${levelCount-1}`;
    let colorBoxBlinking = (colorName) => {
        for(let color of colors) {
            if(color.id == colorName) {
                setTimeout(() => {
                    color.style.backgroundColor = 'white';
                }, 300);
                setTimeout(() => {    
                    color.style.backgroundColor = `${colorName}`;
                }, 700);
            }
        }
    };
    let randomNumber = Math.floor(Math.random()*4) + 1;
    switch(randomNumber) {
        case 1:
            let colorBlue = 'blue';
            colorBoxBlinking(colorBlue);
            gameArray.push(colorBlue);
            break;
        case 2:
            let colorGreen = 'green';
            colorBoxBlinking(colorGreen);
            gameArray.push(colorGreen);
            break;
        case 3:
            let colorRed = 'red';
            colorBoxBlinking(colorRed);
            gameArray.push(colorRed);
            break;
        case 4:
            let colorYellow = 'yellow';
            colorBoxBlinking(colorYellow);
            gameArray.push(colorYellow);
            break;
    }
}

function userFun(color) {
    userArray.push(color.id);
    console.log('user array', userArray);
    console.log('game array', gameArray);

    if (userArray.every((val, index) => val === gameArray[index])) {
        if (userArray.length === gameArray.length) {
            console.log('Well done!');
            colorBlink();
        }
    } else {
        gameOver();
        setTimeout(() => {
            body.style.backgroundColor = 'red';
        }, 300);
        setTimeout(() => {
            body.style.backgroundColor = 'beige';
        }, 700);
    }
}

colors.forEach(color => {
    color.addEventListener('click',()=>{
        color.style.boxShadow = '0.5rem 0.5rem 0.5rem black';
        setTimeout(() => {
            color.style.boxShadow = '0.7rem 0.7rem 1rem black';
        }, 400);
        userFun(color);
    });
});

startBtn.addEventListener('click',gameStarted);
