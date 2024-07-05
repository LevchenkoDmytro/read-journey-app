import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  cursor: pointer;
`;

export const PlaceholderWrapper = styled.div`
  width: 137px;
  height: 208px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const PlaceholderImg = styled.img``;

interface LowerWrapperProps {
  recommend: boolean;
}

export const LowerWrapper = styled.div<LowerWrapperProps>`
  width: ${({ recommend }) => (recommend ? '137px' : '105px')};
`;

export const Title = styled.h4`
  margin-top: 8px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p`
  font-size: ${SIZES.FONT.EXTRA_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH12};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
  margin-top: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Icon = styled.svg`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
