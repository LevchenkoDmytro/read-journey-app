import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRecommendedBooksParams } from './types';
import { IAddBookForm } from '../../components/Forms/AddBookForm/type';
import {
  getRecommendedBooks,
  getLibraryBooks,
  addBookById,
  addBookByForm,
  deleteBook,
} from '../../api/books';

import { handlerError } from '../helpers';

export const getRecommendedBooksThunk = createAsyncThunk(
  'books/getBooks',
  async (data: getRecommendedBooksParams | void, { rejectWithValue }) => {
    const { currentPage = 1, author = '', title = '' } = data || {};
    try {
      return await getRecommendedBooks(author, title, currentPage);
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
