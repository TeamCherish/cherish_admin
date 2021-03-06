const calcRem = (size) => `${size / 10}rem`;
const fontSizes = {
  engBold: calcRem(28),
  engRegular: calcRem(18),
  korBold: calcRem(20),
  korRegular: calcRem(14),
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
    line-height: 1.2;
    font-size: ${fontSizes.engRegular};
  `,
  korBold: `
    font-family: NotoSansKR;
    line-height: 1;
    font-weight: bold;
    font-size: ${fontSizes.korBold};
  `,
  korRegular: `
    font-family: NotoSansKR;
    line-height: 1.2;
    font-size: ${fontSizes.korRegular};
    `,
  korRegularBold: `
    font-family: NotoSansKR;
    letter-spacing: -0.025em;
    line-height: 1.2;
    font-size: ${fontSizes.korRegular};
    font-weight: bold;
  `,
  korTitle: `
    font-family: NotoSansKR;
    letter-spacing: -0.025em;
    line-height: 1.2;
    font-size: ${fontSizes.engBold};
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
