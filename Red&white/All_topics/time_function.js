// Getting the Current Date and Time //

// let now = new Date();
// console.log(now.getFullYear());   // Get the year (e.g., 2025)
// console.log(now.getMonth());      // Get the month (0-11) (January is 0)
// console.log(now.getDate());       // Get the day of the month (1-31)
// console.log(now.getDay());        // Get the day of the week (0-6) (Sunday is 0)
// console.log(now.getHours());      // Get the hours (0-23)
// console.log(now.getMinutes());    // Get the minutes (0-59)
// console.log(now.getSeconds());    // Get the seconds (0-59)
// console.log(now.getMilliseconds());// Get the milliseconds (0-999)
// console.log(now.getTime());       // Get the timestamp (milliseconds since Jan 1, 1970)

// Convert Date to a Readable String //

// let now = new Date();
// console.log(now.toDateString());  // Example: "Fri Mar 21 2025"
// console.log(now.toTimeString());  // Example: "14:23:45 GMT+0530 (India Standard Time)"
// console.log(now.toLocaleString()); // Example: "3/21/2025, 2:23:45 PM"
// console.log(now.toLocaleDateString()); // Example: "3/21/2025"
// console.log(now.toLocaleTimeString()); // Example: "2:23:45 PM"

setTimeout(() => {
    document.getElementById('new').style.display = 'block';
}, 3000);