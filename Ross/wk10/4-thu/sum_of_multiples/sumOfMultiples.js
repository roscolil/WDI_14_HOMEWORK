var multipleTotals = 0;
var num = 0;
// var num = process.argv[2];

for (var i = 0; i < process.argv[2]; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    multipleTotals += i;
  }
}

if (process.argv[2] === 3) {
  num = 3;
} else if (process.argv[2] === 5) {
  num = 5;
}

console.log(multipleTotals + num);

