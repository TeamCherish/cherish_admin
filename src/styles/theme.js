const calcRem = (size) => `${size / 10}rem`;
const fontSizes = {
  engBold: calcRem(28),
  engRegular: calcRem(18),
  korBold: calcRem(20),
  korRegular: calcRem(14),
  korRegularBold: calcRem(14),
};

const fonts = {
  engBold: `
    font-family: Roboto-Bold;
    letter-spacing: -0.02em;
    line-height: 1;
    font-size: ${fontSizes.headLine};
  `,
  engRegular: `
    font-family: Roboto;
    letter-spacing: -0.02em;
    line-height: 1.2em;
    font-size: ${fontSizes.headLine};
  `,
  korBold: `
    font-family: NotoSansKR-Bold;
    line-height: 1;
    font-size: ${fontSizes.headLine};
  `,
  korRegular: `
    font-family: NotoSansKR;
    line-height: 1.2em;
    font-size: ${fontSizes.headLine};
  `,
  korRegularBold: `
    font-family: NotoSansKR-Bold;
    letter-spacing: -0.25em;
    line-height: 1.2em;
    font-size: ${fontSizes.headLine};
  `,
};

const colors = {
  bgColor: "#EBEBEB",
  textBlack: "#484848",
  textGray: "#BBBBBB",
  textRed: "#ED5974",
  bgWhite: "#F9F9F9",
  pointWhite: "#FFFFFF",
  graphPink: "#F1B0BC",
  graphGreen: "#97CDBD",
  graphGray: "#555555",
  graphLineGray: "#E3E3E3",
  mainColor: "#31D692",
};

const deviceSizes = {
  tablet: "768px",
  mobile: "360px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  fontSizes,
  colors,
  deviceSizes,
  device,
};

export default theme;
