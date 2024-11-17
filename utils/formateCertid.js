// formattedDate.js
exports.formattedCert = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0'); // Ensures two-digit day
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
    const year = String(date.getFullYear()).slice(-2); // Get the last two digits of the year
    return `${day}${month}${year}`; // Returns the date in DDMMYY format
  };
  