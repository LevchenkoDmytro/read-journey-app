import styled from '@emotion/styled';
import { SIZES } from '../../styles/theme';

export const Title = styled.h2`
  font-size: ${ SIZES.FONT.EXTRA_BIG };
  line-height: ${ SIZES.LINE_HEIGHT.LH32 };
  margin-bottom: 28px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SpinnerWrapper = styled.div`
  margin-top: 200px;
  text-align: center;
`;

export const TextWrapper = styled.div`
  margin-top: 200px;
`;

export const Text = styled.h3`
  text-align: center;
`;
