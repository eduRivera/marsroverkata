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
    switch (this.orientation) {
      case 'n':
        this.orientation = 'e';
      break;
      case 'e':
        this.orientation = 's';
      break;
      case 's':
        this.orientation = 'w';
      break;
      case 'w':
        this.orientation = 'n';
      break;
    }
  },
  turnLeft: function () {
    switch (this.orientation) {
      case 'n':
        this.orientation = 'w';
      break;
      case 'w':
        this.orientation = 's';
      break;
      case 's':
        this.orientation = 'e';
      break;
      case 'e':
        this.orientation = 'n';
      break;
    }
  }
};
