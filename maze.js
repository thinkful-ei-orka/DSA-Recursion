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
  let left = '';
  let up = '';
  let down = '';
  let right = '';

  if (col - 1 >= 0) {
    left = maze[row][col - 1];
  }
  if (col + 1 < maze[row].length) {
    right = maze[row][col + 1];
  }
  if (row + 1 < maze.length) {
    down = maze[row + 1][col];
  }
  if (row - 1 >= 0) {
    up = maze[row - 1][col];
  }

  if (right === 'e') {
    return 'R';
  }
  if (left === 'e') {
    return 'L';
  }
  if (down === 'e') {
    return 'D';
  }
  if (up === 'e') {
    return 'U';
  }

  maze[row][col] = '*';

  if (right === ' ') {
    return 'R' + escapeMaze(maze, row, col + 1);
  } else if (down == ' ') {
    return 'D' + escapeMaze(maze, row + 1, col);
  } else if (left == ' ') {
    return 'L' + escapeMaze(maze, row, col - 1);
  } else if (up == ' ') {
    return 'U' + escapeMaze(maze, row - 1, col);
  }

  return false;
}

console.log(escapeMaze(myBigMaze, 0, 0));
