export interface User {
  id: number;
  image?: string;
  nickname: string;
  email: string;
  phone: string;
  count: string;
}

export interface Plant {
  id: number;
  name: string;
  period: number;
  recentDate: string;
  accumulated: number;
}

export const PLANT_LIST: Plant[] = [
  { id: 1, name: "령이", period: 3, recentDate: "2021-08-31", accumulated: 8 },
  {
    id: 2,
    name: "쭈삼쏘쭈삼쏘쭈삼쏘",
    period: 15,
    recentDate: "2021-12-31",
    accumulated: 2,
  },
  { id: 3, name: "쭈쌈", period: 10, recentDate: "2021-11-30", accumulated: 5 },
];

interface DateJoin {
  date: string;
  count: number;
}

export const USER_LIST: User[] = [
  {
    id: 1,
    nickname: "01짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 2,
    nickname: "02짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 3,
    nickname: "03짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 4,
    nickname: "04짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 5,
    nickname: "05짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 6,
    nickname: "06짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 7,
    nickname: "07짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 8,
    nickname: "08짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 9,
    nickname: "09짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 10,
    nickname: "10짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 11,
    nickname: "11짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 12,
    nickname: "12짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 13,
    nickname: "13짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 14,
    nickname: "14짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 15,
    nickname: "15짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 16,
    nickname: "16짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 17,
    nickname: "17짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 18,
    nickname: "18짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 19,
    nickname: "19짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
  {
    id: 20,
    nickname: "20짱구엄마",
    email: "temp@temp.com",
    phone: "0000",
    count: "00",
  },
];

export const DATE_JOIN_LIST: DateJoin[] = [
  { date: "21-07-01", count: 1 },
  { date: "21-07-02", count: 1 },
  { date: "21-07-03", count: 1 },
  { date: "21-07-04", count: 12 },
  { date: "21-07-05", count: 4 },
  { date: "21-07-06", count: 38 },
  { date: "21-07-07", count: 12 },
  { date: "21-07-08", count: 43 },
  { date: "21-07-09", count: 28 },
  { date: "21-07-10", count: 4 },
  { date: "21-07-11", count: 3 },
  { date: "21-07-12", count: 38 },
  { date: "21-07-13", count: 18 },
  { date: "21-07-14", count: 28 },
  { date: "21-07-15", count: 0 },
  { date: "21-07-16", count: 37 },
  { date: "21-07-17", count: 5 },
  { date: "21-07-18", count: 9 },
  { date: "21-07-19", count: 29 },
  { date: "21-07-20", count: 2 },
  { date: "21-07-21", count: 1 },
  { date: "21-07-22", count: 11 },
  { date: "21-07-23", count: 13 },
  { date: "21-07-24", count: 6 },
  { date: "21-07-25", count: 7 },
  { date: "21-07-26", count: 30 },
  { date: "21-07-27", count: 11 },
  { date: "21-07-28", count: 12 },
  { date: "21-07-29", count: 1 },
  { date: "21-07-20", count: 15 },
  { date: "21-07-31", count: 8 },
];
