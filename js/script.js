    function handleeconomyChange(economy, goIncreace){
        const economyPaid = getInputValue(economy);
        let economyNewPaid = economyPaid;
        if(goIncreace == true){
        economyNewPaid = economyNewPaid + 1;
    }
    if(goIncreace == false && economyPaid > 0){
        economyNewPaid = economyPaid - 1;
    }
        document.getElementById(economy + '-paid').value = economyNewPaid;
        let economyTotal = 0;
    if(economy == 'first'){
        economyTotal = economyNewPaid * 150;
    }
    if(economy == 'economy'){
        economyTotal = economyNewPaid * 100;
    }
        document.getElementById(economy + '-total').innerText = '$' + economyTotal;
        calculateTotal();
    }
    function calculateTotal(){
        const firstPaid = getInputValue('first');
        const economyPaid = getInputValue('economy');

        const totalPrice = firstPaid * 150 + economyPaid * 100;
        document.getElementById('total-price').innerText = '$' + totalPrice;

    // tax
        const tax = totalPrice * 0.1;
        document.getElementById('tax-amount').innerText = '$' + tax;

        const grandTotal = totalPrice + tax;
        document.getElementById('grand-total').innerText = '$' + grandTotal;
    }
    function getInputValue(economy) {
        console.log(economy);
        const economyInput = document.getElementById(economy +'-paid');
        const economyPaid = parseInt(economyInput.value);
        return economyPaid;
    }