const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillButtonElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const totalCost_billElement = document.querySelector(".totalCost_bill");

const textBill = phoneBill();

function textBillBtn(){
var billTypeText = billTypeTextElement.value.trim();

textBill.addToType(billTypeText);

callTotalOneElement.innerHTML = textBill.callTotalValue();
smsTotalOneElement.innerHTML = textBill.smsTotalValue();
totalOneElement.innerHTML = textBill.billTotal();

totalCost_billElement.classList.remove("warning", "danger");
totalCost_billElement.classList.add(textBill.indicator());
}

addToBillButtonElement.addEventListener('click', textBillBtn);

