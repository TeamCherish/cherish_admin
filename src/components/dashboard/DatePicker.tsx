import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

interface DatePrickerProps {
  selectedMonth: number;
  selectedYear: number;
  onClickDate(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isSelected: boolean
  ): void;
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
        {yearList.map((year) => {
          const isSelected = year === selectedYear;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) => onClickDate(e, isSelected)}
              key={year}
            >
              {year}
            </StDate>
          );
        })}
      </div>
      <div>
        {monthList.map((month) => {
          const isSelected = month === selectedMonth;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) => onClickDate(e, isSelected)}
              key={month}
            >
              {month}
            </StDate>
          );
        })}
      </div>
    </StDatePicker>
  );
}

const StDatePicker = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const StDate = styled.button<{ isSelected: boolean }>`
  ${ifProp(
    { isSelected: true },
    css`
      ${theme("font.korRegularBold")};
      font-weight: 700;
      cursor: default;
    `,
    css`
      ${theme("font.korRegular")};
      color: ${theme("colors.textGray")};
      cursor: pointer;
    `
  )}
`;
