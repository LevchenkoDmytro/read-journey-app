import axios from 'axios';
import Notiflix from 'notiflix';

type RejectWithValue = (value: string) => void;

export const handlerError = (
  error: unknown,
  rejectWithValue: RejectWithValue,
) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 500) {
      Notiflix.Notify.failure('Server error', {
        timeout: 6000,
      });
      return rejectWithValue(error.response?.data.message);
    }
    Notiflix.Notify.failure(error.response?.data.message, {
      timeout: 6000,
    });
    return rejectWithValue('Oops something went wrong');
  }
};
