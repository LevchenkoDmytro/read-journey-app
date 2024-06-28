import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
`;

export const PlaceholderWrapper = styled.div`
  width: 137px;
  height: 208px;
`;

export const PlaceholderImg = styled.img``;

export const Title = styled.h4`
  margin-top: 16px;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};
  width: 317px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Author = styled.p`
  font-size: 14px;
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
  margin-top: 2px;
`;

export const TotalPages = styled.p`
  font-size: 10px;
  line-height: ${SIZES.LINE_HEIGHT.LH12};
  margin-top: 4px;
  margin-bottom: 32px;
`;
