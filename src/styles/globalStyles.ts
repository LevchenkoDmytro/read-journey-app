import { css } from '@emotion/react';
import { COLORS } from './theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Gilroy';
    color: ${COLORS.WHITE};
  }

  ul {
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  input {
    padding: 0;
  }

  h1 {
    margin: 0;
  }

  .MuiCircularProgress-circle {
    color: ${COLORS.GREEN};
  }

  .MuiSvgIcon-root {
    color: ${COLORS.WHITE};
  }
`;

export default globalStyles;
