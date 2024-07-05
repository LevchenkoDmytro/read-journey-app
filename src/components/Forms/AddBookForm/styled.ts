import styled from '@emotion/styled';
import StyledButton from '../../StyledButton';
import StyledInput from '../../Inputs/StyledInput';
import { COLORS, SIZES } from '../../../styles/theme';

export const Form = styled.form`
  margin-bottom: 78px;
`;

export const Label = styled.legend`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;

export const FormButton = styled(StyledButton)`
  margin-top: 20px;
`;

export const Input = styled(StyledInput)`
  margin-top: 8px;
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  color: ${COLORS.RED};
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH16};
`;
