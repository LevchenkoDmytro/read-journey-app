import styled from '@emotion/styled';
import { COLORS } from '../../../styles/theme';

export const Wrapper = styled.div`
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

export const Form = styled.div`
  width: 100%;
  max-width: 356px;
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FormTitle = styled.div`
  width: 39px;
  height: 18px;
  margin-bottom: 8px;
  border-radius: 5px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 576px) {
    height: 12px;
  }
`;

export const Input = styled.div`
  height: 50px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 576px) {
    height: 44px;
  }
`;

export const Button = styled.div`
  width: 126px;
  height: 42px;
  margin-top: 20px;
  border-radius: 30px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 576px) {
    height: 38px;
  }
`;

export const InfoBlock = styled.div`
  width: 100%;
  height: 272px;
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 1200px) {
    height: 262px;
    max-width: 313px;
  }

  @media (max-width: 576px) {
    height: 230px;
  }
`;

export const QuoteBlock = styled.div`
  height: 83px;
  margin-top: 12px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};

  @media (max-width: 992px) {
    display: none;
  }
`;
