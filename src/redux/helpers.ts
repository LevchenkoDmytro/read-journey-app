import axios from 'axios';
import Notiflix from 'notiflix';

type RejectWithValue = (value: string) => void;

export const handlerError = (
  error: unknown,
  rejectWithValue: RejectWithValue,
) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 409) {
      Notiflix.Notify.failure(error.response?.data.message, {
        timeout: 6000,
      });
      return rejectWithValue(error.response?.data.message);
    }
    Notiflix.Notify.failure('Oops something went wrong', {
      timeout: 6000,
    });
    return rejectWithValue('Oops something went wrong');
  }
};
