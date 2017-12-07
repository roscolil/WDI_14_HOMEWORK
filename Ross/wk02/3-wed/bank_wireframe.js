// Things to do
// Format currency output
// Turn input field to red on $0


var savingsBalance = document.querySelector('.savings_balance');
var checkingBalance = document.querySelector('.checking_balance');
var depositButtonSave = document.querySelector('.deposit_button_save');
var withdrawButtonSave = document.querySelector('.withdraw_button_save');
var depositButtonCheck = document.querySelector('.deposit_button_check');
var withdrawButtonCheck = document.querySelector('.withdraw_button_check');
var savingsInput = document.querySelector('.savings_in');
var checkingInput = document.querySelector('.checking_in');
// var savingsZero = savingsInput.style.background = 'red';
// var checkinZero = checkingInput.style.background = 'red';
var savingsResult;
var depositResult;

var depositSavings = function () {
  savingsResult = Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
  savingsInput.value = '';
};

var withdrawSavings = function () {
    if (savingsResult > savingsInput.value) {
      savingsResult = savingsResult - Number(savingsInput.value);
  } else {
      savingsBalance.textContent = savingsResult;
      savingsInput.value = '';
  }
};

var depositChecking = function () {
  depositResult = Number(checkingInput.value);
  checkingBalance.textContent = depositResult;
  checkingInput.value = '';
};

var withdrawChecking = function () {
    if (depositResult > checkingInput.value) {
      depositResult = depositResult - Number(checkingInput.value);
  } else {
      checkingBalance.textContent = depositResult;
      checkingInput.value = '';
  }
};

depositButtonSave.addEventListener('click', depositSavings);
withdrawButtonSave.addEventListener('click', withdrawSavings);
depositButtonCheck.addEventListener('click', depositChecking);
withdrawButtonCheck.addEventListener('click', withdrawChecking);
