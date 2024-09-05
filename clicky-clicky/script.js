//define variables
let moneyz = 0;
let scoreCounter = document.getElementById("scoreCounter");
let clickPower = 1;

function updateScoreCounter(){
    scoreCounter.innerHTML = "score: " + String(moneyz);
}

function modifyMoneyz(moneyzToGet){
    moneyz += moneyzToGet;
    updateScoreCounter();
}

function getClickPower(clickPowerToGet){
    clickPower += clickPowerToGet;
}

function buyThing(cost, callback){
    if(moneyz >= cost){
        modifyMoneyz(-cost);
        callback();
    }
}

function init(){
    updateScoreCounter();
}

//initilize the game
init();