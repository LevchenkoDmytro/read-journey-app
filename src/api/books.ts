import { instance } from './helpers/instance';
import { IAddBookForm } from '../components/Forms/AddBookForm/type';

export const getRecommendedBooks = async (
  author: string,
  title: string,
  currentPage: number,
  imageCount: number,
) => {
  const { data } = await instance(
    `books/recommend?author=${author}&title=${title}&page=${currentPage}&limit=${imageCount}`,
  );
  return { author, title, data };
};

export const getLibraryBooks = async (filterStatus: string | void) => {
  const { data } = await instance(
    `books/own${filterStatus ? `?status=${filterStatus}` : ''}`,
  );
  return data.reverse();
};

export const addBookById = async (id: string) => {
  const { data } = await instance.post(`books/add/${id}`, {
    id,
  });
  return data;
};

export const addBookByForm = async ({
  title,
  author,
  totalPages,
}: IAddBookForm) => {
  const { data } = await instance.post(`books/add`, {
    title,
    author,
    totalPages,
  });

  return data;
};

export const deleteBook = async (id: string) => {
  const { data } = await instance.delete(`books/remove/${id}`);
  return data;
};

export const getBookInfo = async (id: string | undefined) => {
  const { data } = await instance(`books/${id}`);
  return data;
};

export const startReadingBook = async (
  id: string | undefined,
  page: number | null,
) => {
  const { data } = await instance.post(`books/reading/start`, {
    id,
    page,
  });

  return data;
};

export const finishReadingBook = async (
  id: string | undefined,
  page: number | null,
) => {
  const { data } = await instance.post(`books/reading/finish`, {
    id,
    page,
  });

  return data;
};

export const deleteSession = async (bookId: string, readingId: string) => {
  const { data } = await instance.delete(
    `books/reading?bookId=${bookId}&readingId=${readingId}`,
  );

  return data;
};
