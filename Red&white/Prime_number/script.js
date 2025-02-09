function findPrimeNumbers() {

    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const resultDiv = document.getElementById('result');
    if (isNaN(start) || isNaN(end)) {
        resultDiv.innerHTML = '<p>Please enter valid numbers</p>';
        return;
    }

    if (start > end) {
        resultDiv.innerHTML = '<p>Start number should be less than end number</p>';
        return;
    }
    let primeNumbers = [];
    for (let num = start; num <= end; num++) {
        let isPrime = true;
        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
        }
    }
    if (primeNumbers.length === 0) {
        resultDiv.innerHTML = '<p>No prime numbers found in this range</p>';
    } else {
        resultDiv.innerHTML = `
            <p>Prime numbers between ${start} and ${end}:</p>
            <p>${primeNumbers.join(', ')}</p>`;
    }
}
