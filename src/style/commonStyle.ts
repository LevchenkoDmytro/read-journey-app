import { COLORS, SIZES } from './variables';

const commonStyle = {
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
  h2: {
    fontSize: `${SIZES.FONT.EXTRA_BIG}`,
    fontWeight: `${SIZES.WEIGHT.W700}`,
  },
  h3: {
    fontSize: `${SIZES.FONT.BIG}`,
    fontWeight: `${SIZES.WEIGHT.W700}`,
    lineHeight: `${SIZES.LINE_HEIGHT.LH20}`,
  },
};

export default commonStyle;
