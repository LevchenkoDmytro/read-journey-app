import { IBook } from '../../redux/books/types';

export interface IBookListProps {
  books: IBook[] | null;
  setCurrentBook: React.Dispatch<React.SetStateAction<IBook | null>>;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
