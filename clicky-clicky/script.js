//define variables
let moneyz = 0;
let scoreCounter = document.getElementById("scoreCounter");
let clickPower = 1;
let clickPowerCostIncremental = [5, 1.4];

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

function buyThing(incrementalCost, callback){
    if(moneyz >= incrementalCost[0]){
        modifyMoneyz(-incrementalCost[0]);
        incrementalCost[0] *= incrementalCost[1];
        callback();
    }
}

function init(){
    updateScoreCounter();
}

//initilize the game
init();