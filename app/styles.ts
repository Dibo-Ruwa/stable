"use client";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
}

:root {
  --primary: #27A124;
  --color2: #FFD335;
  --color3: #925DEA;
  --color4: #53CEF4;
  --content: #787878;
  --primary-20: hsla(119, 68%, 56%, 0.2);
  --color2-20: hsla(47, 100%, 60%, 0.2);
  --color3-20: hsla(263, 77%, 64%, 0.2);
  --color4-20: hsla(194, 88%, 64%, 0.2);
}

body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
`;
