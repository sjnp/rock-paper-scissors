// DOM
const gamePanel = document.getElementById("game-panel");
const startButton = document.getElementById("start-btn");
const resultPanel = document.getElementById("result-panel");

const buttonElements = [startButton];

// Game global properties
const maxWin = 5;
const player = ["👨", "🤖"];
const handEmojis = ["✊", "✋", "✌️"];
const initialRound = 0;
const initialScores = [0, 0];
let round = initialRound;
let scores = initialScores.slice();

// Create emoji buttons
for (let i = 0; i < handEmojis.length; i ++) {
    const newButton = document.createElement("button");
    newButton.setAttribute("type", "submit");
    newButton.setAttribute("onclick", "play(this)");
    newButton.setAttribute("value", handEmojis[i]);
    newButton.innerText = handEmojis[i];
    buttonElements.push(newButton); 
}

const startGame = () => {

    round += 1;
    // Render rock, paper, scissors button
    const renderGame = () => { 
        gamePanel.innerHTML = "";
        for (let i = 1; i < buttonElements.length; i++) {
            gamePanel.appendChild(buttonElements[i]);
        }
    };

    resultPanel.innerHTML = "";
    renderGame()

    

};

const play = (objButton) => {
    console.log("play")
    const playerPick = objButton.value;
    const computerPick = handEmojis[Math.floor(Math.random() * handEmojis.length)];
    const playerIsWin = ((playerPick === handEmojis[0]) && (computerPick === handEmojis[2]) ||
                        (playerPick === handEmojis[1]) && (computerPick === handEmojis[0]) ||
                        (playerPick === handEmojis[2]) && (computerPick === handEmojis[1]))? true: false;

    // Add score to the winner of this round
    if (playerPick !== computerPick) {
        (playerIsWin)? scores[0] += 1: scores[1] += 1;
    }

    // Render result 
    const renderResult = () => {
        resultPanel.innerHTML = "";

        const renderStart = () => {
            gamePanel.innerHTML = "";
            gamePanel.appendChild(buttonElements[0]);
        };
       
        // Round
        const renderRound = () => {
            const newParagraph = document.createElement("p");
            newParagraph.innerText = `Round ${round}`;
            resultPanel.appendChild(newParagraph);
        };
        
        // Score
        const renderScore = () => {
            const newParagraph = document.createElement("p");
            newParagraph.innerText = `${player[0]} ${scores[0]} : ${scores[1]} ${player[1]}`;
            resultPanel.appendChild(newParagraph);
        };

        // Description
        const renderResultDescription = (playerPick, computerPick, humanIsWin) => {
            const newParagraph = document.createElement("p");

            // Find the winner that won 5 games
            const winner = scores.indexOf(maxWin);
            if (winner !== -1) {
                newParagraph.innerText = `${player[winner]} is the winner!`;
                renderStart()
                round = initialRound;
                scores = initialScores.slice();
                console.log(scores);
            } else if (humanIsWin) {
                newParagraph.innerText = `${playerPick} Beats ${computerPick}, ${player[0]} wins!`;
            } else if (playerPick !== computerPick) {
                newParagraph.innerText = `${computerPick} Beats ${playerPick}, ${player[1]} wins!`;
            } else {
                newParagraph.innerText = `${player[0]} ${playerPick}: ${player[1]} ${computerPick}, It's even!`;
            }
            resultPanel.appendChild(newParagraph);
        };

        renderRound();
        renderScore();
        renderResultDescription(playerPick, computerPick, playerIsWin);

    };
    renderResult();
};