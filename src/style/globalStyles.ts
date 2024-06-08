// @font-face {
//   font-family: Gilroy;
//   font-style: normal;
//   font-display: swap;
//   font-weight: 700;
//   src:
//     url(../fonts/Gilroy-Bold.ttf) format(truetype),
//     url(../fonts/Gilroy-Bold.eot) format(embedded-opentype),
//     url(../fonts/Gilroy-Bold.woff) format(woff);
// }

// @font-face {
//   font-family: Gilroy;
//   font-style: normal;
//   font-display: swap;
//   font-weight: 500;
//   src:
//     url(../fonts/Gilroy-Medium.ttf) format(truetype),
//     url(../fonts/Gilroy-Medium.eot) format(embedded-opentype),
//     url(../fonts/Gilroy-Medium.woff) format(woff);
// }
import { COLORS } from './variables';

const globalStyles = {
  '*': {
    fontFamily: "'Gilroy', sans-serif",
    margin: 0,
    boxSizing: 'border-box',
    color: `${COLORS.WHITE}`,
  },
  body: {
    backgroundColor: `${COLORS.BLACK}`,
  },
  ul: {
    padding: 0,
    listStyle: 'none',
  },
  img: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  },
  a: {
    display: 'inlineBlock',
    color: 'inherit',
    textDecoration: 'none',
  },
  input: {
    padding: 0,
  },
  h1: {
    margin: 0,
  },
  circle : {
    color: "#30b94d",
  }
};

export default globalStyles;

