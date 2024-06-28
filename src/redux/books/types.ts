import { IBookObj } from '../../types/data';

export interface IState {
  items: IBookObj[];
  totalPages: number;
  isLoading: boolean;
  error: string;
  libraryBooks: IBookObj[];
}

export interface getRecommendedBooksParams {
  currentPage?: number;
  author?: string;
  title?: string;
}
