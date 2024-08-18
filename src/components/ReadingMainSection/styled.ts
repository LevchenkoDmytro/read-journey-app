import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../styles/theme';
import Skeleton from '@mui/material/Skeleton';

export const StyledSkeleton = styled(Skeleton)`
  background-color: red;
`;

export const Wrapper = styled.div``;

export const Title = styled.h2`
  height: 60px;
  margin-bottom: 16px;
  font-size: ${SIZES.FONT.EXTRA_BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH32};
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 224px;
  height: 340px;
  border-radius: 8px;
  margin-bottom: 25px;
`;

export const PlaceholderWrapper = styled.div`
  width: 224px;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

export const PlaceholderImg = styled.img``;

export const BookTitle = styled.h4`
  margin-bottom: 4px;
  width: 330px;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};

  @media (max-width: 375px) {
    width: 250px;
  }
`;

export const Author = styled.p`
  margin-bottom: 25px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.LIGHT_GRAY};
`;

export const Icon = styled.svg`
  width: 50px;
  height: 50px;
  margin-bottom: 25px;
`;
