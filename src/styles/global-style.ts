import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "styled-tools";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NotoSansKR-Regular";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NotoSansKR-Regular.otf") format("opentype");
  }


  html {
    color: ${theme("colors.textBlack")};
    font-family: NotoSansKR;
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }

  button {
    color: inherit;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${theme("colors.bgColor")};
  }
`;

export default GlobalStyle;
