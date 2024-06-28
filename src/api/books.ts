import { instance } from './helpers/instance';

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

export const getLibraryBooks = async () => {
  const { data } = await instance(`books/own`);
  return data.reverse();
};

export const addBook = async (id: string) => {
  const { data } = await instance.post(`books/add/${id}`, {
    id,
  });
  return data;
};

export const deleteBook = async (id: string) => {
  const { data } = await instance.delete(`books/remove/${id}`);
  return data;
};
