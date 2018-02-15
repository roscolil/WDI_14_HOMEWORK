var multipleTotals = 0;
// var num = 0;
// var num = process.argv[2];

// Having some trouble getting the 3 or 5 to add to total. Other calculations seem to be working ok.

if (process.argv[2] === 3) {
  multipleTotals = 3;
} else if (process.argv[2] === 5) {
  multipleTotals = 5;
}

for (var i = 0; i < process.argv[2]; i++) {
  if (i % 3 === 0 || i % 5 === 0){
    multipleTotals += i;
  }
}


console.log(multipleTotals);

