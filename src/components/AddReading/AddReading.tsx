import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { validatePageNumber } from '../../helpers/validation';

import StyledInput from '../../components/Inputs/StyledInput';
import {
  Form,
  InputWrapper,
  Label,
  ErrorText,
  Button,
  Wrapper,
} from './styled';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { IaddReadingForm } from './types';
import {
  startReadingBookThunk,
  finishReadingBookThunk,
} from '../../redux/books/thunk';
import { showBookReadMessage } from '../../helpers/showBookReadMessage';
import { useNavigate } from 'react-router-dom';

const AddReading = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const id = useAppSelector(state => state.books.bookInfo?._id);
  const readingStatus = useAppSelector(state => state.books.readingStatus);
  const totalPages = useAppSelector(state => state.books.bookInfo?.totalPages);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IaddReadingForm>();

  const submit = async ({ startPage, finishPage }: IaddReadingForm) => {
    setIsSubmitting(true);

    const page =
      readingStatus === 'inactive' ? Number(startPage) : Number(finishPage);
    reset();

    try {
      if (readingStatus === 'inactive') {
        await dispatch(startReadingBookThunk({ id, page }));
      } else {
        const { payload } = await dispatch(
          finishReadingBookThunk({ id, page }),
        );

        const isRead = payload.status === 'done';
        isRead && showBookReadMessage(navigate);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const isError = Object.keys(errors).length !== 0;
  const errorMessage =
    errors[readingStatus === 'inactive' ? 'startPage' : 'finishPage']?.message;

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(submit)}>
        <Label>{readingStatus === 'inactive' ? 'To start:' : 'To stop:'}</Label>
        <StyledInput
          {...register(
            readingStatus === 'inactive' ? 'startPage' : 'finishPage',
            {
              validate: value => validatePageNumber(value, totalPages),
            },
          )}
          disableUnderline
          placeholder="Page number"
        />
        {isError && <ErrorText>{errorMessage}</ErrorText>}
        <Button type="submit" disabled={isSubmitting}>
          {readingStatus === 'inactive' ? 'To start' : 'To stop'}
        </Button>
      </Form>
    </Wrapper>
  );
};

export default AddReading;
