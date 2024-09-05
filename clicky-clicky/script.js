//define variables
let moneyz = 0;
let scoreCounter = document.getElementById("scoreCounter");

function updateScoreCounter(){
    scoreCounter.innerHTML = "score: " + String(moneyz);
}

function getMoneyz(moneyzToGet){
    moneyz += moneyzToGet;
    updateScoreCounter();
}

function init(){
    updateScoreCounter();
}

//initilize the game
init();