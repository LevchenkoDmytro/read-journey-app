import { ReactNode } from 'react';
import { IBook } from '../../../redux/books/types';

export interface ModalProps {
  children: ReactNode;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModal: boolean;
  currentBook: IBook | null;
}
