function fibonacci(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

function printSequence(index) {
  for (let i = 1; i <= index; i++) {
    console.log(fibonacci(i));
  }
}

printSequence(7);
