import styled from "styled-components";
import { theme } from "styled-tools";

interface DatePrickerProps {
  month: number;
  year: number;
  onClickDate(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export default function DatePicker(props: DatePrickerProps) {
  const { month, year, onClickDate } = props;

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
        {yearList.map((tempYear) =>
          tempYear === year ? (
            <StSelectedDate>{tempYear}</StSelectedDate>
          ) : (
            <StUnselectedDate onClick={(e) => onClickDate(e)}>
              {tempYear}
            </StUnselectedDate>
          )
        )}
      </div>
      <div>
        {monthList.map((tempMonth) =>
          tempMonth === month ? (
            <StSelectedDate>{tempMonth}</StSelectedDate>
          ) : (
            <StUnselectedDate onClick={(e) => onClickDate(e)}>
              {tempMonth}
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
