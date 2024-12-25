import React, { useState, useEffect } from "react";

interface DateInputProps {
  onDateChange: (date: Date) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ onDateChange }) => {
  const localStorageKey = "selectedDate";

  // Initialize state with the stored date or today's date
  const [selectedDate, setSelectedDate] = useState<string>(() => {
    const storedDate = localStorage.getItem(localStorageKey);
    return storedDate || new Date().toISOString().split("T")[0];
  });

  // Update localStorage and notify parent whenever the date changes
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setSelectedDate(newDate);
    localStorage.setItem(localStorageKey, newDate);
    onDateChange(new Date(newDate)); // Notify parent of the selected date
  };

  useEffect(() => {
    // Notify parent of the initial date on component mount
    onDateChange(new Date(selectedDate));
  }, [selectedDate, onDateChange]);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Schedule Delivery (optional)
      </h3>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded px-4 py-2"
      />
    </div>
  );
};
