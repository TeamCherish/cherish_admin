import { atom } from "recoil";
// import { selector } from "recoil";

export const articleAtom = atom({
  key: "articleData",
  default: [],
});

export const isLikeAtom = atom({
  key: "isLike",
  default: true,
});

// export const isLikeAtom = selector({
//   key: "isLikeClicked",
//   get: ({ get }) => {
//     const { isLike, likeNumber } = get(articleAtom);
//     return { status: isLike, number: likeNumber };
//   },
// });
