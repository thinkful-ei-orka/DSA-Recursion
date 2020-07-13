let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

let myBigMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

function escapeMaze(maze, row, col) {
  // if (row < 0 || row > 7) {
  //     return "row must be greater than 0 and less that 7"
  // }
  // if (col < 0) || col > 5) {
  // }

  let right = maze[row][col + 1];
  let left = maze[row][col - 1];
  let up = maze[row - 1][col];
  let down = maze[row + 1][col];

  if (right === 'e' || left === 'e' || up === 'e' || down === 'e') {
    return true;
  }

  maze[row][col] = '*';

  if (right === ' ') {
    console.log('R');
    return escapeMaze(maze, row, col + 1);
  } else if (left == ' ') {
    console.log('L');
    return escapeMaze(maze, row, col - 1);
  } else if (up == ' ') {
    console.log('U');
    return escapeMaze(maze, row - 1, col);
  } else if (down == ' ') {
    console.log('D');
    return escapeMaze(maze, row - 1, col);
  }
  return false;
}

escapeMaze(mySmallMaze, 0, 0);
