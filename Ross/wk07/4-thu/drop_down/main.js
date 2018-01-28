var cities = ["NYC", "SF", "LA", "SYD", "ATX"];
var select = document.querySelector('select');

for (var i = 0; i < cities.length; i++) {
  var option = document.createElement('option');
  option.innerHTML = cities[i];
  select.appendChild(option);
}

// switch (select) {
//   case cities[0]:
//     document.('select')[0].classList.add('.nyc');
//     break;
//   case cities[1]:
//     document.querySelector('select')[1].classList.add('.sf');
//     break;
//   case cities[2]:
//     document.querySelector('select')[2].classList.add('.ls');
//     break;
//   case cities[3]:
//     document.querySelector('select')[3].classList.add('.sydney');
//     break;
//   case cities[4]:
//     document.querySelector('select')[4].classList.add('.austin');
//     break;
//   default:
// }
