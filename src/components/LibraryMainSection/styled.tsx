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
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  & .MuiPagination-root {
    align-self: center;
  }
`;
