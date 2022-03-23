import { RecoilState, useRecoilState } from "recoil";
import { SelectedDate } from "states";
import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

interface DatePrickerProps {
  selectedDateAtom: RecoilState<SelectedDate>;
}

export default function DatePicker(props: DatePrickerProps) {
  const { selectedDateAtom } = props;
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const START_YEAR = 2021;
  const START_MONTH = 7;
  const today = new Date();

  const pickDate = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isSelected: boolean
  ) => {
    if (!isSelected) {
      setSelectedDate((current) => {
        if (e.target instanceof HTMLButtonElement)
          return {
            ...current,
            [e.target.innerText.length > 2 ? "year" : "month"]: Number(
              e.target.innerText
            ),
          };
        else return current;
      });
    }
  };

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
          const isSelected = Number(year) === selectedDate.year;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) => pickDate(e, isSelected)}
              key={year}
            >
              {year}
            </StDate>
          );
        })}
      </div>
      <div>
        {Object.keys(dateList[selectedDate.year]).map((month) => {
          const isSelected = Number(month) === selectedDate.month;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) => pickDate(e, isSelected)}
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
