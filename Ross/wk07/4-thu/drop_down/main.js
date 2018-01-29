var cities = ["NYC", "SF", "LA", "SYD", "ATX"];
var select = document.querySelector('select');

for (var i = 0; i < cities.length; i++) {
  var option = document.createElement('option');
  option.textContent = cities[i];
  option.value = cities[i];
  select.appendChild(option);
}


function loadPicture() {
  switch (option.value) {
    case cities[0]:
    document.body.classList.add('nyc');
    break;
    case cities[1]:
    document.body.classList.add('sf');
    break;
    case cities[2]:
    document.body.classList.add('la');
    break;
    case cities[3]:
    document.body.classList.add('sydney');
    break;
    case cities[4]:
    document.body.classList.add('austin');
    break;
    default:
  }
}


if (document.querySelector('body').classList.length >= 1) {
  document.querySelector('body').className = "";
  loadPicture();
}
