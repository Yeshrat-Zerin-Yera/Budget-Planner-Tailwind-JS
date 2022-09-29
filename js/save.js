document.getElementById('save-btn').addEventListener('click', function () {
    // Reset Style
    document.getElementById('save-alert').style.display = 'none';
    document.getElementById('save-valid').style.display = 'none';
    document.getElementById('percent-alert').style.display = 'none';
    document.getElementById('balance-alert').style.display = 'none';


    // Reset Element Value
    setElementValue('saving-amount', '');
    setElementValue('remaining-balance', '');

    // Get Value
    const income = getInputValue('income');
    const savingPercent = getInputValue('save');
    const balance = getElementValue('balance');

    // Calculate Value
    const savingAmount = (income * savingPercent) / 100;
    const remainingBalance = balance - savingAmount;

    // Check Value
    let check = 2;
    if (savingPercent < 0) {
        document.getElementById('save-alert').style.display = 'block';
        check = 1;
    }
    else if (isNaN(savingPercent)) {
        document.getElementById('save-valid').style.display = 'block';
        check = 1
    }
    else if (savingPercent > 100) {
        document.getElementById('percent-alert').style.display = 'block';
        check = 1;
    }
    else if (balance < savingAmount) {
        document.getElementById('balance-alert').style.display = 'block';
        check = 1;
    }
    if (check === 1) {
        console.log('');
        return;
    }

    // Set Value
    setElementValue('saving-amount', savingAmount);
    setElementValue('remaining-balance', remainingBalance);
})