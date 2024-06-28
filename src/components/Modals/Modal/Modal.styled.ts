import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import { COLORS } from '../../../styles/theme';

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 483px;
  background-color: ${COLORS.BLACK};
  outline: 0;
  border-radius: 12px;
  border: 1px solid ${COLORS.MIDDLE_GRAY};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseIcon = styled.svg`
  width: 22px;
  height: 22px;
  margin-left: auto;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const ModalBookCard = styled.div`
  .modal-book-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .modal-book-img {
    width: 153px;
    height: 233px;
  }

  .modal-book-interface {
    padding-top: 16px;
    padding-bottom: 32px;
  }

  .modal-book-title {
    font-size: 20px;
    line-height: 20px;
  }

  .modal-book-author {
    font-size: 14px;
    line-height: 18px;
  }

  .modal-book-pages {
    font-size: 10px;
    line-height: 12px;
  }

  .book-book-info {
    max-width: 317px;
    text-align: center;
  }
`;
