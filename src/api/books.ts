import { instance } from './helpers/instance';
import { IAddBookForm } from '../components/Forms/AddBookForm/type';

export const getRecommendedBooks = async (
  author: string,
  title: string,
  currentPage: number,
) => {
  const { data } = await instance(
    `books/recommend?author=${author}&title=${title}&page=${currentPage}`,
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
