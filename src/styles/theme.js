const calcRem = (size) => `${size / 10}rem`;
const fontSizes = {
  headLint: calcRem(45),
  title: calcRem(30),
  display: calcRem(28),
  subTitle1: calcRem(20),
  subTitle2: calcRem(24),
  paragraph2: calcRem(16),
  paragraph1: calcRem(14),
  caption: calcRem(12),
  page: calcRem(10),
};

const colors = {
  gray100: "#FBFBFB",
  gray200: "#F6F6F6",
  gray300: "#DDDDDD",
  gray400: "#BFBFBF",
  gray500: "#999999",
  gray600: "#959595",
  gray700: "#666666",
  black: "#333333",
  white: "#FFFFFF",
  main: "#00C3BD",
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
