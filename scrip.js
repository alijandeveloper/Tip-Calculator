function handleCustomTip() {
    const tipPercentage = document.getElementById("tipPercentage").value;
    const customTipInput = document.getElementById("customTip");
    if (tipPercentage === "custom") {
        customTipInput.style.display = "block";
    } else {
        customTipInput.style.display = "none";
    }
}

