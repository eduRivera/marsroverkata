
var grid = new Grid(100, 100);
var rover = new Rover(0, 0, 'n', grid);
rover.move('ffrff');
console.log('Is in 2,2:' + (rover.position[0] === 2 && rover.position[1] === 2));

grid = new Grid(2, 2);
rover = new Rover(0, 0, 'n', grid);
rover.move('bblbb');
console.log('Is in 0,0:' + (rover.position[0] === 0 && rover.position[1] === 0));

grid = new Grid(100, 100);
rover = new Rover(0, 0, 'n', grid);
grid.setObstacles([[2, 2]]);
rover.move('ffrff');
console.log('Is in 1,2:' + (rover.position[0] === 1 && rover.position[1] === 2));
