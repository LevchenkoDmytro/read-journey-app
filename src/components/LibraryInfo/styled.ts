import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, SIZES } from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${COLORS.MIDDLE_GRAY};
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  min-height: 259px;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-grow: 1;
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 71px;
  height: 107px;
  border-radius: 8px;
`;

export const PlaceholderWrapper = styled.div`
  width: 71px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Placeholder = styled.img``;

export const BookTitle = styled.h4`
  width: 71px;
  margin-top: 8px;
  font-size: ${SIZES.FONT.EXTRA_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH12};
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

export const ArrowRight = styled.svg`
  width: 24px;
  height: 24px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${SIZES.FONT.SMALL};
  text-decoration: underline;
  margin-top: auto;
`;

export const CardWrapper = styled.div``;
