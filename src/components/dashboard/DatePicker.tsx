import { useMemo } from "react";
import { RecoilState, useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { ifProp, theme } from "styled-tools";

import { SelectedDate } from "states";

interface DatePrickerProps {
  selectedDateAtom: RecoilState<SelectedDate>;
}

export default function DatePicker(props: DatePrickerProps) {
  const { selectedDateAtom } = props;
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateAtom);

  const START_YEAR = 2021;
  const START_MONTH = 7;
  const today = new Date();
  const thisMonth = today.getMonth() + 1;
  const thisYear = today.getFullYear();

  const dateList = useMemo(() => {
    const dateList = {};
    for (let year = START_YEAR; year <= thisYear; year++) {
      dateList[year] = new Array<number>();
      let month = year === START_YEAR ? START_MONTH : 1;
      for (; month <= (year === thisYear ? thisMonth : 12); month++) {
        dateList[year].push(month);
      }
    }
    return dateList;
  }, [thisMonth, thisYear]);

  const pickDate = (
    date: string | false,
    isSelected: boolean,
    isYear?: boolean
  ) => {
    if (!date) return;
    if (!isSelected) {
      setSelectedDate((current) => ({
        ...current,
        [isYear ? "year" : "month"]: Number(date),
      }));
      if (isYear)
        setSelectedDate((current) => ({
          ...current,
          month: dateList[date][0],
        }));
    }
  };

  return (
    <StDatePicker>
      <div>
        {Object.keys(dateList).map((year) => {
          const isSelected = Number(year) === selectedDate.year;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) =>
                pickDate(
                  e.target instanceof HTMLButtonElement && e.target.innerText,
                  isSelected,
                  true
                )
              }
              key={year}
            >
              {year}
            </StDate>
          );
        })}
      </div>
      <div>
        {dateList[selectedDate.year].map((month) => {
          const isSelected = Number(month) === selectedDate.month;
          return (
            <StDate
              isSelected={isSelected}
              onClick={(e) =>
                pickDate(
                  e.target instanceof HTMLButtonElement && e.target.innerText,
                  isSelected
                )
              }
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
