// Runs after the full page loads
window.onload = function () {
    setTimeout(function () {
        document.getElementById("content").innerHTML = `
            <h1>Page Loaded!</h1>
            <p>This content appeared after 3 seconds.</p>
        `;
        alert("Content is now visible!");
    }, 1500); // 3000ms = 3 seconds
};
