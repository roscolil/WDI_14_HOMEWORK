var multipleTotals = 0;
var num = process.argv[2];


for (var i = 0; i <= num; i++) {
  if (i % 3 === 0 || i % 5 === 0){
    multipleTotals += i;
  }
}

console.log(multipleTotals);
