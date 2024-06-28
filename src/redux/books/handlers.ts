import { PayloadAction } from '@reduxjs/toolkit';
import { IBookObj } from '../../types/data';
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
  state.items = payload?.data?.results;
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
    (book: IBookObj) => book._id !== payload.id,
  );
};
