var savingsBalance = document.querySelector('.savings_balance');
var checkingBalance = document.querySelector('.checking_balance');
var depositButtonSave = document.querySelector('.deposit_button_save');
var withdrawButtonSave = document.querySelector('.withdraw_button_save');
var depositButtonCheck = document.querySelector('.deposit_button_check');
var withdrawButtonCheck = document.querySelector('.withdraw_button_check');
var savingsInput = document.querySelector('.savings_in');
var checkingInput = document.querySelector('.checking_in');
var savingsResult;
var depositResult;

var depositSavings = function () {
  savingsResult = Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
  savingsInput.value = '';
};

depositButtonSave.addEventListener('click', depositSavings);

var withdrawSavings = function () {
  savingsResult = savingsResult - Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
  savingsInput.value = '';
};

withdrawButtonSave.addEventListener('click', withdrawSavings);

var depositChecking = function () {
  depositResult = Number(checkingInput.value);
  checkingBalance.textContent = depositResult;
  checkingInput.value = '';
};

depositButtonCheck.addEventListener('click', depositChecking);

var withdrawChecking = function () {
  depositResult = depositResult - Number(checkingInput.value);
  checkingBalance.textContent = depositResult;
  checkingInput.value = '';
};

withdrawButtonCheck.addEventListener('click', withdrawChecking);
