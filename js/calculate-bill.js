const calculateButtonElement = document.querySelector(".calculateBtn");
const billTotalElement = document.querySelector(".billTotal");
const billStringElement = document.querySelector(".billString");

function totalPhoneBill(usage) {
    var arrUsage = usage.trim().split(/,\s*/);
    var callUsage = [];
    var smsUsage = [];

    for (var i = 0; i < arrUsage.length; i++) {
      if (arrUsage[i].startsWith('c')) {
        callUsage.push(arrUsage[i]);
      } else if (arrUsage[i].startsWith('s')) {
        smsUsage.push(arrUsage[i]);
      };
    };
  
    var callCost = callUsage.length * 2.75;
    var smsCost = smsUsage.length * 0.75;
    var totalCost = callCost + smsCost;
    var billAmt = totalCost.toFixed(2).toString();
  
    return billAmt;
}

function calculateBtnClicked(){
    var billString = billStringElement.value;
    var billTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = billTotal;

    billTotalElement.classList.remove("warning","danger");

    if (billTotal >= 20 && billTotal < 30){
        billTotalElement.classList.add("warning");
    }
    else if (billTotal >= 30){
        billTotalElement.classList.add("danger");
    }
}

calculateButtonElement.addEventListener('click',calculateBtnClicked);

