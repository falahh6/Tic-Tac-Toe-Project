const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const Players = [{
        name: '',
        Symbol: 'X'
    },
    {
        name: '',
        Symbol: 'O'
    }
];

const playerConfigOverlayElement = document.getElementById('select-name-box');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const gameAreaElement = document.getElementById('active-game');
const activePlayerNameElement = document.getElementById('active-player-name');
const gameOverElement = document.getElementById('results');

const editPlayer1BtnElement = document.getElementById('player-1-name');
const editPlayer2BtnElement = document.getElementById('player-2-name');
const cancelConfigBtnElement = document.getElementById('cancel-button');
const startNewGameButton = document.getElementById('Start-game-btn');
const gameFieldsElements = document.getElementById('game-board');

editPlayer1BtnElement.addEventListener('click', openPlayerConfig);
editPlayer2BtnElement.addEventListener('click', openPlayerConfig);

cancelConfigBtnElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);

startNewGameButton.addEventListener('click', startNewGame);

gameFieldsElements.addEventListener('click', selectGameField);