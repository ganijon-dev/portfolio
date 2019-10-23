var scores, prevDice, roundScore, activePlayer, gamePlaying;

init();




document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if (gamePlaying){
        
            //1.Random Number
        
        
        var dice = Math.floor(Math.random()*6)+1;
        
        var dice2 = Math.floor(Math.random()*6)+1;
        
        
        
    
        //2.Display the result
    
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png'
        
        document.querySelector('.dice-2').style.display = 'block';
        document.querySelector('.dice-2').src = 'dice-' + dice2 + '.png'
        
        
        //3. Update the Round score if the rolled was not 1 
    
     
        
        
        
         if (dice > 1 && dice2 > 1){
             totalDice = dice + dice2
            roundScore += totalDice;
            document.querySelector('#current-'+ activePlayer).textContent = roundScore;
            
        }
        
        else {
            
            nextPlayer();
        //next player
          
        }
        
        
        
    }
    
}) 



document.querySelector('.btn-hold').addEventListener('click', function(){
    
    
    if (gamePlaying){
        
        //Add the current to total score
        scores[activePlayer] += roundScore;
    
        //Update UI 
        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
        
        var winScore = document.querySelector('.input_field').value ;
        var winningScore;
        if (winScore) {
            winningScore = winScore;
        }
        else {
            winningScore = 100;
            
        }
    
        //Check if Player win the game
        if (scores[activePlayer] >=winningScore){
            document.querySelector('#name-' + activePlayer).textContent = "Winner";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
            gamePlaying = false;
        
        }
        else {
            nextPlayer();
        }   
    }    
});


function nextPlayer(){
    
    activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

       
}

document.querySelector('.btn-new').addEventListener('click', init);


function init (){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0 ;
    gamePlaying = true;
    
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;


    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('#name-0').textContent = "Player 1";
    document.querySelector('#name-1').textContent = "Player 2";
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
    
};

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
