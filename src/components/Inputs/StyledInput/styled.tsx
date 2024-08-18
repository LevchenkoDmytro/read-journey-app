import styled from '@emotion/styled';
import { Input } from '@mui/material';
import { COLORS, SIZES } from '../../../styles/theme';

const StyledInput = styled(Input)`
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 12px;
  padding: 15px 16px;
  color: ${COLORS.WHITE};
  width: 100%;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};

  & .MuiInputBase-input {
    padding: 0;
  }

  @media (max-width: 576px) {
    padding: 12px 16px;
  }
`;

export default StyledInput;
