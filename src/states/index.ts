import { logo } from "assets";
import { atom, RecoilState } from "recoil";

export interface UserDatum {
  id: number;
  nickname: string;
  email: string;
  thumbNail: string;
}

export const userDatum: RecoilState<UserDatum> = atom({
  key: "userInfo",
  default: {
    id: -1,
    nickname: "소중이",
    email: "cherish@test.test",
    thumbNail: logo,
  },
});

export type SelectedDate = { year: number; month: number };

const today = new Date();
const defaultDate = { year: today.getFullYear(), month: today.getMonth() + 1 };

export const joinSelectedDateAtom = atom<SelectedDate>({
  key: "joinSelectedDateState",
  default: defaultDate,
});

export const waterSelectedDateAtom = atom<SelectedDate>({
  key: "waterSelectedDateState",
  default: defaultDate,
});

export const userTotalNum: RecoilState<number> = atom({
  key: "userInfo",
  default: 0,
});
