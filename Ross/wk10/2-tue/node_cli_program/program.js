var sum = 0;
// for (i = 2; i < process.argv.length; i++) {
// 	sum += Number(process.argv[i]);
// }

process.argv.slice(2).forEach(function(elem){
  sum += Number(elem);
});

console.log(sum);
