import styled from '@emotion/styled';
import { COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
  flex-grow: 1;
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  padding: 40px 40px 28px 40px;

  @media (max-width: 768px) {
    height: 569px;
  }
`;

export const Title = styled.div`
  width: 201px;
  height: 32px;
  margin-bottom: 28px;
  border-radius: 5px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 375px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 523px;
  border-radius: 5px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 768px) {
    height: 441px;
  }
`;
