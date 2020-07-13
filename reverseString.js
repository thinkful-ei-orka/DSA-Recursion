function reverseString(string) {
  if (string === '') {
    return '';
  }
  return (
    string[string.length - 1] +
    reverseString(string.substring(0, string.length - 1))
  );
}

console.log(reverseString('reverse'));
