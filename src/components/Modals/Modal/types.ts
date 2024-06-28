import { ReactNode } from 'react';
import { IBookObj } from '../../../types/data';

export interface ModalProps {
  children: ReactNode;
  currentBook: IBookObj | null;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  isShowModal: boolean;
}
