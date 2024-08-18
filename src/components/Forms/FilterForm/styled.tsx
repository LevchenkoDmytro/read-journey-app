import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../../styles/theme';
import StyledInput from '../../Inputs/StyledInput';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const FormTitle = styled.legend`
  margin-bottom: 8px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.WHITE};

  @media (max-width: 576px) {
    font-size: ${SIZES.FONT.EXTRA_SMALL};
    line-height: ${SIZES.LINE_HEIGHT.LH12};
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Input = styled(StyledInput)`
  &:first-of-type {
    margin-bottom: 8px;
  }
`;
