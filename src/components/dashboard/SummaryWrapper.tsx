import Summary from "./Summary";
import styled from "styled-components";
import { joinUserIcon, totalUserIcon, totalPlantingIcon } from "../../assets";
import { useSetRecoilState } from "recoil";
import { userTotalNum } from "states";
import { client } from "utils/api";
import { useEffect, useState } from "react";

export default function SummaryWrapper() {
  const [dashboardData, setDashboardData] = useState({
    todayUserTotal: 0,
    yesterdayUserTotal: 0,
    todayContactTotal: 0,
  });

  const setUserTotalCount = useSetRecoilState(userTotalNum);

  const convertDateToString = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = convertDateToString(new Date());
  const yesterdayDate = convertDateToString(
    new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  );

  useEffect(() => {
    (async function () {
      const todayRes = await client(`/user/count?date=${todayDate}`);
      const todayUserTotal = todayRes.data.data.totalCount;
      setUserTotalCount(todayUserTotal);
      const yesterdayRes = await client.get(
        `/user/count?date=${yesterdayDate}`
      );
      const yesterdayUserTotal = yesterdayRes.data.data.totalCount;

      const { data } = await client("/contact");

      setDashboardData((current) => ({
        ...current,
        todayUserTotal,
        yesterdayUserTotal,
        todayContactTotal: data.count,
      }));
    })();
  }, [todayDate, yesterdayDate, setUserTotalCount]);

  return (
    <StSummaryWrapper>
      <Summary
        summaryIcon={joinUserIcon}
        summaryText="체리쉬 공식 탄생일"
        dataNumber="2021-07-04"
        dataVariation={0}
      />
      <Summary
        summaryIcon={totalUserIcon}
        summaryText="서비스 누적 이용자 수"
        dataNumber={dashboardData.todayUserTotal}
        dataVariation={
          dashboardData.yesterdayUserTotal - dashboardData.todayUserTotal
        }
      />
      <Summary
        summaryIcon={totalPlantingIcon}
        summaryText="서비스 내 누적 물주기 수"
        dataNumber={dashboardData.todayContactTotal}
        dataVariation={0}
      />
    </StSummaryWrapper>
  );
}

const StSummaryWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 4.8rem;
`;
