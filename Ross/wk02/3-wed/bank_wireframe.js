var savingsBalance = document.querySelector('.savings_balance span');
var checkingBalance = document.querySelector('.checking_balance span');
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
  if (savingsResult >= Number(savingsInput.value)) {
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
    if (checkingResult >= Number(checkingInput.value)) {
      checkingResult = checkingResult - Number(checkingInput.value);
      checkingBalance.textContent = checkingResult;
      checkingInput.value = '';
  }

  if (checkingResult === 0) {
    checkingInput.style.backgroundColor = 'red';
  }
};

// Overdraft function..

// if (savingsResult < savingsInput && checkingResult > savingsInput) {
//   savingsResult = checkingResult - savingsInput;
//   savingsBalance.textContent = savingsResult;
// }
//
// if (chekingResult < checkingInput && savingsResult > checkingInput) {
//   checkingResult = savingsResult - checkingInput;
//   checkingBalance.textContent = checkingResult;
// }

depositButtonSave.addEventListener('click', depositSavings);
withdrawButtonSave.addEventListener('click', withdrawSavings);
depositButtonCheck.addEventListener('click', depositChecking);
withdrawButtonCheck.addEventListener('click', withdrawChecking);
