const billTypeTextElement = document.querySelector(".billTypeText");
const addToBillButtonElement = document.querySelector(".addToBillBtn");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");

var callsTotal = 0;
var smsTotal = 0;

function textBillTotal(){
    var billTypeText = billTypeTextElement.value.trim();

    if (billTypeText == "call"){
        callsTotal += 2.75;
    } else if (billTypeText == "sms"){
        smsTotal += 0.75;
    }

    callTotalOneElement.innerHTML = callsTotal.toFixed(2);
    smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalOneElement.innerHTML = costTotal.toFixed(2);

    
    totalOneElement.classList.remove("warning","danger");

    if (costTotal >= 30 && costTotal < 50){
        totalOneElement.classList.add("warning");
    }
    else if (costTotal >= 50){
        totalOneElement.classList.add("danger");
    }
}

addToBillButtonElement.addEventListener('click',textBillTotal);
