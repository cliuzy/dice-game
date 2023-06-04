/*
- The game has two players, playing in rounds
- In each turn players rolls  a dice as many times as he wishes. Each result get added  to his Round score
- But if the players rolls a 1, all his rRound score get lost. After that, its the next  player's turn 
- The player can choose to hold, which means his score get added to his Global score. After that, it's the next player's turn
- The first player to reach 100 points on Global scores win the game.
*/


var scores, activePlayer, roundScore, gamePlaying;

var diceDom = document.querySelector('.dice');

//init

init();

//console.log();
//document.querySelector('#current-1').textContent = dice;

document.querySelector('.btn-roll').addEventListener('click', function () {
   
    if(gamePlaying){
         //Generate Random Number

        var dice = Math.floor(Math.random() * 6) + 1;

        //displayThe result

        var diceDom = document.querySelector('.dice');

        diceDom.style.display = 'block';

        diceDom.src = 'Dice-' + dice + '.jpg';

        //Update the round score

        if (dice !== 1) {

        roundScore += dice;

        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
        }
            

    } else {

        nextPlayer();
            // document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
    }
        
});  

document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if(gamePlaying){

         //    Add current score to the current score 

         scores[activePlayer] += roundScore;

         //Update the UI
     
         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
     
         //Check if the player won the game
        if (scores[activePlayer] >= 100) {
             document.querySelector('#name-' + activePlayer).textContent = 'winner!!';
     
             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
             document.querySelector('.dice').style.display = 'none';
     
             roundScore = 0;
             document.getElementById('current-' + activePlayer).textContent = '0';
            
             gamePlaying = false;
        }   
     
     
    } else { 
        nextPlayer();
    }
        
});


//  nextPlayer


function nextPlayer() {


        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        diceDom.style.display = 'none';

        roundScore = 0;

        document.getElementById('current-0').textContent = 0;

        document.getElementById('current-1').textContent = 0;


        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    

};


document.querySelector('.btn-new').addEventListener('click', init);

//init
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    //Hint gameplaying
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player-1';
    document.getElementById('name-1').textContent = 'player-2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


};  