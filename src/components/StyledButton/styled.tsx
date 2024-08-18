import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';
import { Button } from '@mui/material';

const StyledButton = styled(Button)`
  color: ${COLORS.WHITE};
  border: 1px ${COLORS.LIGHT_GRAY} solid;
  padding: 11px 28px;
  border-radius: 30px;
  font-size: ${SIZES.FONT.MEDIUM};
  font-weight: ${SIZES.WEIGHT.W700};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  text-transform: none;
  cursor: pointer;

  &:disabled {
    pointer-events: auto;
    cursor: not-allowed;
    color: ${COLORS.LIGHT_GRAY};
  }

  @media (max-width: 576px) {
    padding: 9px 24px;
    font-size: ${SIZES.FONT.SMALL};
  }
`;

export default StyledButton;
