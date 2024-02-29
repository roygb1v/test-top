import styled from 'styled-components';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function MainCalendar({ handleChange }) {
  return (<Wrapper>
    <Calendar 
      calendarType="gregory"
      minDate={new Date()}
      onChange={(date) => handleChange(date)}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxHeight: 282}}>
        <Button>12 pm</Button>
        <Button>1 pm</Button>
        <Button>2 pm</Button>
        <Button>3 pm</Button>

      </div>
  </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 32px;
  border-top: 1px solid lightgray;
  padding: 48px 0;
  max-width: 654px;
`


const Button = styled.button`
  background: ${props => props.$primary ? "#D03660" : "#FFFFFF"};
  border: ${props => props.$primary ? "none" : "1px solid black"};
  padding: 13px 23px;
  min-width: 208px;
  max-width: ${props => props.$primary ? "322px" : "208px"};
  max-height: 48px;
  color: ${props => props.$primary ? "#FFFFFF" : "#3D3D3D"};
  border-radius: 8px;
  font-weight: 400;
  font-size: ${props => props.$primary ? "16px" : "14px"};

  &:hover {
    background: ${props => props.$primary ? "" : "lightgray"};
    cursor: pointer;
  }
`