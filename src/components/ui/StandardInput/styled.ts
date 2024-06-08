import styled from '@emotion/styled';
import StyledInput from '../StyledInput';
import { COLORS } from '../../../style/variables';

export const Wrapper = styled.div`
  position: relative;
`;

export const Input = styled(StyledInput)`
  & {
    padding-right: 40px;
  }

  &.redBorder {
    outline: 1px solid ${COLORS.RED};
  }

  &.greenBorder {
    outline: 1px solid ${COLORS.GREEN};
  }
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  color: #e90516;
  font-size: 12px;
  line-height: 14px;
`;

const InputIcon = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 15px;
  right: 16px;
`;

export const ErrorIcon = styled(InputIcon)``;

export const SuccessIcon = styled(InputIcon)``;
