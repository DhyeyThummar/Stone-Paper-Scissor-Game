let image = document.querySelectorAll(".images");

let Stone = document.querySelector("#Stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissor");

let userScoree = document.querySelector("#usercount");
let compScoree = document.querySelector("#compcount");

let msgbox = document.querySelector(".msgbox");
let choosemsg = document.querySelector(".choose");
let restart = document.querySelector(".restart");

let userScore = 0;
let compScore = 0;





function compChoice() {
    const choices = ["Stone", "paper", "scissor"];
    const num = Math.floor(Math.random(choices) * choices.length);
    return choices[num];

}


image.forEach((images) => {
    images.addEventListener("click", () => {
        const useChoi = images.getAttribute("id");
        const compChoi = compChoice();
        playGame(useChoi, compChoi);
    });
});


const gameDraw = () => {
    msgbox.innerText = "Game Draw!";
    msgbox.style.backgroundColor = "#ADD8E6";

}

const playGame = (useChoi, compChoi) => {


    if (useChoi === compChoi) {
        gameDraw();
        choosemsg.innerText = `You choose ${useChoi}    and    Computer also chhose ${useChoi} `;
        return;
    }

    let userWin;

    if (useChoi === "Stone") {
        userWin = compChoi === "paper" ? false : true;

    }
    else if (useChoi === "paper") {
        userWin = compChoi === "scissor" ? false : true;
    }
    else {
        userWin = compChoi === "Stone" ? false : true;
    }




    showWinner(userWin);

    choosemsg.innerText = `You choose ${useChoi}    and    Computer chhose ${compChoi} `;

};

const showWinner = (userWin) => {
    if (userWin === true) {
        msgbox.innerText = "You Win!";
        userScore++;
        userScoree.innerText = userScore;
        msgbox.style.backgroundColor = "#90EE90";

    }
    else {
        msgbox.innerText = "Computer Win!";
        compScore++;
        compScoree.innerText = compScore;
        msgbox.style.backgroundColor = "red";
    }



};

restart.addEventListener("click", () => {

    userScoree.innerText = "0";
    compScoree.innerText = "0";
    msgbox.innerText = "Play the Game";
    msgbox.style.backgroundColor = "rgb(207, 170, 247)";
    choosemsg.innerText = "choose Message";

});


