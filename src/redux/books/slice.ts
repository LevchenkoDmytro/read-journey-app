import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getRecommendedBooksThunk,
  getLibraryBooksThunk,
  addBookByIdThunk,
  addBookByFormThunk,
  deleteBookThunk,
  getBookInfoThunk,
  startReadingBookThunk,
  finishReadingBookThunk,
  deleteSessionThunk,
} from './thunk';
import { initialState } from './initial';
import {
  handlerPending,
  handlerRejected,
  handlerGetRecommendedBooks,
  handlerGetLibraryBooks,
  handlerAddBook,
  handlerdeleteBook,
  handlerGetBookInfo,
  handlerStartReadingBook,
  handlerFinishReadingBook,
  handlerDeleteSession,
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
      .addCase(getBookInfoThunk.fulfilled, handlerGetBookInfo)
      .addCase(startReadingBookThunk.fulfilled, handlerStartReadingBook)
      .addCase(finishReadingBookThunk.fulfilled, handlerFinishReadingBook)
      .addCase(deleteSessionThunk.fulfilled, handlerDeleteSession)
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.pending,
          getLibraryBooksThunk.pending,
          getBookInfoThunk.pending,
        ),
        handlerPending,
      )
      .addMatcher(
        isAnyOf(
          getRecommendedBooksThunk.rejected,
          getLibraryBooksThunk.rejected,
          addBookByIdThunk.rejected,
          deleteBookThunk.rejected,
          getBookInfoThunk.rejected,
          startReadingBookThunk.rejected,
        ),
        handlerRejected,
      );
  },
});

export const booksSliceReducers = booksSlice.reducer;
