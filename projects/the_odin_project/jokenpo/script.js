// Data
let r = "Rock";
let p = "Paper";
let s = "Scissors";

//Score 
userScoreHolder = document.getElementById('userScoreHolder');
pcScoreHolder = document.getElementById('pcScoreHolder');
userScore = 0;
pcScore = 0;

// Messages

let won = "You Won!!"
let tied = "Play Again!"
let lose = "You Lose."

let RxS = "Rock crushes Scissors";
let PxR = "Paper covers Rocks";
let SxP = "Scissors cuts Paper";
let tie = "You tied";

let outro = "please write again"


    // Computer Play
function computerPlay () {
    /* Math random logic: 
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    */
   
    let random =  Math.floor(Math.random() * 3);

    if (r === 0) {
        return r;
    } else if (random === 1){ 
        return p;
    } else {
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

    // Reset
function reset() {
    userScore = 0;
    pcScore = 0;

}

 // The Game

function play() {

    let pc = computerPlay();

    let message = `Computer played ${pc}, ${battle(user, pc)}, ${winner(user, pc)}`;

    userScoreHolder.appendChild(userScore);
    pcScoreHolder.appendChild(pcScore);

    alert(message);
    console.log(userScore, pcScore);
    console.log(message);
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