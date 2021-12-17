import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-style";
import theme from "./styles/theme";
import Router from "components/Router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
