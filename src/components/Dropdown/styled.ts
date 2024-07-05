import styled from '@emotion/styled';
import { FormControl, Select } from '@mui/material';
import { COLORS, SIZES } from '../../styles/theme';

export const StyledFormControl = styled(FormControl)`
  border: 1px ${COLORS.LIGHT_GRAY} solid;
  border-radius: 12px;
  width: 130px;
  height: 46px;
`;

export const Wrapper = styled.div`
  margin-bottom: 14px;
`;

export const StyledSelect = styled(Select)`
  color: ${COLORS.WHITE};
  .MuiSelect-select {
    padding: 14px;
    font-size: ${SIZES.FONT.SMALL};
    line-height: ${SIZES.LINE_HEIGHT.LH18};
  }

  .MuiSelect-icon {
    color: ${COLORS.WHITE};
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const dropdownMenuStyle = {
  sx: {
    '&& .Mui-selected': {
      bgcolor: 'transparent !important',
      color: `${COLORS.WHITE}`,
      '&:hover': {
        bgcolor: 'transparent',
      },
    },
  },
  PaperProps: {
    sx: {
      bgcolor: `${COLORS.MIDDLE_GRAY}`,
      color: `${COLORS.LIGHT_GRAY}`,
      mt: '8px',
      borderRadius: '12px',

      '& .MuiList-root': {
        padding: '14px',
        '& > :not(:first-of-type)': {
          mt: '10px',
        },
      },

      '& .MuiMenuItem-root': {
        fontSize: `${SIZES.FONT.SMALL}`,
        padding: '0',
        '&:hover': {
          bgcolor: `transparent`,
          color: `${COLORS.WHITE}`,
        },
      },
      '& .MuiButtonBase-root': {
        lineHeight: `${SIZES.LINE_HEIGHT.LH18}`,
      },
    },
  },
};
