document.getElementById('calculate-btn').addEventListener('click', function () {
    // Reset Style
    document.getElementById('income-alert').style.display = 'none';
    document.getElementById('food-alert').style.display = 'none';
    document.getElementById('rent-alert').style.display = 'none';
    document.getElementById('clothes-alert').style.display = 'none';
    document.getElementById('income-valid').style.display = 'none';
    document.getElementById('food-valid').style.display = 'none';
    document.getElementById('rent-valid').style.display = 'none';
    document.getElementById('clothes-valid').style.display = 'none';
    document.getElementById('expense-alert').style.display = 'none';

    // Reset Element Value
    setElementValue('expense', '');
    setElementValue('balance', '');

    // Get Value
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const clothes = getInputValue('clothes');

    // Declare array
    const values = [income, food, rent, clothes];
    const identites = ['income-alert', 'food-alert', 'rent-alert', 'clothes-alert'];
    const validations = ['income-valid', 'food-valid', 'rent-valid', 'clothes-valid'];

    //Start Loop
    let right = 2;
    for (let j = 0; j < values.length; j++) {
        let value = values[j];
        for (let i = 0; i < identites.length; i++) {
            let identity = identites[j];
            if (value < 0) {
                document.getElementById(identity).style.display = 'block';
                right = 1;
            }
        }
        for (let k = 0; k < validations.length; k++) {
            let validation = validations[j];
            if (isNaN(value)) {
                document.getElementById(validation).style.display = 'block';
                right = 1;
            }
        }
    }

    // Calculate
    const total = food + rent + clothes;
    const balance = income - total;
    if (total > income) {
        document.getElementById('expense-alert').style.display = 'block';
        right = 1;
    }
    if (right === 1) {
        console.log('');
        return;
    }

    // Set Value
    setElementValue('expense', total);
    setElementValue('balance', balance);
})