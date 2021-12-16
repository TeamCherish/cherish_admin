import { useState, useEffect } from "react";
import { getUserList } from "utils";

import { User } from "utils/tempData";
import plant1 from "../assets/images/plant1.png";
import plant2 from "../assets/images/plant2.png";
import plant3 from "../assets/images/plant3.png";
import plant4 from "../assets/images/plant4.png";
import plant5 from "../assets/images/plant5.png";

export default function UserList() {
  const [userList, setUserList] = useState<User[]>([]);
  const plantImages = [plant1, plant2, plant3, plant4, plant5];

  const getRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 4);
    return randomNum;
  };

  useEffect(() => {
    (async function () {
      const data: User[] = await getUserList();
      setUserList(data);
    })();
  }, []);

  console.log(userList);

  return (
    <ul>
      {userList.map((userInfo) => (
        <li>
          <img src={plantImages[getRandomNum()]} />
          <span>{userInfo.name}</span>
          <span>{userInfo.email}</span>
          <span>{userInfo.phoneNum}</span>
          <span>{userInfo.contactCount}</span>
        </li>
      ))}
    </ul>
  );
}
