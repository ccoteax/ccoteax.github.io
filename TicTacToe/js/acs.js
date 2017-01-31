var GAME_FIELD = document.getElementById('speelveld').getElementsByTagName('img');
var ELEMENT_SCORE_PLAYER1 = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[1];
var ELEMENT_SCORE_PLAYER2 = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[3];
var ELEMENT_ROUND = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td')[5];
var ELEMENT_BUTTON = document.getElementsByClassName('game-button')[0];
var PLAYER_IMAGES = [ 'img/cross.jpg', 'img/circle.jpg' ];

var PLAYER1 = 0;
var PLAYER2 = 1;

var turn_image = document.getElementsByClassName('players-turn')[0]
    .getElementsByTagName('img')[0];
var turn_number = document.getElementsByClassName('players-turn')[0]
    .getElementsByTagName('td')[2];
var player_scores = [ 0, 0 ];
var current_round = 0;
var player_turn = PLAYER1;

function buttonClickHandler() {
    for(var celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD[celnum].onclick = cellClickHandler;
    }
}

function clearGameField() {
    for(var celnum = 0; celnum < 9; celnum++) {
        GAME_FIELD[celnum].src = 'img/empty.jpg';
    }
}

window.onload = function() {
    ELEMENT_BUTTON.onclick = buttonClickHandler;
    player_scores[0] = 0;
    player_scores[1] = 0;
    current_round = 0;
    player_turn = Math.round(Math.random());
    turn_image.src = PLAYER_IMAGES[player_turn];
    turn_number.innerHTML = player_turn;

    clearGameField();
};

function cellClickHandler(event_element) {
    console.log(event_element);
}




