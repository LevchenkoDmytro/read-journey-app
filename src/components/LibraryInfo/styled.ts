import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, SIZES } from '../../styles/theme';

export const Wrapper = styled.div`
  background-color: ${COLORS.MIDDLE_GRAY};
  padding: 15px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  height: 259px;

  @media (max-width: 992px) {
    width: 263px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    height: 202px;
    min-width: 200px;
  }

  @media (max-width: 576px) {
    padding: 20px;
    height: 259px;
    width: 273px;
  }
`;

export const Title = styled.h3`
  margin-bottom: 20px;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};

  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: ${SIZES.FONT.REGULAR};
    line-height: ${SIZES.LINE_HEIGHT.LH18};
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: 1200px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 5px;
    margin-bottom: 8px;
  }

  @media (max-width: 576px) {
    margin-bottom: 14px;
    gap: 10px;
  }
`;

export const CardWrapper = styled.div``;

export const Img = styled.img`
  max-width: 71px;
  height: 107px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 57px;
    height: 86px;
  }

  @media (max-width: 576px) {
    width: 71px;
    height: 107px;
  }
`;

export const PlaceholderWrapper = styled.div`
  width: 71px;
  height: 107px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 57px;
  }

  @media (max-width: 576px) {
    width: 71px;
  }
`;

export const Placeholder = styled.img``;

export const BookTitle = styled.h4`
  max-width: 71px;
  margin-top: 8px;
  font-size: ${SIZES.FONT.EXTRA_SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH12};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 57px;
  }

  @media (max-width: 576px) {
    width: 71px;
  }
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

  @media (max-width: 768px) {
    width: 57px;
  }

  @media (max-width: 576px) {
    width: 71px;
  }
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
