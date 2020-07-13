function nthTriangularNumber(n) {
  if (n === 0) {
    return 0;
  }

  return n + nthTriangularNumber(n - 1);
}

console.log(nthTriangularNumber(3));

// (n * (n+1)) / 2

// n = 3
// 3 + nthTriangularNumber(2)
// n = 2
// 2 + nthTriangularNumber(1)
// n = 1
// 1 + nthTriangularNumber(0)
// BASE CASE n === 0, return 0

// 3 + nthTriangularNumber(2) + nthTriangularNumber(1) + nthTriangularNumber(0)

// 3 + 2 + 1 + 0
