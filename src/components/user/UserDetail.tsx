import { useEffect, useState } from "react";
import styled from "styled-components";

import { PlantList, UserInfo } from "..";
import { theme } from "styled-tools";
import { useRecoilValue } from "recoil";
import { userDatum, UserDatum } from "states";
import { client } from "utils/api";

export interface Plant {
  name: string;
  waterInterval: number;
  lastWaterDate: string;
  waterCount: number;
}

export default function UserDetail() {
  const [plantList, setPlantList] = useState<Plant[]>([]);
  const user: UserDatum = useRecoilValue<UserDatum>(userDatum);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { plants },
        } = await client.get(`/user/user/${user.id}`);
        setPlantList(plants);
      } catch (err) {
        console.log("err", err);
      }
    })();
  }, [user]);

  return (
    <StWrapper>
      <UserInfo userInfo={user} />
      <PlantList plantList={plantList} />
    </StWrapper>
  );
}

const StWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
  padding: 10rem 4.7rem 8rem 4.7rem;
  background-color: ${theme("colors.bgWhite")};
`;
