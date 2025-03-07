document.addEventListener("DOMContentLoaded", function() {
    const tipPercentageSelect = document.getElementById("tipPercentage");
    const customTipInput = document.getElementById("customTip");
    const calculateBtn = document.getElementById("calculateBtn");
    const themeToggle = document.getElementById("themeToggle");

    // Custom Tip Input Show/Hide
    tipPercentageSelect.addEventListener("change", function() {
        if (this.value === "custom") {
            customTipInput.style.display = "block";
        } else {
            customTipInput.style.display = "none";
        }
    });

    // Tip Calculation
    calculateBtn.addEventListener("click", function() {
        const billAmount = parseFloat(document.getElementById("billAmount").value);
        const peopleCount = parseInt(document.getElementById("peopleCount").value);
        let tipPercentage = tipPercentageSelect.value;

        if (tipPercentage === "custom") {
            tipPercentage = parseFloat(customTipInput.value) / 100;
        } else {
            tipPercentage = parseFloat(tipPercentage);
        }

        if (isNaN(billAmount) || isNaN(peopleCount) || isNaN(tipPercentage) || billAmount <= 0 || peopleCount <= 0) {
            alert("Please enter valid inputs!");
            return;
        }

        const totalTip = billAmount * tipPercentage;
        const totalBill = billAmount + totalTip;
        const perPerson = totalBill / peopleCount;

        document.getElementById("totalPerPerson").textContent = perPerson.toFixed(2);
    });

    // Theme Toggle
    themeToggle.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
});
