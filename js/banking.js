const depositBtn = document.getElementById("deposit-button");
const withdrawBtn = document.getElementById("withdraw-button");

depositBtn.addEventListener("click", function () {
  changeBalance("deposit");
});

withdrawBtn.addEventListener("click", function () {
  changeBalance("withdraw");
  // const withdrawTotal = document.getElementById("withdraw-total");
  // const withdrawTotalText = withdrawTotal.innerText;
  // const withdrawTotalNumber = parseFloat(withdrawTotalText);
  // const newWithdraw = document.getElementById("withdraw-input");
  // const newWithdrawText = newWithdraw.value;
  // const newWithdrawNumber = parseFloat(newWithdrawText);
  // withdrawTotal.innerText = withdrawTotalNumber + newWithdrawNumber;
  // newWithdraw.value = "";

  // const newBalanceTotal = document.getElementById("balance-total");
  // const newBalanceTotalText = newBalanceTotal.innerText;
  // const newBalanceTotalNumber = parseFloat(newBalanceTotalText);
  // newBalanceTotal.innerText = newBalanceTotalNumber - newWithdrawNumber;
});

function changeBalance(type) {
  const previousTotal = document.getElementById(`${type}-total`);
  const previousTotalText = previousTotal.innerText;
  const previousTotalNumber = parseFloat(previousTotalText);

  const newMoney = document.getElementById(`${type}-input`);
  const newMoneyText = newMoney.value;
  if (newMoneyText > 0 ){
    const newMoneyNumber = parseFloat(newMoneyText);

    previousTotal.innerText = previousTotalNumber + newMoneyNumber;
    newMoney.value = "";

    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalNumber = parseFloat(balanceTotalText);


    if (type == "withdraw") {
      balanceTotal.innerText = balanceTotalNumber - newMoneyNumber;
    } else {
      balanceTotal.innerText = newMoneyNumber + balanceTotalNumber;
    }
  }
}
