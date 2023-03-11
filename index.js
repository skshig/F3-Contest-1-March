// document.getElementById('next').addEventListener('click', () => {
//     console.log("Hi");
// });

// function sportsDay(OpeningCeremony){
//     const score = {red:0,blue:0,green:0,yellow:0};
//     OpeningCeremony();
// }
const randomInt = (Math.random()*(15 - 10 + 1) + 10);
function OpeningCeremony(Race100M){
    console.log("Let the game begin")
    const score = {red:0,blue:0,green:0,yellow:0};
    Race100M(score,LongJump);
}
function Race100M(score,LongJump){
    const score = {red:randomInt,
        blue:randomInt,
        green:randomInt,
        yellow:randomInt};
    LongJump(score,HighJump)
}
function LongJump(score,HighJump){
    const user = prompt("What colour secured the highest jump?")
    if(user = "red"){
        score.red = (score.red) +  100;
    }
    if(user = "yellow"){
        score.yellow = (score.yellow) +  100;
    }
    if(user = "green"){
        score.green = (score.green) +  100;
    }
    if(user = "blue"){
        score.blue = (score.blue) +  100;
    }
    else {
        (user == "" || user == null){
        console.log("Event was cancelled");
    }
    const score = 
    HighJump(score,AwardCeremony);
    }
}
function AwardCeremony(score){

}
OpeningCeremony(Race100M)