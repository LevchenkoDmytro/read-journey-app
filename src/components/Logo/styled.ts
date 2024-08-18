import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 768px) {
    width: 135px;
  }
`;

export const LogoIcon = styled.svg`
  width: 42px;
  height: 74px;
`;

export const LogoText = styled.div`
  font-size: ${SIZES.FONT.REGULAR};
  font-weight: ${SIZES.WEIGHT.W700};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  text-transform: uppercase;
  color: ${COLORS.WHITE};

  @media (max-width: 768px) {
    display: none;
  }
`;
