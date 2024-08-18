import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import { COLORS } from '../../../styles/theme';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 483px;
  background-color: ${COLORS.BLACK};
  outline: 0;
  border-radius: 12px;
  border: 1px solid ${COLORS.MIDDLE_GRAY};
  padding-bottom: 50px;
  padding-top: 50px;
  text-align: center;

  @media (max-width: 576px) {
    width: 300px;
    height: 421px;
    padding-bottom: 40px;
    padding-top: 40px;
  }
`;

export const CloseIcon = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 22px;
  height: 22px;
  cursor: pointer;
`;
