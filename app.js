const startGame = () => {
    const handEmojis = ["✊", "✋", "✌️"];
    const gamePanel = document.getElementById("game-panel");

    const startButton = document.getElementById("start-btn");
    const buttonElements = [startButton];

    // Create emoji buttons
    for (let i = 0; i < handEmojis.length; i ++) {
        const newButton = document.createElement("button");
        newButton.setAttribute("type", "submit");
        newButton.setAttribute("onclick", "play()");
        newButton.setAttribute("value", handEmojis[i]);
        newButton.innerText = handEmojis[i];
        buttonElements.push(newButton); 
    }

    const renderGame = () => { 
        gamePanel.innerHTML = "";
        for (let i = 1; i < buttonElements.length; i++) {
            gamePanel.appendChild(buttonElements[i]);
        }
    }

    const renderStart = () => {
        gamePanel.innerHTML = "";
        gamePanel.appendChild(buttonElements[0]);
    }
   
    // render round
};