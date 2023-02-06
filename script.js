const fiveBtn = document.getElementById("five");
const tenBtn = document.getElementById("ten");
const fifteenBtn = document.getElementById("fifteen");
const twentyFiveBtn = document.getElementById("twenty-five");
const fiftyBtn = document.getElementById("fifty");
const billText = document.getElementById("bill");
const customBtn = document.querySelector(".custom-btn");
const peopleText = document.getElementById("people");
const amount = document.getElementById("amount");
const total = document.getElementById("total");
const resetBtn = document.querySelector(".btn");
const alertP = document.querySelector(".alert");

fiveBtn.addEventListener("click", () => {
  let val = parseInt(fiveBtn.textContent);
  calculateTip(val);
  console.log(val);
});

tenBtn.addEventListener("click", () => {
  let val = parseInt(tenBtn.textContent);
  calculateTip(val);
  console.log(val);
});

fifteenBtn.addEventListener("click", () => {
  let val = parseInt(fifteenBtn.textContent);
  calculateTip(val);
  console.log(val);
});

twentyFiveBtn.addEventListener("click", () => {
  let val = parseInt(twentyFiveBtn.textContent);
  calculateTip(val);
  console.log(val);
});

fiftyBtn.addEventListener("click", () => {
  let val = parseInt(fiftyBtn.textContent);
  calculateTip(val);
  console.log(val);
});

customBtn.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calculateTipV2();
  }
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

function calculateTip(val) {
  if (!validVal(parseInt(billText.value))) {
    billText.classList = "error-input";
  } else if (!validVal(parseInt(peopleText.value))) {
    peopleText.classList = "error-input";
    alertP.classList = "display";
  } else {
    const totalVal = (parseInt(billText.value) * val) / 100;
    const tip_amountVal = totalVal / parseInt(peopleText.value);
    total.textContent = `$${totalVal.toFixed(2)}`;
    amount.textContent = `$${tip_amountVal.toFixed(2)}`;
    resetBtn.disabled = false;
  }
}

function calculateTipV2() {
  if (!validVal(parseInt(billText.value))) {
    billText.classList = "error-input";
  } else if (!validVal(parseInt(peopleText.value))) {
    peopleText.classList = "error-input";
  } else {
    const totalVal =
      (parseInt(billText.value) * parseInt(customBtn.value)) / 100;
    const tip_amountVal = totalVal / parseInt(peopleText.value);
    total.innerHTML = `${tip_amountVal + billText.value}`;
    amount.textContent = `$${tip_amountVal.toFixed(2)}`;
    resetBtn.disabled = false;
  }
}
function validVal(value) {
  let regex = /^[0-9]+$/g;
  if (regex.test(value) != true || value == "") {
    return false;
  } else {
    return true;
  }
}
