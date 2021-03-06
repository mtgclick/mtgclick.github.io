var app = angular.module('app', []);

app.controller('test', [function() {
  var self = this;
  
  this.players = [
    new player('Player 1')
    , new player('Player 2')
  ];
  
  this.firstPlayer = function() {
    if(Math.random() <= .5) {
      alert(this.players[0].name + ' goes first');
    } else {
      alert(this.players[1].name + ' goes first');
    }
  }
  
  this.newGame = function() {
    self.players.forEach(function(p) { p.life = 20;});
  }
}]);

function player(name)  {
  var self = this;
  this.life = 20;
  this.name = name;
  this.addLife = function() { 
    self.life++;
  }
  this.removeLife = function() { 
    self.life--;
    if(self.life <= 0) {
      alert('game over');
    }
  }
  
  this.setName = function() {
    var newName = prompt('Set players name');
    if(newName && newName != "") {
      self.name = newName;
    }
  }
}

// analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-52156403-1', 'mtgclick.com');
ga('send', 'pageview');
