function sumOfMultiples(num) {
  var multipleTotals = 0;
  for (var i = 0; i < num; i++)
  {
      if (i % 3 === 0 || i % 5 === 0)
      {
          multipleTotals += i;
      }
  }
  return multipleTotals;
}

// sumOfMultiples();