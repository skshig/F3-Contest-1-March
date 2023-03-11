// document.getElementById('next').addEventListener('click', () => {
//     console.log("Hi");
// });

function sportsDay(){
    // const score = {red:0,blue:0,green:0,yellow:0};
    OpeningCeremony(Race100M);
}
// const timeObj = { };
// const color_time_arr = []
//
document.addEventListener('click', sportsDay);
// const randomInt = (Math.random()*(15 - 10 + 1) + 10);
function OpeningCeremony(Race100M){
    setTimeout(function() {
        console.log("Let the game begin")
        let score = {red:0,blue:0,green:0,yellow:0};
        Race100M(score, LongJump)
    },1000)
    
    
}
 function Race100M(score){
    setTimeout(function(){
        console.log("hi");
        score = race100m_scores()
        LongJump(score);},3000)
        
}
function race100m_scores() {
    let result = {
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    }
    red_card = { color: "red", time: Math.floor(Math.random() * 6) + 10 };
    blue_card = { color: "blue", time: Math.floor(Math.random() * 6) + 10 };
    green_card = { color: "green", time: Math.floor(Math.random() * 6) + 10 };
    yellow_card = { color: "yellow", time: Math.floor(Math.random() * 6) + 10 };

    players_array = [red_card, green_card, blue_card, yellow_card]
    // console.log(players_array);
    players_array.sort((a, b) => { return a.time - b.time; })
    // console.log(players_array);
    result[players_array[0].color] = 50;
    result[players_array[1].color] = 25;
    return result
}
function LongJump(score){
    setTimeout(function(){
        if(user === "red"){
            score.red = (score.red) +  150;
        }
        if(user === "yellow"){
            score.yellow = (score.yellow) +  150;
        }
        if(user === "green"){
            score.green = (score.green) +  150;
        }
        if(user === "blue"){
            score.blue = (score.blue) +  150;
        }},2000)
}
function long_jump_winner() {
    players = ["red", "yellow", "blue", "green"];
    const winner_index = Math.floor(Math.random() * players.length);
    return players[winner_index];
}

function HighJump(score,AwardCeremony){
        const user = prompt("What colour secured the highest jump?")
        if(user === "red"){
            score.red = (score.red) +  100;
        }
        if(user === "yellow"){
            score.yellow = (score.yellow) +  100;
        }
        if(user === "green"){
            score.green = (score.green) +  100;
        }
        if(user === "blue"){
            score.blue = (score.blue) +  100;
        }
        else {
            if(user == "" || user == null){
            console.log("Event was cancelled");
        }
        // const score =
        HighJump(score,AwardCeremony);
        }
    AwardCeremony(score);
}
function AwardCeremony(score){

}
