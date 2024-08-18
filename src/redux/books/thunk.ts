import { createAsyncThunk } from '@reduxjs/toolkit';
import { IgetRecommendedBooksParams, IstartReadingBookParams } from './types';
import { IAddBookForm } from '../../components/Forms/AddBookForm/type';
import {
  getRecommendedBooks,
  getLibraryBooks,
  addBookById,
  addBookByForm,
  deleteBook,
  getBookInfo,
  startReadingBook,
  finishReadingBook,
  deleteSession,
} from '../../api/books';

import { handlerError } from '../helpers';

export const getRecommendedBooksThunk = createAsyncThunk(
  'books/getRecommendedBooks',
  async (data: IgetRecommendedBooksParams | void, { rejectWithValue }) => {
    const {
      currentPage = 1,
      author = '',
      title = '',
      imageCount = 10,
    } = data || {};
    try {
      return await getRecommendedBooks(author, title, currentPage, imageCount);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const getLibraryBooksThunk = createAsyncThunk(
  'books/getBooksLibrary',
  async (filterStatus: string | void, { rejectWithValue }) => {
    try {
      return await getLibraryBooks(filterStatus);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const addBookByIdThunk = createAsyncThunk(
  'books/addBookById',
  async (id: string, { rejectWithValue }) => {
    try {
      return await addBookById(id);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const addBookByFormThunk = createAsyncThunk(
  'books/addBookByForm',
  async (data: IAddBookForm, { rejectWithValue }) => {
    try {
      return await addBookByForm(data);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const deleteBookThunk = createAsyncThunk(
  'books/deleteBook',
  async (id: string, { rejectWithValue }) => {
    try {
      return await deleteBook(id);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const getBookInfoThunk = createAsyncThunk(
  'books/bookInfo',
  async (id: string | undefined, { rejectWithValue }) => {
    try {
      return await getBookInfo(id);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const startReadingBookThunk = createAsyncThunk(
  'books/startReadingBook',
  async ({ id, page }: IstartReadingBookParams, { rejectWithValue }) => {
    try {
      return await startReadingBook(id, page);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const finishReadingBookThunk = createAsyncThunk(
  'books/finishReadingBook',
  async ({ id, page }: IstartReadingBookParams, { rejectWithValue }) => {
    try {
      return await finishReadingBook(id, page);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const deleteSessionThunk = createAsyncThunk(
  'books/deleteReadingSession',
  async ({ bookId, readingId }: any, { rejectWithValue }) => {
    try {
      return await deleteSession(bookId, readingId);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);
