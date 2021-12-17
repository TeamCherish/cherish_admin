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
  });

  return (
    <StWrapper>
      <span>등록한 식물</span>
      <StTable>
        <header>
          <StName>식물명</StName>
          <StPeriod>물주기</StPeriod>
          <StRecent>최근 물주기 날짜</StRecent>
          <StAccumulated>누적 물주기</StAccumulated>
        </header>
        {plantList.map((plant) => (
          <div key={plant.id}>
            <StName>{plant.name}</StName>
            <StPeriod>{plant.period}</StPeriod>
            <StRecent>{plant.recentDate}</StRecent>
            <StAccumulated>{plant.accumulated}</StAccumulated>
          </div>
        ))}
      </StTable>
    </StWrapper>
  );
}

const StWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.3rem 4rem;
  background-color: ${theme("colors.pointWhite")};
  width: 85.7rem;
  ${theme("fonts.korTitle")};

  & > span {
    margin-bottom: 4.3rem;
    font-weight: bold;
  }
`;

const StTable = styled.div`
  display: grid;

  width: 100%;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3.3rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 3.3rem;
    }
  }

  span {
    text-align: center;
    font-size: 2.8rem;
  }
`;

const StName = styled.span`
  width: 9rem;
`;

const StPeriod = styled.span`
  width: 9rem;
`;

const StRecent = styled.span`
  width: 22rem;
`;

const StAccumulated = styled.span`
  width: 15rem;
`;
