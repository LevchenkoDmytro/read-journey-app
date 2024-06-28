import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../styles/theme';

export const Wrapper = styled.div``;

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
`;

export const PlaceholderImg = styled.img``;

export const Title = styled.h4`
  width: 137px;
  margin-top: 8px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
  margin-top: 2px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
