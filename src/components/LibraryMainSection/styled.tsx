import styled from '@emotion/styled';
import { SIZES } from '../../styles/theme';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h2`
  margin-bottom: 28px;
  font-size: ${SIZES.FONT.EXTRA_BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH32};

  @media (max-width: 576px) {
    margin-bottom: 34px;
    font-size: ${SIZES.FONT.BIG};
    line-height: ${SIZES.LINE_HEIGHT.LH20};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  & .MuiPagination-root {
    align-self: center;
  }

  @media (max-width: 576px) {
    flex-direction: column-reverse;
    gap: 15px;
    margin-bottom: 15px;
  }
`;
