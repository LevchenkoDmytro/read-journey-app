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

  h1 {
    margin: 0;
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

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${COLORS.WHITE};
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;
    caret-color: ${COLORS.WHITE};
  }

  .MuiCircularProgress-circle {
    color: ${COLORS.GREEN};
  }

  .MuiSvgIcon-root {
    color: ${COLORS.WHITE};
  }
`;

export default globalStyles;
