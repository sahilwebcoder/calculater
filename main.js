function calculate(event) {
    event.preventDefault();
    let bill = document.forms['tip_calculator']['bill'].value;
    let tip = document.forms['tip_calculator']['tip'].value;
    let billNum = Number(bill);
    let tipNum = Number(tip);
    let total = (tipNum / 100) * billNum;
    total += billNum;
    document.getElementById('total').innerHTML = total;
}