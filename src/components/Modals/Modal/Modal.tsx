import { FC } from 'react';
import { ModalWrapper, StyledModal, CloseIcon } from './Modal.styled';
import ModalInfo from '../ModalInfo';
import svg from '../../../assets/sprite.svg';
import { ModalProps } from './types';

const Modal: FC<ModalProps> = ({
  setIsShowModal,
  isShowModal,
  currentBook,
  children: button,
}) => {
  return (
    currentBook && (
      <StyledModal open={isShowModal} onClose={() => setIsShowModal(false)}>
        <ModalWrapper>
          <CloseIcon onClick={() => setIsShowModal(false)}>
            <use href={svg + '#icon-close'}></use>
          </CloseIcon>
          <ModalInfo
            title={currentBook.title}
            imageUrl={currentBook.imageUrl}
            author={currentBook.author}
            totalPages={currentBook.totalPages}
          />
          {button}
        </ModalWrapper>
      </StyledModal>
    )
  );
};

export default Modal;
