import './DateRangePicker.css';
import { IDateRangePicker } from "../../models/models";
import React, { useState } from 'react';

const DateRangePicker: React.FC<IDateRangePicker> = ({ onDateRangeChange }) => {
  
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = () => {
    onDateRangeChange(startDate, endDate);
  };

  return (
    <div>
      <input
        type="date"
        value={startDate.toISOString().split('T')[0]}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      />
      <input
        type="date"
        value={endDate.toISOString().split('T')[0]}
        onChange={(e) => setEndDate(new Date(e.target.value))}
      />
      <button onClick={handleDateChange}>Apply</button>
    </div>
  );
};

export default DateRangePicker;