import { IState } from './types';

export const initialState: IState = {
  recommendedBooks: [],
  libraryBooks: [],
  bookInfo: null,
  readingStatus: 'inactive',
  totalPages: 1,
  isLoading: false,
  error: '',
};
