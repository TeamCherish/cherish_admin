import { useEffect, useState } from "react";
import styled from "styled-components";
import { theme } from "styled-tools";

import { getPlantList } from "utils";
import { Plant } from "utils/tempData";

export default function PlantList() {
  const [plantList, setPlantList] = useState<Plant[]>([]);

  useEffect(() => {
    (async function () {
      const plantData: Plant[] = await getPlantList();
      setPlantList(plantData);
    })();
  }, []);

  return (
    <StWrapper>
      <span>등록한 식물</span>
      <StTable>
        <header>
          <StName>식물명</StName>
          <StName>물주기</StName>
          <StRecent>최근 물주기 날짜</StRecent>
          <StAccumulated>누적 물주기</StAccumulated>
        </header>
        {plantList.map((plant) => (
          <ul key={plant.id}>
            <StName>{plant.name}</StName>
            <StName>{plant.period}일</StName>
            <StRecent>{plant.recentDate}</StRecent>
            <StAccumulated>{plant.accumulated}회</StAccumulated>
          </ul>
        ))}
      </StTable>
    </StWrapper>
  );
}

const StWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 4rem;
  background-color: ${theme("colors.pointWhite")};
  ${theme("fonts.korTitle")};

  & > span {
    margin-bottom: 4.3rem;
    font-weight: bold;
  }
`;

const StTable = styled.div`
  ${theme("fonts.korRegular")}
  width: 80rem;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    width: 100%;
  }

  ul {
    display: flex;
    width: 100%;

    & + ul {
      margin-top: 3rem;
    }
  }

  span {
    text-align: center;
    font-size: 2.8rem;
  }
`;

const StName = styled.span`
  flex-grow: 1;
  min-width: 15rem;
  max-width: 15rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StRecent = styled.span`
  flex-grow: 3;
`;

const StAccumulated = styled.span`
  flex-grow: 2;
  min-width: 20rem;
`;
