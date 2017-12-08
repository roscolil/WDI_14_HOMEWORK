var savingsBalance = document.querySelector('span');
var checkingBalance = document.querySelector('span');
var depositButtonSave = document.querySelector('.deposit_button_save');
var withdrawButtonSave = document.querySelector('.withdraw_button_save');
var depositButtonCheck = document.querySelector('.deposit_button_check');
var withdrawButtonCheck = document.querySelector('.withdraw_button_check');
var savingsInput = document.querySelector('.savings_in');
var checkingInput = document.querySelector('.checking_in');
var savingsResult = 0;
var checkingResult = 0;

var depositSavings = function () {
  savingsResult = savingsResult + Number(savingsInput.value);
  savingsBalance.textContent = savingsResult;
  savingsInput.style.backgroundColor = 'lightgrey';
  savingsInput.value = '';
};

var withdrawSavings = function () {
  if (savingsResult >= savingsInput.value) {
    savingsResult = savingsResult - Number(savingsInput.value);
    savingsBalance.textContent = savingsResult;
    savingsInput.value = '';
  }

  if (savingsResult === 0) {
  savingsInput.style.backgroundColor = 'red';
  }
};

var depositChecking = function () {
  checkingResult = checkingResult + Number(checkingInput.value);
  checkingBalance.textContent = checkingResult;
  checkingInput.style.backgroundColor = 'lightgrey';
  checkingInput.value = '';
};

var withdrawChecking = function () {
    if (depositResult > checkingInput.value) {
      checkingResult = depositResult - Number(checkingInput.value);
      checkingBalance.textContent = depositResult;
      checkingInput.value = '';
  }

  if (checkingResult === 0) {
    checkingInput.style.backgroundColor = 'red';
  }
};

depositButtonSave.addEventListener('click', depositSavings);
withdrawButtonSave.addEventListener('click', withdrawSavings);
depositButtonCheck.addEventListener('click', depositChecking);
withdrawButtonCheck.addEventListener('click', withdrawChecking);
