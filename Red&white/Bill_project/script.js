function calculate() {
    let amount = parseInt(document.getElementById('amount-input').value);



    let discount = parseInt(document.getElementById('discount-input').value);
    let answerElement = document.getElementById('answer');
    let total = 0;

    answerElement.classList.remove('show');

    if (isNaN(amount) || isNaN(discount) || amount < 0 || discount < 0) {
        answerElement.innerHTML = `Invalid data!`;
    } else {
        total = amount - (amount * discount / 100);
        answerElement.innerHTML = `Total Bill: ${total}`;
    }

    void answerElement.offsetWidth;

    // Add the show class to trigger the animation
    answerElement.classList.add('show');
}  