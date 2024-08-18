import { IBook } from '../../../redux/books/types';

export interface IHomeModal {
  isShowModal: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  currentBook: IBook | null;
}
