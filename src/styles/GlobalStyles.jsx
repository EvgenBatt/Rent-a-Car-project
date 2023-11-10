import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import { theme } from './theme';

import ManropeRegular from 'src/assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from 'src/assets/fonts/Manrope-Medium.ttf';
import ManropeSemiBold from 'src/assets/fonts/Manrope-SemiBold.ttf';
import MontserratRegular from 'src/assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'src/assets/fonts/Montserrat-SemiBold.ttf';

const FontFaces = css`
  @font-face {
    font-family: 'Manrope';
    font-weight: 400;
    src: url(${ManropeRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 500;
    src: url(${ManropeMedium}) format('truetype');
  }

  @font-face {
    font-family: 'Manrope';
    font-weight: 600;
    src: url(${ManropeSemiBold}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 400;
    src: url(${MontserratRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Montserrat';
    font-weight: 600;
    src: url(${MontserratSemiBold}) format('truetype');
  }
`;

export const GlobalStyles = css`
  ${emotionNormalize}

  /* ------- Reset ------- */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ol {
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  /* ------- Fonts ------- */

  ${FontFaces}

  /* ------- Common ------- */

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;

    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    color: ${theme.color.main};
    background-color: ${theme.color.mainBackground};
  }
`;
