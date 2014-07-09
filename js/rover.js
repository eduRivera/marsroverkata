function Rover(x, y, orientation, map) {
  this.position = [x, y];
  this.orientation = orientation;
  this.map = map;
}

Rover.prototype.move = function (commands) {
  for (var i = 0; i < commands.length; i++) {
    var c = commands[i];
    switch (c) {
      case 'f':
        this.moveForward();
      break;
      case 'b':
        this.moveBackward();
      break;
      case 'r':
        this.turnRight();
      break;
      case 'l':
        this.turnLeft();
      break;
      default:
        console.log('Unrecognized command: ' + c);
      break;
    }
  }
};

Rover.prototype.moveForward = function () {
  this.advance('forward');
};

Rover.prototype.moveBackward = function () {
  this.advance('backward');
};

Rover.prototype.advance = function (direction) {
  direction = (direction === 'forward') ? 1 : -1;
  var X = this.position[0], Y = this.position[1];

  var increment = this.increments[this.orientation];
  X = (X + increment[0] * direction) % this.map.sizeX;
  Y = (Y + increment[1] * direction) % this.map.sizeY;
  if (X < 0) {
    X += this.map.sizeX;
  }
  if (Y < 0) {
    Y += this.map.sizeY;
  }
  if (!this.map.thereIsObstacle(X, Y)) {
    this.position = [X, Y];
  }
};

Rover.prototype.increments = {
  n: [0, 1],
  e: [1, 0],
  s: [0, -1],
  w: [-1, 0]
};

Rover.prototype.turnRight = function () {
  this.turn('right');
};

Rover.prototype.turnLeft = function () {
  this.turn('left')
};

Rover.prototype.turn = function (direction) {
  var currentIndex = this.orientations.indexOf(this.orientation);
  var newIndex = currentIndex + (direction === 'right' ? 1 : -1);
  if (newIndex < 0) {
    newIndex = this.orientations.length + newIndex;
  }
  this.orientation = this.orientations[newIndex];
};

Rover.prototype.orientations = 'nesw';
