// Get the clock element
const clockDisplay = document.getElementById('clock-display');

// Update the clock display every second
setInterval(() => {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  // Format the time
  let timeString = `${hours}:${minutes}:${seconds}`;

  // Add AM/PM indicator (optional)
  if (hours >= 12) {
    timeString += hours === 12 ? ' PM' : ' AM';
  }

  // Update the display
  clockDisplay.textContent = timeString;
}, 1000); // Update every second
