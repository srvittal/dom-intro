const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillButtonElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const totalCost_billElement = document.querySelector(".totalCost_bill");

var callsTotalOne = 0;
var smsTotalOne = 0;

function textBillTotal() {
    var billTypeText = billTypeTextElement.value.trim();

    if (billTypeText == "call") {
        callsTotalOne += 2.75;
    } else if (billTypeText == "sms") {
        smsTotalOne += 0.75;
    }

    callTotalOneElement.innerHTML = callsTotalOne.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotalOne.toFixed(2);
    var costTotalOne = callsTotalOne + smsTotalOne;
    totalOneElement.innerHTML = costTotalOne.toFixed(2);


    totalOneElement.classList.remove("warning", "danger");

    if (costTotalOne >= 30 && costTotalOne < 50) {
        totalCost_billElement.classList.add("warning");
    }
    else if (costTotalOne >= 50) {
        totalCost_billElement.classList.add("danger");
    }
}

addToBillButtonElement.addEventListener('click', textBillTotal);
