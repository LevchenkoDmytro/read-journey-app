import styled from '@emotion/styled';
import { SIZES } from '../../styles/theme';

export const Title = styled.h2`
  font-size: ${SIZES.FONT.EXTRA_BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH32};
  margin-bottom: 28px;

  @media (max-width: 576px) {
    font-size: ${SIZES.FONT.BIG};
    line-height: ${SIZES.LINE_HEIGHT.LH20};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
