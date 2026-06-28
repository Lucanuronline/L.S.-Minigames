let RandomNumber = Math.floor(Math.random() * 100) + 1;
let Tries = 0;
const refreshBtn = document.getElementById("btnRefresh");
let highscore = localStorage.getItem('highscore');
let winSound = new Audio('sounds/win.mp3');
let highscoreSound = new Audio('sounds/highscore.mp3');
let clickSound = new Audio('sounds/click.mp3');



if (highscore === null) {
    highscore = Infinity;
} else {
    highscore = Number(highscore);
}

document.getElementById('highscore').innerHTML =
    'Highscore: ' + (highscore === Infinity ? '-' : highscore);


function handleClick() {
  window.location.reload();
}

function Easy() {
    clickSound.play();

    RandomNumber = Math.floor(Math.random() * 50) + 1;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = '#38CC1D';
}

function Medium() {
    clickSound.play();

    RandomNumber = Math.floor(Math.random() * 100) + 1;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = '#c4a733';
}

function Hard() {
    clickSound.play();

    RandomNumber = Math.floor(Math.random() * 500) + 1;
    document.body.style.backgroundImage = "none";
    document.body.style.backgroundColor = '#a93a3a';
}

refreshBtn.addEventListener("click", handleClick);

function GuessTheNumber() {

    Tries = Tries + 1;
    TriesNumber.innerHTML = 'Versuche: ' + Tries 

    if(RandomNumber == Guess.value){
        Headline.innerHTML = 'Du hast Gewonnen!!!';
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
        winSound.play();
        if (Tries < highscore) {
    highscore = Tries;
    localStorage.setItem('highscore', highscore);
    document.getElementById('highscore').innerHTML =
        'Highscore: ' + highscore;
        highscoreSound.play();
}
    }

    if(RandomNumber > Guess.value){
        clickSound.play();
        Headline.innerHTML = 'Zu Niedrig!!!';
    }

    if(RandomNumber < Guess.value){
        clickSound.play();
        Headline.innerHTML = 'Zu Hoch!!!';
    }

    Guess.value = '';
}



