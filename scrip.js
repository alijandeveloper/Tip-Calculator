function handleCustomTip() {
    const tipPercentage = document.getElementById("tipPercentage").value;
    const customTipInput = document.getElementById("customTip");
    if (tipPercentage === "custom") {
        customTipInput.style.display = "block";
    } else {
        customTipInput.style.display = "none";
    }
}

function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const peopleCount = parseInt(document.getElementById("peopleCount").value);
    let tipPercentage = document.getElementById("tipPercentage").value;
    
    if (tipPercentage === "custom") {
        tipPercentage = parseFloat(document.getElementById("customTip").value) / 100;
    } else {
        tipPercentage = parseFloat(tipPercentage);
    }
    
    if (isNaN(billAmount) || isNaN(peopleCount) || isNaN(tipPercentage)) {
        alert("Please enter valid inputs");
        return;
    }
    
    const totalTip = billAmount * tipPercentage;
    const totalBill = billAmount + totalTip;
    const perPerson = totalBill / peopleCount;
    
    document.getElementById("totalPerPerson").textContent = perPerson.toFixed(2);
}

document.getElementById("themeToggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});
