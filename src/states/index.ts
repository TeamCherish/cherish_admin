import { logo } from "assets";
import { atom, RecoilState } from "recoil";
// import { selector } from "recoil";

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
