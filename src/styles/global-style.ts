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

`;

export default GlobalStyle;
