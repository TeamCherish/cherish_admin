import { USER_LIST } from "./tempData";

export const getUserList = async () => {
  return USER_LIST;
};

export const getUserInfo = async (id: number) => {
  return USER_LIST.filter(user => user.id === id)[0];
};