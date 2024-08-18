import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { COLORS, SIZES } from '../../styles/theme';
import { CircularProgress } from '@mui/material';

export const Wrapper = styled.div`
  flex-grow: 1;
  background-color: ${COLORS.MIDDLE_GRAY};
  padding-top: 31px;
  padding-bottom: 31px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;

  @media (max-width: 992px) {
    padding-top: 28px;
    padding-bottom: 28px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 576px) {
    height: 268px;
  }
`;

export const ProgressBarWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Text = styled(Typography)`
  width: 293px;
  margin-bottom: 20px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.LIGHT_GRAY};

  @media (max-width: 992px) {
    display: none;
  }
`;

export const Pages = styled.p`
  margin-top: 30px;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH14};
  color: ${COLORS.LIGHT_GRAY};

  @media (max-width: 992px) {
    margin-top: 44px;
  }
`;

export const LabelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div``;

export const ProgressBar = styled(CircularProgress)`
  box-shadow: inset 0px 0px 0px 15px rgba(31, 31, 31, 1);
  width: 168px !important;
  height: 168px !important;

  & .MuiCircularProgress-circle {
    stroke-linecap: round;
    stroke: ${COLORS.GREEN};
  }

  &.MuiCircularProgress-root {
    border-radius: 100%;
  }

  @media (max-width: 992px) {
    width: 138px !important;
    height: 138px !important;
  }
`;
