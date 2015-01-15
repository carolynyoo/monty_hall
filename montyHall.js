function Game () {
  this.doors = 3;
  this.carDoor = Math.floor(Math.random()*this.doors)+1;
  this.pickedDoor = Math.floor(Math.random()*this.doors)+1;
  this.switchedDoor = null;
}

Game.prototype.reveal = function () {
  var goatDoors = [];
  // how to return either first or second goat door? 
  for (var i=1; i<=this.doors; i++) {
    if (i!== this.carDoor && i!==this.pickedDoor) {
      goatDoors.push(i);
    }
  }
  return goatDoors[0];
}

Game.prototype.change = function () {
  for (var i=1; i <=this.doors; i++) {
    if (i!==this.reveal() && i!==this.pickedDoor) {
      this.switchedDoor = i;
    }
  }
  return this.switchedDoor===this.carDoor;
}

Game.prototype.stay = function () {
  return this.pickedDoor===this.carDoor;
}

function montyHall () {
  var winsSwitch=0;
  var winsNoSwitch=0;
  for (var i=0; i<1000; i++) {
    var game=new Game();
    winsSwitch+=game.change();
  }
  for (var j=0; j<1000; j++) {
    var game=new Game();
    winsNoSwitch+=game.stay();
  }
  console.log("Wins if you switch: "+((winsSwitch/1000)*100)+"%\nWins if you don't switch: "+((winsNoSwitch/1000)*100)+"%");
}

montyHall();