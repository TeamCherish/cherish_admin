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

  const START_YEAR = 2021;
  const START_MONTH = 7;
  const today = new Date();

  // useCallback 이용
  const getDateList = () => {
    const dateList: Array<{ [x: number]: { [x: number]: number[] }[] }> = [];
    for (let year = START_YEAR; year <= today.getFullYear(); year) {
      let month: number;
      if (year === START_YEAR) month = START_MONTH;
      else month = 1;
      const monthList: Array<{ [x: number]: number[] }> = [];
      for (; month <= 12; month++) {
        const dayList: Array<number> = [];
        const lastDay = new Date(year, month, 0).getDate();
        for (let day = 1; day <= lastDay; day++) {
          dayList.push(day);
        }
        monthList.push({ [month]: dayList });
      }
      dateList.push({ [year]: monthList });
    }
    return dateList;
  };

  const dateList = getDateList();

  return (
    <StDatePicker>
      <div>
        {Object.keys(dateList).map((year) => {
          const isSelected = Number(year) === selectedYear;
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
        {Object.keys(dateList[selectedYear]).map((month) => {
          const isSelected = Number(month) === selectedMonth;
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
