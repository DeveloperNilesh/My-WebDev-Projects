let hitNum;

function createBubbles(){
    let bubble = "";
    for(let i=1;i<=152;i++){
        let bubbleContent = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${bubbleContent}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = bubble;
}

let timer = 30;
function setTimer(){
    const timeInterval = setInterval(() => {
        timer--;
        if(timer>=0){
            document.querySelector("#timer").innerHTML = timer;
        }
        else{
            clearInterval(timeInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

function getHit(){
    hitNum = Math.floor(Math.random()*10);
    document.querySelector("#hit").innerHTML = hitNum;
}

let score = 0;
function updateScore(){
    score += 1;
    document.querySelector("#score").innerHTML = score;
}

document.querySelector("#pbtm").
addEventListener("click",(event)=>{
    let myBubble = Number(event.target.innerHTML);
    if(myBubble === hitNum){
        updateScore();
        getHit();
        createBubbles();
    }
})

createBubbles();
setTimer()
getHit();