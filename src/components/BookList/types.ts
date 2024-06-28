import { IBookObj } from "../../types/data";

export interface IBookListProps {
  books: IBookObj[];
  setCurrentBook: React.Dispatch<React.SetStateAction<IBookObj | null>>;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}