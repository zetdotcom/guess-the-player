// styles/index.js
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // You can continue writing global styles here
  body {
    text-align: center;
    background-color: #152A47;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    /* box-sizing: border-box; */
  }
  `;

// colors
export const redBg = 'linear-gradient(45deg, #e71b1b, #bb020296)';
export const cardBg = 'linear-gradient(45deg, black, transparent)';
export const greenBg = 'linear-gradient(45deg, #25e058, #117101ab)';
