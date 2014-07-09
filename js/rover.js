var Rover = {
  init: function (x, y, orientation) {
    this.position = [x, y];
    this.orientation = orientation;
  },
  move: function (commands) {
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
  },
    moveForward: function () {
    this.advance('forward');
  },
  moveBackward: function () {
    this.advance('backward');
  },
  advance: function (direction) {
    direction = (direction === 'forward') ? 1 : -1;
    var X = this.position[0], Y = this.position[1];

    var increment = this.increments[this.orientation];
    X = (X + increment[0] * direction) % Grid.sizeX;
    Y = (Y + increment[1] * direction) % Grid.sizeY;
    if (X < 0) {
      X += Grid.sizeX;
    }
    if (Y < 0) {
      Y += Grid.sizeY;
    }
    if (!Grid.thereIsObstacle(X, Y)) {
      this.position = [X, Y];
    }
  },
  increments: {
    n: [0, 1],
    e: [1, 0],
    s: [0, -1],
    w: [-1, 0]
  },
  turnRight: function () {
    this.turn('right');
  },
  turnLeft: function () {
    this.turn('left');
  },
  turn: function(direction) {
    var currentIndex = this.orientations.indexOf(this.orientation);
    var newIndex = currentIndex + (direction === 'right' ? 1 : -1);
    if (newIndex < 0) {
      newIndex = this.orientations.length + newIndex;
    }
    this.orientation = this.orientations[newIndex];
  },
  orientations: 'nesw'
};
