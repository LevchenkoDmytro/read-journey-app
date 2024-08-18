import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { COLORS, SIZES } from '../../../styles/theme';
import StyledButton from '../../StyledButton';
import { CircularProgress } from '@mui/material';

export const Form = styled.form`
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputsWrapper = styled.div`
  & > :not(:first-of-type) {
    margin-top: 14px;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Button = styled(StyledButton)`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.DARK_GRAY};
  width: 225px;
  height: 52px;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};

  &:hover {
    color: ${COLORS.WHITE};
    line-height: ${SIZES.LINE_HEIGHT.LH18};
  }

  @media (max-width: 576px) {
    width: 180px;
  }
`;

export const StyledLink = styled(Link)`
  color: ${COLORS.LIGHT_GRAY};
  text-decoration: underline;

  @media (max-width: 1200px) {
    font-size: ${SIZES.FONT.SMALL};
  }
`;

export const CircularProgressStyle = styled(CircularProgress)`
  .MuiCircularProgress-circle {
    color: ${COLORS.GREEN};
  }
`;
