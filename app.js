var totalamount = document.getElementById('product_total_amt');
var shipping_charge_amt = document.getElementById('shipping_charge_amt');
var including_amount = document.getElementById('including_amount');
var codeApply = document.getElementById('codeApply');

const decreasement = () => {
    var textval = document.getElementById('textbox');
    prize = document.getElementById('prize');
    if (textval.value <= 0 && prize.innerHTML <= 0) {
        textval.value = 0;
        prize.innerHTML = 0;
        including_amount.innerHTML = 0;
        alert('nagative quantity not allowed');
    } else {
        textval.value = parseInt(textval.value) - 1;
        prize.innerHTML = parseInt(prize.innerHTML) - 15;
        totalamount.innerHTML = parseInt(totalamount.innerHTML) - 15;
        including_amount.innerHTML = parseInt(totalamount.innerHTML) - parseInt(shipping_charge_amt.innerHTML);
    }
}

const increasement = () => {
    var textval = document.getElementById('textbox');
    prize = document.getElementById('prize');
    if (textval.value >= 5 && prize.innerHTML >= 75) {
        textval.value = 0;
        prize.innerHTML = 0;
        totalamount.innerHTML = 0;
        including_amount.innerHTML = 0;
        alert('max 5 items allowed');
    } else {
        textval.value = parseInt(textval.value) + 1;
        prize.innerHTML = parseInt(prize.innerHTML) + 15;
        totalamount.innerHTML = parseInt(totalamount.innerHTML) + 15;
        including_amount.innerHTML = parseInt(totalamount.innerHTML) + parseInt(shipping_charge_amt.innerHTML);
    }
}

const decreasement_1 = () => {
    var textval = document.getElementById('textbox_1');
    prize_1 = document.getElementById('prize_1');
    if (textval.value <= 0 && prize_1.innerHTML <= 0) {
        textval.value = 0;
        prize_1.innerHTML = 0;
        including_amount.innerHTML = 0;
        alert('nagative quantity not allowed');
    } else {
        textval.value = textval.value - 1;
        prize_1.innerHTML = parseInt(prize_1.innerHTML) - 15;
        totalamount.innerHTML = parseInt(totalamount.innerHTML) - 15;
        including_amount.innerHTML = parseInt(totalamount.innerHTML) - parseInt(shipping_charge_amt.innerHTML);
    }
}

const increasement_1 = () => {
    var textval = document.getElementById('textbox_1');
    prize_1 = document.getElementById('prize_1');
    if (textval.value >= 5 && prize_1.innerHTML >= 5) {
        textval.value = 0;
        prize_1.innerHTML = 0;
        totalamount.innerHTML = 0;
        including_amount.innerHTML = 0;
        alert('max 5 items allowed');
    } else {
        textval.value = parseInt(textval.value) + 1;
        prize_1.innerHTML = parseInt(prize_1.innerHTML) + 15;
        totalamount.innerHTML = parseInt(totalamount.innerHTML) + 15;
        including_amount.innerHTML = parseInt(totalamount.innerHTML) + parseInt(shipping_charge_amt.innerHTML);
    }
}

const apply_Code = () => {
    let new_amt = parseInt(including_amount.innerHTML);
    valid_code = document.getElementById('valid_code');
    if (codeApply.value === "him@NSHU") {
        let new_total_amt = new_amt - 15;
        including_amount.innerHTML = new_total_amt;
        valid_code.innerHTML = "hurry! code is valid";
    }else{
        valid_code.innerHTML = "try again! valid code is him@NSHU";
    }
}