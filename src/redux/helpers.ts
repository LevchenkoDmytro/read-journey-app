import axios from 'axios';

type RejectWithValue = (value: string) => void;

export const handlerError = (error: unknown, rejectWithValue: RejectWithValue) => {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 500) {
      return rejectWithValue('Oops something went wrong');
    }
    return rejectWithValue(error.response?.data.message);
  }
};
