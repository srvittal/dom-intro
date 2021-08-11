const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const warningLevelSettingElement = document.querySelector(".warningLevelSetting");
const criticalLevelElement = document.querySelector(".criticalLevelSetting");
const addBtnsettings = document.querySelector(".addBtnsettings");
const updateBtnsettings = document.querySelector(".updateSettings");
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");
const totalSettingsElement = document.querySelector(".totalSettings");

// Default settings 
var callCostSetting = 2.75;
var smsCostSetting = 0.75;
var warningLevelSetting = 20;
var criticalLevel = 30;

var callsTotal = 0;
var smsTotal = 0;

function updateSettings() {
    callCostSetting = Number(callCostSettingElement.value);
    smsCostSetting = Number(smsCostSettingElement.value);
    warningLevelSetting = Number(warningLevelSettingElement.value);
    criticalLevel = Number(criticalLevelElement.value);
}

function settingsBillTotal() {
    var checkedRadioBtn = document.querySelector(".billItemTypeWithSettings:checked");

    if (checkedRadioBtn.value === "call") {
        callsTotal += callCostSetting;
    } else if (checkedRadioBtn.value === "sms") {
        smsTotal += smsCostSetting;
    }

    callTotalSettingsElement.innerHTML = callsTotal.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotal.toFixed(2);
    var costTotal = callsTotal + smsTotal;
    totalSettingsElement.innerHTML = costTotal.toFixed(2);


    totalSettingsElement.classList.remove("warning", "danger");

    if (costTotal >= warningLevelSetting && costTotal < criticalLevel) {
        totalSettingsElement.classList.add("warning");
    }
    else if (costTotal >= criticalLevel) {
        totalSettingsElement.classList.add("danger");
    }
}

updateBtnsettings.addEventListener('click', updateSettings);
addBtnsettings.addEventListener('click', settingsBillTotal);