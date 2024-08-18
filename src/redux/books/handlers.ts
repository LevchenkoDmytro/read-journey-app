import { PayloadAction } from '@reduxjs/toolkit';
import { IBook } from '../../redux/books/types';
import { IState } from './types';

export const handlerPending = (state: IState) => {
  state.isLoading = true;
};

export const handlerRejected = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.error = payload;
  state.isLoading = false;
};

export const handlerGetRecommendedBooks = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.recommendedBooks = payload?.data?.results;
  state.totalPages = payload?.data?.totalPages;
  state.isLoading = false;
};

export const handlerGetLibraryBooks = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.libraryBooks = payload;
  state.isLoading = false;
};

export const handlerAddBook = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.libraryBooks.unshift(payload);
};

export const handlerdeleteBook = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.libraryBooks = state.libraryBooks.filter(
    (book: IBook) => book._id !== payload.id,
  );
};

export const handlerGetBookInfo = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.readingStatus = payload.progress?.at(-1)?.status || 'inactive';
  state.bookInfo = payload;
  state.isLoading = false;
};

export const handlerStartReadingBook = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.readingStatus = payload.progress?.at(-1)?.status;
  state.isLoading = false;
};

export const handlerFinishReadingBook = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.readingStatus = payload.progress?.at(-1)?.status;
  state.bookInfo = payload;
  state.isLoading = false;
};

export const handlerDeleteSession = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.bookInfo = payload;
};
