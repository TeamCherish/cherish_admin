import { atom } from "recoil";
// import { selector } from "recoil";

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

// export const isLikeAtom = selector({
//   key: "isLikeClicked",
//   get: ({ get }) => {
//     const { isLike, likeNumber } = get(articleAtom);
//     return { status: isLike, number: likeNumber };
//   },
// });
