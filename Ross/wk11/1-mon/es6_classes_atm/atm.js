let transactionHistory = [];
let balance = 0;

class Atm {
  constructor(type, money){
    this.type = type;
    this.money = money;
  }

  withdraw(amt){
    balance = this.money - amt;
    this.money = balance;
    transactionHistory.push(amt);
    return balance;
  }

  deposit(amt){
    balance = this.money + amt;
    this.money = balance;
    transactionHistory.push(amt);
    return balance;
  }

  showBalance(){
    return console.log(balance);
  }
}


let myAccount = new Atm('savings', 0);

myAccount.deposit(100);
myAccount.showBalance();

myAccount.withdraw(50);
myAccount.showBalance();

myAccount.deposit(20);
myAccount.showBalance();
