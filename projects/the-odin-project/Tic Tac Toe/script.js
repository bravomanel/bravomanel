let n1 = document.getElementById('n1');
let n2 = document.getElementById('n2');
let n3 = document.getElementById('n3');
let n4 = document.getElementById('n4');
let n5 = document.getElementById('n5');
let n6 = document.getElementById('n6');
let n7 = document.getElementById('n7');
let n8 = document.getElementById('n8');
let n9 = document.getElementById('n9');
let twoPlayBtn = document.getElementById('start');
let cpuPlayBtn = document.getElementById('reset');
let playerOneName = document.getElementById('playerOneName');
let playerTwoName = document.getElementById('playerTwoName');
let gameContainer = document.getElementById('gameContainerId');

let board = [
    n1, n2, n3,
    n4, n5, n6,
    n7, n8, n9,
    ];

playerOneName.defaultValue = 'Bruce'
playerTwoName.defaultValue = 'Alfred'

playerOneName.addEventListener('click', () => {
    playerOneName.value = ''
})
playerTwoName.addEventListener('click', () => {
    playerTwoName.value = ''
})

twoPlayBtn.addEventListener('click', function () {
    let player1 = playerOneName.value;
    let player2 = playerTwoName.value;

    startGame();
})

function startGame(player1, player2) {
    clear();
    playerOnePlay();
}


function clear() {
    playerOneName.value = 'Bruce'
    playerTwoName.value = 'Alfred'
    
    for (let i = 0; i < board.length; i++) {
            board[i].textContent = '';
    }
    for (let i = 0; i < board.length; i++) {
        board[i].removeEventListener('click', markX);
        board[i].removeEventListener('click', markO);
    }
}


function playerOnePlay() {
    checkWin('O');  
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', markX);
    }
}

function playerTwoPlay() {
    checkWin('X');
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', markO);
    }
}

function markX () {
    if (this.textContent !== '') {    
        } else {
            this.textContent = 'X'
            this.classList.add('markAdd');
            for (let i = 0; i < board.length; i++) {
                board[i].removeEventListener('click', markX);
            }
            playerTwoPlay(); 
        }
}
        
function markO () {
    if (this.textContent !== '') {    
        } else {
            this.textContent = 'O' 
            this.classList.add('markAdd');  
            for (let i = 0; i < board.length; i++) {
                board[i].removeEventListener('click', markO);
            } 
            playerOnePlay(); 
        }
}

function checkWin (m) {
    if (n1.textContent === m && n4.textContent === m && n7.textContent === m) {
        won(m);
    } else if (n2.textContent === m && n5.textContent === m && n8.textContent === m) {
        won(m);
    } else if (n3.textContent === m && n6.textContent === m && n9.textContent === m) {
        won(m);
    } else if (n1.textContent === m && n2.textContent === m && n3.textContent === m) {
        won(m);
    } else if (n4.textContent === m && n5.textContent === m && n6.textContent === m) {
        won(m);
    } else if (n7.textContent === m && n8.textContent === m && n9.textContent === m) {
        won(m);
    } else if (n1.textContent === m && n5.textContent === m && n9.textContent === m) {
        won(m);
    } else if (n3.textContent === m && n5.textContent === m && n7.textContent === m) {
        won(m);
    } else {
        checkDraw();
    }
}

function checkDraw () {
    let opa = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i].textContent !== '') {
            opa++;
        }
    }
    if (opa >= 9) {
        alert("It's a Draw")
    }
}


function won (m) {
    alert(`${m} Won the game!`)
}