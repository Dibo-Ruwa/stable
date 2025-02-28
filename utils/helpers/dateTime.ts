export const getOneHourFromNow = () => {
  const now = new Date();
  
  // If current time is after 6 PM, set to 8 AM next day
  if (now.getHours() >= 18) {
    now.setDate(now.getDate() + 1);
    now.setHours(8, 0, 0, 0);
  } else {
    // Check if adding 3 hours would exceed 6 PM
    const projectedHour = now.getHours() + 3;
    if (projectedHour >= 18) {
      // If it would exceed 6 PM, set to 8 AM next day
      now.setDate(now.getDate() + 1);
      now.setHours(8, 0, 0, 0);
    } else {
      // Otherwise set to 3 hours ahead
      now.setHours(projectedHour);
      now.setMinutes(0);
    }
  }

  return now.toLocaleTimeString('en-US', { 
    hour: 'numeric',
    minute: 'numeric',
    hour12: true 
  }).replace(/\s/, ' ');
};

export const validateDeliveryTime = (selectedDateTime: Date, selectedDate: string): { isValid: boolean; message?: string } => {
  const now = new Date();
  
  // Create a proper date object combining selected date and time
  const selected = new Date(selectedDate);
  selected.setHours(selectedDateTime.getHours());
  selected.setMinutes(selectedDateTime.getMinutes());
  selected.setSeconds(0, 0);

  // If selected date is in the future (not today)
  if (selected.toDateString() !== now.toDateString()) {
    // Only validate 6 PM cutoff for future dates
    if (selected.getHours() >= 18) {
      const nextDay = new Date(selected);
      nextDay.setDate(nextDay.getDate() + 1);
      nextDay.setHours(8, 0, 0, 0);
      return {
        isValid: false,
        message: "Latest delivery time is 6 PM. Please select an earlier time.",
        nextDayDate: nextDay.toISOString().split('T')[0],
        nextDayTime: "08:00 AM"
      };
    }
    return { isValid: true };
  }

  // For today's orders
  const hoursDiff = (selected.getTime() - now.getTime()) / (1000 * 60 * 60);
  
  // Must be at least 2 hours in future for same day orders
  if (selected.toDateString() === now.toDateString() && hoursDiff < 2) { // Changed from 1 to 2
    return {
      isValid: false,
      message: "Please select a time at least 2 hours from now" // Updated message
    };
  }

  return { isValid: true };
};
