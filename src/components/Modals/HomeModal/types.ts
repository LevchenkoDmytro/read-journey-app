import { IBookObj } from '../../../types/data';

export interface IHomeModal {
  currentBook: IBookObj | null;
  isShowModal: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}
