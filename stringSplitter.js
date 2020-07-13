function stringSplitter(string, delimiter, arr = []) {
  let indexOfDelim = string.indexOf(delimiter);

  if (indexOfDelim === -1) {
    arr.push(string);
    return arr;
  }

  let stringBeforeDelim = string.substring(0, indexOfDelim);
  let stringAfterDelim = string.substring(indexOfDelim + 1);

  return [
    stringBeforeDelim,
    ...stringSplitter(stringAfterDelim, delimiter, arr),
  ];
}

console.log(stringSplitter('02/20/2020', '/'));
