function appendToDisplay(value) {
    const inputBox = document.getElementById('inputBox');
    // Prevent leading zeros and handle special cases
    if (inputBox.value === '0' && value !== '.' && value !== '00') {
        inputBox.value = value;
    } else {
        inputBox.value += value;
    }
    // Ensure focus to update display correctly
    inputBox.focus();
}

function clearDisplay() {
    document.getElementById('inputBox').value = '0';
}

function deleteLastCharacter() {
    const inputBox = document.getElementById('inputBox');
    if (inputBox.value.length === 1 || inputBox.value === 'Error') {
        inputBox.value = '0';
    } else {
        inputBox.value = inputBox.value.slice(0, -1);
    }
    // Ensure focus to update display correctly
    inputBox.focus();
}

function calculateResult() {
    const inputBox = document.getElementById('inputBox');
    try {
        // Evaluate the expression
        inputBox.value = eval(inputBox.value);
    } catch {
        inputBox.value = 'Error';
    }
    // Ensure focus to update display correctly
    inputBox.focus();
}


