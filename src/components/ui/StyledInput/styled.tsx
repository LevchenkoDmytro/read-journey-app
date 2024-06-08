import styled from '@emotion/styled';
import { Input } from '@mui/material';
import { COLORS } from '../../../style/variables';

const StyledInput = styled(Input)`
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 12px;
  padding: 15px 16px;
  color: white;
  width: 100%;

  .MuiInputBase-input {
    padding: 0;
  }
`;

export default StyledInput;
