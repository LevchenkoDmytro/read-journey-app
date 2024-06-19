import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, SIZES } from '../../../style/variables';
import StyledButton from '../../../components/ui/StyledButton';

export const Form = styled.form`
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

export const InputsWrapper = styled.div`
  & > :not(:first-of-type) {
    margin-top: 8px;
  }
`;

export const Button = styled(StyledButton)`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.DARK_GRAY};
  width: 166px;
  height: 52px;
  font-size: ${SIZES.FONT.BIG};
  line-height: 20px;

  &:hover {
    color: ${COLORS.WHITE};
  }

  &:disabled {
    color: #686868;
    cursor: not-allowed;
    pointer-events: auto;
    background-color: transparent;
  }
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.LIGHT_GRAY};
  text-decoration: underline;
  margin-left: 20px;
`;
export const WrapperButton = styled.div`
  margin-top: auto;
`;
