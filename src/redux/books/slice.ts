import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getRecommendedBooksThunk,
  getLibraryBooksThunk,
  addBookByIdThunk,
  addBookByFormThunk,
  deleteBookThunk,
} from './thunk';
import { initialState } from './initial';
import {
  handlerPending,
  handlerRejected,
  handlerGetRecommendedBooks,
  handlerGetLibraryBooks,
  handlerAddBook,
  handlerdeleteBook,
} from './handlers';

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getRecommendedBooksThunk.fulfilled, handlerGetRecommendedBooks)
      .addCase(getLibraryBooksThunk.fulfilled, handlerGetLibraryBooks)
      .addCase(addBookByIdThunk.fulfilled, handlerAddBook)
      .addCase(addBookByFormThunk.fulfilled, handlerAddBook)
      .addCase(deleteBookThunk.fulfilled, handlerdeleteBook)
      .addMatcher(
        isAnyOf(getRecommendedBooksThunk.pending, getLibraryBooksThunk.pending),
        handlerPending,
      )
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.rejected,
          getLibraryBooksThunk.rejected,
          addBookByIdThunk.rejected,
          deleteBookThunk.rejected,
        ),
        handlerRejected,
      );
  },
});

export const booksSliceReducers = booksSlice.reducer;
