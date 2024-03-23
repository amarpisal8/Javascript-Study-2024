function buyBike(callback1, callback2 , callback3){
    setTimeout(()=>{
        console.log("Bought Royal Infield Himalaya");
        callback1(callback2 , callback3);
    },2000);
}

function planTrip(callback1 , callback2){
    setTimeout(()=>{
        console.log("Trip To Ladakh Plan");
        callback1(callback2)
    },1000)
}

function reachLadakh(callback){
    setTimeout(()=>{
        console.log("Reach Ladakh");
        callback()
    },1000)
}

function visitPangongLake(){
    setTimeout(()=>{
        console.log("Visited Pangong Lake");
    },500)
}
buyBike(planTrip , reachLadakh , visitPangongLake)