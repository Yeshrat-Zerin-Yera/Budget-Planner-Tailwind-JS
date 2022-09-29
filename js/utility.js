// Function to get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputString = inputField.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

// Function to get element value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    const elementString = elementField.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
}

// Function to set element value
function setElementValue(elementId, newValue) {
    document.getElementById(elementId).innerText = newValue;
}