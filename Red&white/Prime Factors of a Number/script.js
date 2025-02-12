function findPrimeFactors() {
    let userElement = document.getElementById("user");
    let final = document.getElementById("final");

    let n = parseInt(userElement.value); 
    if (isNaN(n) || n <= 0) {
        final.innerText = "Please enter a valid positive number!";
        return;
    }

    let factors = [];

    while (n % 2 === 0) {
        factors.push(2);
        n = n / 2;
    }

    for (let i = 3; i * i <= n; i += 2) {
        while (n % i === 0) {
            factors.push(i);
            n = n / i;
        }
    }

    if (n > 2) {
        factors.push(n);
    }

    final.innerText = "Prime Factors: " + factors.join(", ");
}