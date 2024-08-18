import styled from '@emotion/styled';
import { COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  padding: 40px 40px 28px 40px;
  display: flex;
  flex-direction: column;
  flex: 1;
  @media (max-width: 992px) {
    min-height: 651px;
  }

  @media (max-width: 768px) {
    min-height: 569px;
  }

  @media (max-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
