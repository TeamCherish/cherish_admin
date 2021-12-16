const calcRem = (size) => `${size / 10}rem`;
const fontSizes = {
  korTitle: calcRem(30),
  engBold: calcRem(28),
  engRegular: calcRem(18),
  korBold: calcRem(20),
  korRegular: calcRem(14),
  korRegularBold: calcRem(14),
};

const fonts = {
  engBold: `
    font-family: Roboto;
    font-weight: bold;
    letter-spacing: -0.02em;
    line-height: 1;
    font-size: ${fontSizes.engBold};
  `,
  engRegular: `
    font-family: Roboto;   
    letter-spacing: -0.02em;
    line-height: 1.2em;
    font-size: ${fontSizes.engRegular};
  `,
  korBold: `
    font-family: NotoSansKR-Bold;
    line-height: 1;
    font-size: ${fontSizes.korBold};
  `,
  korRegular: `
    font-family: NotoSansKR;
    line-height: 1.2em;
    font-size: ${fontSizes.korRegular};
  `,
  korRegularBold: `
    font-family: NotoSansKR-Bold;
    letter-spacing: -0.25em;
    line-height: 1.2em;
    font-size: ${fontSizes.korRegularBold};
  `,
  korTitleBold: `
    font-family: NotoSansKR;
    letter-spacing: -0.025em;
    line-height: 1.2;
    font-size: ${fontSizes.korTitle};
  `,
};

const colors = {
  bgColor: "#EBEBEB",
  textBlack: "#484848",
  textGray: "#BBBBBB",
  textRed: "#ED5974",
  bgWhite: "#F9F9F9",
  pointWhite: "#FFFFFF",
  chartPink: "#F1B0BC",
  chartGreen: "#97CDBD",
  chartGray: "#555555",
  chartLineGray: "#E3E3E3",
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
  fonts,
  colors,
  deviceSizes,
  device,
};

export default theme;
