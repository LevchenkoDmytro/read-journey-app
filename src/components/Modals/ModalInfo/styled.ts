import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Img = styled.img`
  width: 153px;
  height: 233px;

  @media (max-width: 576px) {
    width: 137px;
    height: 208px;
  }
  border-radius: 8px;
`;

export const PlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (max-width: 576px) {
    width: 160px;
    font-size: ${SIZES.FONT.REGULAR};
    font-weight: ${SIZES.WEIGHT.W500};
    line-height: ${SIZES.LINE_HEIGHT.LH18};
  }
`;

export const Author = styled.p`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
  margin-top: 2px;

  @media (max-width: 576px) {
    width: 160px;
    font-size: ${SIZES.FONT.VERY_SMALL};
    line-height: ${SIZES.LINE_HEIGHT.LH14};
  }
`;

export const TotalPages = styled.p`
  font-size: ${SIZES.FONT.EXTRA_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH12};
  margin-top: 4px;
  margin-bottom: 32px;

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;
