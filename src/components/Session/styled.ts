import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 28px;
  margin-bottom: 28px;
  &::before {
    content: '';
    position: absolute;
    top: -28px;
    left: 9px;
    width: 2px;
    background: ${COLORS.DARK_GRAY};
    height: calc(100% + 28px * 2);
  }
`;

export const Content = styled.div`
  padding-left: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Percents = styled.span`
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};
`;

export const GraphIcon = styled.svg`
  width: 59px;
  height: 25px;
`;

export const Minutes = styled.span`
  margin-top: 8px;
  font-size: ${SIZES.FONT.VERY_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH14};
  color: ${COLORS.LIGHT_GRAY};
`;

export const Pages = styled.span`
  width: 62px;
  margin-top: 7px;
  text-align: center;
  font-size: ${SIZES.FONT.VERY_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH14};
  color: ${COLORS.LIGHT_GRAY};
`;

export const TrashIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: -32px;
  cursor: pointer;
  box-sizing: content-box;
  padding: 5px;
`;
