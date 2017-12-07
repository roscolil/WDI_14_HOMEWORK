var savingsBalance = document.querySelector('.savings_balance');
var checkingBalance = document.querySelector('.checking _balance');
var depositButtonSave = document.querySelector('.deposit_button_save');
var withdrawButtonSave = document.querySelector('.withdraw_button_save');
var savingsInput = document.querySelector('.savings_in');
var checkingInput = document.querySelector('.checking_in');

var depositSavings = function () {
  var result = result + Number(savingsInput.value);
  savingsBalance.textContent = result;
};

depositButtonSave.addEventListener('click', depositSavings);
