import { css } from '@emotion/react';

import ManropeRegular from 'src/assets/fonts/Manrope-Regular.ttf';
import ManropeMedium from 'src/assets/fonts/Manrope-Medium.ttf';
import ManropeSemiBold from 'src/assets/fonts/Manrope-SemiBold.ttf';
import MontserratRegular from 'src/assets/fonts/Montserrat-Regular.ttf';
import MontserratSemiBold from 'src/assets/fonts/Montserrat-SemiBold.ttf';

export const FontFaces = css`
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
