// Data
let r = "Rock";
let p = "Paper";
let s = "Scissors";

// Messages

let won = "You Won!!"
let tied = "Play Again!"
let lose = "You Lose."

//Battle

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


 // The Game

function play() {

    //let choice = prompt(`Jokenpo Game\nPlease write Paper, Rock or Scissors to play`);

    let pc = computerPlay();

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
            return won;
        } else if (user == pc) {
            return tied;
        } else { 
            return lose;
        }
    }

    let message = `Computer played ${pc}, ${battle(user, pc)}, ${winner(user, pc)}`;
    alert(message);
    console.log(message);
    return message;
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