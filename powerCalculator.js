function powerCalculator(baseInt, exponent) {
  if (exponent < 0) {
    return 'exponent should be >= 0';
  }
  if (exponent === 0) {
    return 1;
  }
  return baseInt * powerCalculator(baseInt, exponent - 1);
}

console.log(powerCalculator(10, 2));
console.log(powerCalculator(10, -2));
