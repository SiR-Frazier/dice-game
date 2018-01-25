//back-end logic
function Player(name) {
  this.name = name;
  this.total = 0; // total score
  this.running = 0; //score from current round
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}

Player.prototype.playerScore = function() {
  return this.name + ": " + this.total;
}

Player.prototype.hold = function(points) {
  this.total += this.running;
}

Player.prototype.rolledOnes = function() {
  this.running = 0;
}

Player.prototype.roll = function() {
  var dieRoll = Math.ceil(Math.random() * Math.ceil(6));
  if (dieRoll === 1) {
    this.running = 0;
  } else {
    dieRoll += this.running;
  }
}
  // if (diceArray(i) === 0) {
  //   alert("Next player up!")
  // };
  // randomNumber();
// $(this).submit("input#new-name").val();
//  //front-end logic
$(document).ready(function(){
  $("#addButton").click(function(event){
    event.preventDefault();
    var name = $("input#new-name").val();
    var player = new Player(name, 0, 0);
    console.log(player);
    player.roll()
    $(".playerName").append(player.name);
  });
});
