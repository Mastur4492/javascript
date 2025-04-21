function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);

    const rate = parseFloat(document.getElementById('rate').value);

    const time = parseFloat(document.getElementById('time').value);

    let interest;
    const resultElement = document.getElementById('result');

    resultElement.classList.remove('show');

    // Check if any of the inputs are not valid numbers or if they are less than or equal to zero
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {

        interest = 'Invalid input. Please enter positive numbers.';
    } else {

        interest = (principal * rate * time) / 100;
    }


    resultElement.innerText = `Interest: ${interest.toFixed(2)}`;


    setTimeout(() => {
        resultElement.classList.add('show');
    }, 10);
}