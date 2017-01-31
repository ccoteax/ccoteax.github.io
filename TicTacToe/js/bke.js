/***************************************************
 * bke.js
 * -------------------------------------------------
 * In dit bestand staat alle javascript code
 * om ons spel te laten werken.
 *
 **************************************************/

var game = document.getElementById('speelveld');
//var squares = game.getElementsByTagName('td');

var squares = document.getElementById('speelveld').getElementsByTagName('img');
var player_images = [ 'img/empty.jpg', 'img/cross.jpg', 'img/circle.jpg' ];

var startGameButton = document.getElementsByClassName('game-button')[0];
var turn_player_number = document.getElementsByClassName('players-turn');

var turn_player_number = document.getElementsByClassName('players-turn')[0].getElementsByTagName('td')[2];
var turn_player_image = document.getElementsByClassName('players-turn')[0].getElementsByTagName('img')[0];

var roundsInfo = document.getElementsByClassName('rounds-info')[0].getElementsByTagName('td');

startGameButton.addEventListener('click', refreshGame);

for (var i = 0; i < squares.length; i ++) {
    squares[i].addEventListener('click', nextMove);
}

function startGame() {
    document.turn = 1;
    document.winner = null;
    setMessage(document.turn + "e speler begint met spelen.");
    setTurnInfo(document.turn);
}

function setTurnInfo(player){
    turn_player_number.innerHTML = player;
    turn_player_image.src = player_images[player];
    //document.getElementById("message").innerText = msg;
    setMessage("Speler " + document.turn + " is aan de beurt");
}


function setMessage(msg){
    document.getElementById("message").innerText = msg;
}

function nextMove() {
//console.log(document.winner, this.src.search('empty'));
    if (document.winner != null){
        setMessage("Speler " + document.turn + " heeft al gewonnen.")
    } else if(this.src.search('empty') >= 0) {
        this.src = player_images[document.turn];
        //this.src = 'img/' + document.turn + '.jpg';
        switchTurn();
    } else {
        setMessage("Kies een ander speelvak.");
        // setMessage(document.turn);
    }
}

function switchTurn() {
    if (checkForWinner(document.turn)) {
        setMessage("Gefeliciteerd speler " + document.turn + " heeft gewonnen!");
        document.winner = document.turn;
        winnerScore();
        totalRounds();
    } else if (document.turn == 1) {
        document.turn = 2;
        setTurnInfo(document.turn)
    } else {
        document.turn = 1;
        setTurnInfo(document.turn)
    }
}

function checkForWinner(player) {
    var result = false;
    if(checkRow(1,2,3, player) ||
       checkRow(4,5,6, player) ||
       checkRow(7,8,9, player) ||
       checkRow(1,4,7, player) ||
       checkRow(2,5,8, player) ||
       checkRow(3,6,9, player) ||
       checkRow(1,5,9, player) ||
       checkRow(3,5,7, player)) {
        result = true;
      }
      return result;
}

function checkRow (a, b, c, player) {
    var result = false;
    if (getBox(a).search(player_images[player]) >= 0 &&
        getBox(b).search(player_images[player]) >= 0 &&
        getBox(c).search(player_images[player]) >= 0){
        result = true;
    }
    return result;
}

function getBox(number) {
    return squares[number - 1].src;
  //return document.getElementById("s" + number).innerText
}
function winnerScore() {
    if (document.winner == 1) {
        roundsInfo[1].innerHTML =String(parseInt(roundsInfo[1].innerHTML) +1);
    }
    else {
        roundsInfo[3].innerHTML = String(parseInt(roundsInfo[3].innerHTML) +1) ;
    }
}

function totalRounds() {
console.log(roundsInfo);
    roundsInfo[5].innerHTML =String(parseInt(roundsInfo[5].innerHTML) +1);
}

function refreshGame(number) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].src = player_images[0];
    }
    document.winner = null;
}

