import emotionNormalize from 'emotion-normalize';
import { theme } from './theme';
import { FontFaces } from './Fonts';

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
