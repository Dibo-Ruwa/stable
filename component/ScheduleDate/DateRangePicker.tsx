import React, { useState, useEffect } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main styles
import "react-date-range/dist/theme/default.css"; // theme styles

interface DateRangePickerProps {
  onDateChange: (startDate: Date, endDate: Date) => void;
}

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
  onDateChange,
}) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleRangeChange = (ranges: any) => {
    const { startDate, endDate } = ranges.selection;
    setState([ranges.selection]);
    onDateChange(startDate, endDate); // Notify parent of changes
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">
        Schedule Delivery (optional)
      </h3>
      <DateRange
        editableDateInputs
        onChange={handleRangeChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
        showDateDisplay={false}
        rangeColors={["#4CAF50"]} // Green highlight color
      />
    </div>
  );
};
