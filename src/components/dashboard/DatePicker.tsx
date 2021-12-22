import styled from "styled-components";
import { theme } from "styled-tools";

interface DatePrickerProps {
  selectedMonth: number;
  selectedYear: number;
  onClickDate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export default function DatePicker(props: DatePrickerProps) {
  const { selectedMonth, selectedYear, onClickDate } = props;

  const today = new Date();
  const yearList: number[] = [];
  for (let year = 2021; year <= today.getFullYear(); year++) {
    yearList.push(year);
  }

  const monthList: number[] = [];
  for (let month = 1; month < 13; month++) {
    monthList.push(month);
  }

  return (
    <StDatePicker>
      <div>
        {yearList.map((year) =>
          year === selectedYear ? (
            <StSelectedDate>{year}</StSelectedDate>
          ) : (
            <StUnselectedDate onClick={(e) => onClickDate(e)}>
              {year}
            </StUnselectedDate>
          )
        )}
      </div>
      <div>
        {monthList.map((month) =>
          month === selectedMonth ? (
            <StSelectedDate>{month}</StSelectedDate>
          ) : (
            <StUnselectedDate onClick={(e) => onClickDate(e)}>
              {month}
            </StUnselectedDate>
          )
        )}
      </div>
    </StDatePicker>
  );
}

const StDatePicker = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StUnselectedDate = styled.button`
  font-family: ${theme("font.korRegular")};
  color: ${theme("colors.textGray")};
`;

const StSelectedDate = styled.button`
  font-family: ${theme("font.korRegularBold")};
  font-weight: 700;
  cursor: default;
`;
