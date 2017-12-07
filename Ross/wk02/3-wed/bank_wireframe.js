var savingsBalance = document.querySelector('.savings_balance');
var checkingBalance = document.querySelector('.checking _balance');
var depositButtonSave = document.querySelector('.deposit_button_save');
var withdrawButtonSave = document.querySelector('.withdraw_button_save');
var depositButtonCheck = document.querySelector('.deposit_button_check');
var withdrawButtonCheck = document.querySelector('.withdraw_button_check');
var savingsInput = document.querySelector('.savings_in');
var checkingInput = document.querySelector('.checking_in');

var depositSavings = function () {
  var savingsResult = Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
};

depositButtonSave.addEventListener('click', depositSavings);

var withdrawSavings = function () {
  var savingsResult = savingsResult - Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
};

withdrawButtonSave.addEventListener('click', withdrawSavings);

var depositChecking = function () {
  var depositResult = Number(checkingInput.value);
  checkingBalance.textContent = depositResult;
};

depositButtonCheck.addEventListener('click', depositChecking);

var withdrawChecking = function () {
  var depositResult = depositResult - Number(checkingInput.value);
};

withdrawButtonCheck.addEventListener('click', withdrawChecking);
