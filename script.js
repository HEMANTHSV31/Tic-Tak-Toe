let currentPlayer = "X";
let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const displayStatus = document.getElementById('status');
const restartButton = document.getElementById('res');
const buttons = document.querySelectorAll('.btn');

const winningPatterns = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
];

function winner() {
    return winningPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] === board[b] && board[b] === board[c] && board[a] !== '';
    });
}
function display(index) {
    if (board[index] !== '' || gameOver) return; 

    board[index] = currentPlayer;
    buttons[index].textContent = currentPlayer;

    if (winner()) {
        displayStatus.textContent = `${currentPlayer} WINS`;
        gameOver = true;
    }
    else if (board.every(cell => cell !== '')) {
        displayStatus.textContent = 'MATCH DRAWN';
        gameOver = true;
    }
    else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        displayStatus.textContent = `${currentPlayer} YOUR TURN`;
    }
}
function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    displayStatus.textContent = `${currentPlayer} YOUR TURN`;
    buttons.forEach(button => button.textContent = '');
}
