const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// to keep track of whether we can play game or not 
// when value of playing is false no button will work except newgame
let playing = true;
score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
// adding event listener to roll dice btn
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// switching active player
const playerSwitch = function(){
    document.getElementById('current--'+activePlayer).textContent = 0;
    activePlayer = activePlayer === 0 ? 1:0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// button roll
btnRoll.addEventListener('click', function(){
    if(playing){
    const dice = Math.floor(Math.random()*6)+1;
    diceEl.src = 'dice-'+dice+'.png';
    diceEl.classList.remove('hidden');
    currentScore+=dice;

    if(dice!=1){
        document.getElementById('current--'+activePlayer).textContent = currentScore;
    }else{
        playerSwitch();    
    }
}
});

// hold button

btnHold.addEventListener('click', function(){
    if(playing){
    // adding current score in score array
    scores[activePlayer] += currentScore;

    // display the current score of a player
    document.getElementById("score--"+activePlayer).textContent = scores[activePlayer];
    
    // check if current score of the player is greater than 100 then stop the game 
    if(scores[activePlayer] >= 100){
        document.querySelector(".player--"+activePlayer).classList.remove('player-active');
        document.querySelector(".player--"+activePlayer).classList.add('player--winner');
        // setting the value of playing to false so that no button can work  except newgame
        playing = false;     
        diceEl.classList.add('hidden');  
    }else{
    // switch the player
        playerSwitch();
    }
}
});

btnNew.addEventListener('click', function(){
        document.querySelector(".player--0").classList.add('player--active');
        document.querySelector(".player--1").classList.remove('player--active');
        document.querySelector(".player--1").classList.remove('player--winner');
        document.querySelector(".player--1").classList.remove('player--winner');

        // setting scores value 0
        scores[0] = 0;
        scores[1] = 0;
        //setting current score value 0
        currentScore = 0;

        score0El.textContent = 0;
        score1El.textContent = 0;
        current0El.textContent = 0;
        current1El.textContent = 0;
        // setting playing value to true so that we can further play the game
        playing = true;       
        activePlayer = 0;

        //hide the dice
        diceEl.classList.add('hidden');
}
);