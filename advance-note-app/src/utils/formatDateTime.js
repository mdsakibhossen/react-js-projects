export const formatDateTime = (milliseconds) => {
    const date = new Date(milliseconds);

    const dateOptions = {
        weekday: 'long',   // Full name of the day (e.g., "Tuesday")
        year: 'numeric',   // Four-digit year (e.g., "2024")
        month: 'long',     // Full name of the month (e.g., "July")
        day: '2-digit'     // Two-digit day of the month (e.g., "02")
    };

    const timeOptions = {
        hour: '2-digit',   // Two-digit hour (e.g., "08")
        minute: '2-digit', // Two-digit minute (e.g., "30")
        second: '2-digit', // Two-digit second (e.g., "15")
        hour12: true       // Use a 12-hour clock (e.g., "08:30:15 PM")
    };

    // Format the date and time separately
    const formattedDate = date.toLocaleDateString('en-GB', dateOptions);
    const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);

    // Combine date and time with "at" in between
    return `${formattedDate} | ${formattedTime.toUpperCase()}`;
}