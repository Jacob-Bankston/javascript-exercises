
// Bank Account

class BankAccount {
    constructor(firstName, lastName, middleName, accountType, balance, accountStatus) {
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.accountType = accountType
        this.balance = balance
        this.accountStatus = accountStatus
    }
  
    transferFunds(amount, toAccount) {
      if(this.accountStatus == "Closed" || this.accountStatus == "Frozen") {
        if(this.accountStatus == "Closed") {
          console.log("This account has been Closed.")
        } else {
          console.log("This account has been Frozen. Please Pay back up to $0 to unfreeze the account.")
        }
      } else {
        this.balance -= amount
        toAccount.balance += amount
        if(toAccount.accountStatus == "Frozen" && toAccount.balance >= 0) {
            console.log(`${toAccount.firstName} ${toAccount.lastName}'s account is now unfrozen.`)
            toAccount.accountStatus = "Open"
        }
        if(this.balance < 0) {
          fromAccount.balance -= 35
          console.log(`Overdrawn Penalty -$35. Current Balance of ${this.balance}. Frozen until balance is 0`)
          this.accountStatus = "Frozen"
        }
      }
    }
  
    withdraw(amount) {
      if(this.accountStatus == "Closed" || this.accountStatus == "Frozen") {
        if(this.accountStatus == "Closed") {
          console.log("This account has been Closed.")
        } else {
          console.log("This account has been Frozen. Please Pay back up to $0 to unfreeze the account.")
        }
      } else {
        this.balance -= amount
        if(this.balance < 0) {
          this.balance -= 35
          console.log(`Overdrawn Penalty -$35. Current Balance of ${this.balance}. Frozen until balance is 0`)
          this.accountStatus = "Frozen"
        }
      }
    }
  
    deposit(amount) {
      if(this.accountStatus == "Closed") {
        console.log("This account has been Closed.")
      } else {
        this.balance += amount
        if(this.balance < 0) {
          console.log(`Account Still Frozen. Current Balance of ${this.balance}. Frozen until balance is 0`)
          this.accountStatus = "Frozen"
        } else {
            console.log("This account is now unfrozen.")
            this.accountStatus = "Open"
        }
      }
    }
  
    closeAccount() {
      if(this.accountStatus == "Closed" || this.accountStatus == "Frozen") {
        if(this.accountStatus == "Closed") {
          console.log("This account is already Closed.")
        } else {
          console.log(`Account Still Frozen. Current Balance of ${this.balance}. Frozen until balance is 0`)
        }
      } else {
        this.accountStatus = "Closed"
      }
    }
  
    reOpenAccount() {
        if(this.accountStatus == "Open" || this.accountStatus == "Frozen") {
            if(this.accountStatus == "Open") {
              console.log("This account is already Open.")
            } else {
              console.log(`Account Still Frozen. Current Balance of ${this.balance}. Frozen until balance is 0`)
            }
          } else {
            this.accountStatus = "Open"
          }
        }
  }

  function openAccount(firstName, lastName, middleName, accountType, balance) {
    let newAccount = new BankAccount(firstName, lastName, middleName, accountType, balance, "Open")
    if(newAccount.balance < 100) {
      console.log("Policy States you must have an initial balance of $100.00 to make an account.")
      newAccount = undefined
    }
    return newAccount
  }
  
  jacob = openAccount("Jacob", "Bankston", "A", "Checking", 17500)
  ellie = openAccount("Ellie", "Gonzalez", "J", "Checking", 10000)
  
  console.log("New Bank Accounts!")
  console.log(jacob)
  console.log(ellie)
  
  ellie2 = openAccount("Ellie", "Gonzalez", "J", "Savings", 82742)
  
  console.log("New Savings Account!")
  console.log(ellie2)
  
  ellie2.withdraw(30000)
  
  console.log("Withdrew Funds for Car!")
  console.log(ellie2)
  
  console.log("Overdrafted for Car!!")
  jacob.withdraw(30000)
  
  console.log(jacob)
  
  ellie2.transferFunds(40000, jacob)
  
  console.log("Transfered funds to help!")
  console.log(jacob)
  console.log(ellie2)
  console.log(ellie)