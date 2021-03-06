import React from "react";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from "styled-components";

const DateDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const MainTitle = styled.h1`
    font-size: 3rem;
    margin-right: 10px;
`

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
      <DateDiv>
        <MainTitle>Show me the universe on:  </MainTitle>
        <DayPickerInput onDayChange={day => setDate(formatDate(day))} />
      </DateDiv>
    );
  }