const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");
const totalCost_RadioElement = document.querySelector(".totalCost_Radio");

const radioBill = phoneBill();

function radioBillBtn() {
    var checkedRadioBtn = document.querySelector(".billItemTypeRadio:checked");

    radioBill.addToType(checkedRadioBtn.value);

    callTotalTwoElement.innerHTML = radioBill.callTotalValue();
    smsTotalTwoElement.innerHTML = radioBill.smsTotalValue();
    totalTwoElement.innerHTML = radioBill.billTotal();

    totalCost_RadioElement.classList.remove("warning", "danger");
    totalCost_RadioElement.classList.add(radioBill.indicator());
}

radioBillAddBtnElement.addEventListener('click', radioBillBtn);