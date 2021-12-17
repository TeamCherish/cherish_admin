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
          <StName>물주기</StName>
          <StRecent>최근 물주기 날짜</StRecent>
          <StAccumulated>누적 물주기</StAccumulated>
        </header>
        {plantList.map((plant) => (
          <div key={plant.id}>
            <StName>{plant.name}</StName>
            <StName>{plant.period}</StName>
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

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
  }

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 3rem;
    }
  }

  span {
    text-align: center;
    font-size: 2.8rem;
  }
`;

const StName = styled.span`
  width: 17rem;
`;

const StRecent = styled.span`
  width: 28rem;
`;

const StAccumulated = styled.span`
  width: 20rem;
`;
