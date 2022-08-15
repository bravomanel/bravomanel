// Data
let r = "Rock";
let p = "Paper";
let s = "Scissors";

// Messages

let won = "You Won!!"
let tied = "Play Again!"
let lose = "You Lose."

let RxS = "Rock crushes Scissors";
let PxR = "Paper covers Rocks";
let SxP = "Scissors cuts Paper";
let tie = "You tied";

let outro = "please write again"
let standard = "Please make your choice, who gets 5 points first Win!"

let place = document.getElementById('message')
let text = document.createElement('p');
text.textContent = standard;
place.appendChild(text);


function displayResult(message) {
    text.textContent = message;
    place.appendChild(text);
}

    // Final Result

let finalWon = "You Won the Game, congratulations!!";
let finalLose = "The Machine Won, try harder!";


function finalCheck () {
    if (userScore < 5 && pcScore < 5) {
        return;
    } else if (userScore == 5) {
        finalResult(finalWon);
    } else if (pcScore == 5) {
        finalResult(finalLose);
    }

    reset();
}

    //Final Result
    let finalResultHolder = document.getElementById('finalResult');
    let paragraph = document.createElement('p')

function finalResult(text) {
    paragraph.textContent = text;
    finalResultHolder.appendChild(paragraph);
}

    //Reset

    function reset() {
        userScore = 0;
        pcScore = 0;
        score();
    }

    //Score 

let userScore = 0;
let pcScore = 0;

let userScoreHolder = document.getElementById("userScoreHolder");
let pcScoreHolder = document.getElementById("pcScoreHolder");

let h3PC = document.createElement('h3');
let h3User = document.createElement('h3');


function score () {
    h3PC.textContent = pcScore;
    h3User.textContent = userScore;

    pcScoreHolder.appendChild(h3PC);
    userScoreHolder.appendChild(h3User);
}
score();

    // Computer Play

function computerPlay () {
    /* Math random logic: 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    */

    let random =  Math.floor(Math.random() * 3);

    if (random === 0) {
        return r;
    } else if (random === 1){ 
        return p;
    } else if (random === 2){
        return s;
    }
}


    // The Battle 

function battle(user, pc) {
    if (user == pc) {
        return tie;
    } else if (user == r && pc == s || user == s && pc == r ) {
        return RxS;
    } else if (user == p && pc == r || user == r && pc == p ) {
        return PxR;
    } else if (user == s && pc == p || user == p && pc == s ) {
        return SxP;
    }
}

    // The Winner
    
function winner(user, pc) {
    if (user == r && pc == s || user == p && pc == r || user == s && pc == p) {
        userScore++;
        return won;
    } else if (user == pc) {
        return tied;
    } else { 
        pcScore++;
        return lose;
    }
}

 // The Game

function play() {

    let pc = computerPlay();

    let message = `Computer played ${pc}, ${battle(user, pc)}, ${winner(user, pc)}`;

    score();

    finalCheck(message);

    displayResult(message);
}



let paper_image = document.getElementById("paper")
let rock_image = document.getElementById("rock")
let scissors_image = document.getElementById("scissors")

paper_image.addEventListener('click', function() {
    user = p;
    play();
})
rock_image.addEventListener('click', function() {
    user = r;
    play();
})
scissors_image.addEventListener('click', function() {
    user = s;
    play();
})