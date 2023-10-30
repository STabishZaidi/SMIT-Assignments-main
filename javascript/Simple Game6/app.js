// JavaScript code for the simple fighting game

const player1HealthElement = document.getElementById('player1Health');
const player2HealthElement = document.getElementById('player2Health');

let player1Health = 100;
let player2Health = 100;

document.getElementById('player1Attack').addEventListener('click', () => attack('player1'));
document.getElementById('player2Attack').addEventListener('click', () => attack('player2'));

function attack(attacker) {
    const defender = attacker === 'player1' ? 'player2' : 'player1';
    
    // Calculate damage (for simplicity, use a random value)
    const damage = Math.floor(Math.random() * 10) + 1;

    // Update the health of the defender
    if (defender === 'player1') {
        player1Health -= damage;
        player1Health = Math.max(player1Health, 0); // Ensure health doesn't go below 0
        player1HealthElement.textContent = player1Health;
    } else {
        player2Health -= damage;
        player2Health = Math.max(player2Health, 0);
        player2HealthElement.textContent = player2Health;
    }

    // Check for a winner
    if (player1Health === 0) {
        alert('Player 2 wins!');
        resetGame();
    } else if (player2Health === 0) {
        alert('Player 1 wins!');
        resetGame();
    }
}

function resetGame() {
    player1Health = 100;
    player2Health = 100;
    player1HealthElement.textContent = player1Health;
    player2HealthElement.textContent = player2Health;
}
