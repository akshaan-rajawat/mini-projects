box=document.querySelectorAll(".box");
resetbutton=document.querySelector("#reset");
winner=document.querySelector("h1");
let count = 0;

turnX = true;
turnO = false;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const disableboxes=()=>{
    box.forEach((box) =>{
        box.disabled=true;
    })
}
const enableboxes=()=>{
    box.forEach((box) =>{
        box.disabled=false;
        box.innerText="";
    })
}

box.forEach((box) =>{
    box.addEventListener("click",()=>{
        
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
        winner.innerText=(`DRAW`);
        count=0;
    }
})
})

const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
    
        if(pos1 !="" && pos2 !="" && pos3 !="" ){
            if(pos1===pos2 && pos2===pos3 && pos1===pos3){
                    disableboxes()
                    winner.innerText=(`${pos1} wins`);
                    return true;
                }
    }
    }
}

resetbutton.addEventListener("click",()=>{
    turnO=true;
    enableboxes();
    winner.innerText="TicTacToe"
    count=0;
})