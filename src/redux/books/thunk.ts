import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecommendedBooksParams } from './types';
import {
  getRecommendedBooks,
  getLibraryBooks,
  addBook,
  deleteBook,
} from '../../api/books';

import { handlerError } from '../helpers';

export const getRecommendedBooksThunk = createAsyncThunk(
  'books/getBooks',
  async (
    { currentPage = 1, author = '', title = '' }: getRecommendedBooksParams,
    { rejectWithValue },
  ) => {
    try {
      return await getRecommendedBooks(author, title, currentPage);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const getLibraryBooksThunk = createAsyncThunk(
  'books/getBooksLibrary',
  async (_, { rejectWithValue }) => {
    try {
      return await getLibraryBooks();
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const addBookThunk = createAsyncThunk(
  'books/addBookById',
  async (id: string, { rejectWithValue }) => {
    try {
      return await addBook(id);
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
