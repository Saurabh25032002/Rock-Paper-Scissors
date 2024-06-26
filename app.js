let userscore=0;
let compscore=0;


const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");
const Computer=()=>{

    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
};

const drawgame=()=>{
    console.log("game was Draw.");
    msg.innerText="Game was Draw.Play again."
    msg.style.backgroundColor="#081b31";

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin==true)
    {
        userscore++;
        userscorepara.innerText=userscore;

        console.log("you Win!");
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you lose!");
        msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}


const playgame=(userChoice)=>{
    console.log("User Choice=",userChoice); 
    const compChoice=Computer();
    
    console.log("Computer Choice=",compChoice); 

    if(userChoice==compChoice)
    {
        drawgame();
    }
    else{
        let userWin=true;
        if(userChoice=="rock")
        {
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper")
        {
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});