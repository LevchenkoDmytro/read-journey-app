import Notiflix from 'notiflix';

export const handlerError = (error: string) => {
  Notiflix.Notify.failure(error, {
    timeout: 6000,
  });

  return error;
};
