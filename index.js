// Define the players and their cards
var players = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };
  
  // Function to play a card for a given player
  function play(player) {
    var card = Math.floor(Math.random() * 100) + 1; // Generate a random card between 1 and 100
    players[player] = card; // Update the player's card
    document.getElementById('card' + player).innerHTML = card; // Update the display
    checkWinner(); // Check if there is a winner
  }
  
  // Function to check if there is a winner
  function checkWinner() {
    var maxCard = 0;
    var winner = 0;
    for (var player in players) {
      if (players[player] > maxCard) {
        maxCard = players[player];
        winner = player;
      }
    }
    document.getElementById('winner').innerHTML = 'Player ' + winner + ' wins with card ' + maxCard;
  }