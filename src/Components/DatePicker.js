import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

export default function DatePicker({setDate}) {
    return (
      <div>
        <p>Please type a day:</p>
        <DayPickerInput onDayChange={day => setDate(formatDate(day))} />
      </div>
    );
  }