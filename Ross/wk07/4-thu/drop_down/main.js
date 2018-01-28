
var cities = ["NYC", "SF", "LA", "SYD", "ATX"];
var select = document.querySelector('select');

for (var i = 0; i < cities.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = cities[i];
  // option.value =
  select.appendChild(option);
}
