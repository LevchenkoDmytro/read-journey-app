import styled from '@emotion/styled';
import { COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 353px;
  height: 651px;
  padding: 40px 20px 20px 20px;
  border-radius: 30px;
  background-color: ${COLORS.DARK_GRAY};

  @media (max-width: 1200px) {
    width: 303px;
    padding: 40px 15px 20px 15px;
  }

  @media (max-width: 992px) {
    display: flex;
    width: 704px;
    height: 336px;
    padding: 32px 16px 16px 32px;
    column-gap: 32px;
  }

  @media (max-width: 768px) {
    justify-content: space-around;
    align-items: center;
    max-width: 100%;
    width: unset;
    padding-left: 20px;
    padding-right: 20px;
    column-gap: 10px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    height: unset;
    min-height: 478px;
    padding: 20px;
  }
`;
