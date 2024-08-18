import styled from '@emotion/styled';
import { SIZES, COLORS } from '../../styles/theme';
import StyledButton from '../../components/StyledButton';

export const Wrapper = styled.div`
  @media (max-width: 992px) {
    width: 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  margin-bottom: 40px;
  width: 100%;

  @media (max-width: 576px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 356px;
  }
`;

export const InputWrapper = styled.div``;

export const Label = styled.legend`
  margin-bottom: 8px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  color: ${COLORS.RED};
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH16};
`;

export const Button = styled(StyledButton)`
  margin-top: 20px;
`;
