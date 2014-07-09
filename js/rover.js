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
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    switch (this.orientation) {
      case 'n':
        this.position[1] = (this.position[1] + 1) % Grid.sizeY;
      break;
      case 'e':
        this.position[0] = (this.position[0] + 1) % Grid.sizeX;
      break;
      case 's':
        this.position[1] = (this.position[1] - 1);
        if (this.position[1] < 0) {
          this.position[1] = Grid.sizeY + this.position[1];
        }
      break;
      case 'w':
        this.position[0] = (this.position[0] - 1);
        if (this.position[0] < 0) {
          this.position[0] = Grid.sizeX + this.position[0];
        }
      break;
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
  },
  moveBackward: function () {
    var formerPosition = [
      this.position[0],
      this.position[1]
    ];
    switch (this.orientation) {
      case 's':
        this.position[1] = (this.position[1] + 1) % Grid.sizeY;
      break;
      case 'w':
        this.position[0] = (this.position[0] + 1) % Grid.sizeX;
      break;
      case 'n':
        this.position[1] = (this.position[1] - 1);
        if (this.position[1] < 0) {
          this.position[1] = Grid.sizeY + this.position[1];
        }
      break;
      case 'e':
        this.position[0] = (this.position[0] - 1);
        if (this.position[0] < 0) {
          this.position[0] = Grid.sizeX + this.position[0];
        }
      break;
    }
    if (Grid.thereIsObstacle(this.position[0], this.position[1])) {
      this.position = formerPosition;
    }
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
