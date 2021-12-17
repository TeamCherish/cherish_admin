import { USER_LIST, DATE_JOIN_LIST, PLANT_LIST } from "./tempData";

export const getUserList = async () => {
  return USER_LIST;
};

export const getDateJoinList = async () => {
  return DATE_JOIN_LIST;
};

export const getUserInfo = async (id: number) => {
  return USER_LIST.filter((user) => user.id === id)[0];
};

export const getPlantList = async () => {
  return PLANT_LIST;
};
