import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../hooks/reduxHooks';

import { ErrorText, Form, FormButton, Label, Input } from './styled';

import { validationPages } from '../../../helpers/validation';
import { addBookByFormThunk } from '../../../redux/books/thunk';
import { IAddBookForm } from './type';

const AddBookForm = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddBookForm>({ mode: 'onChange' });

  const submit = ({ title, author, totalPages }: IAddBookForm) => {
    totalPages = Number(totalPages);
    dispatch(addBookByFormThunk({ title, author, totalPages }));
    reset();
  };

  const { title, author, totalPages } = errors;
  return (
    <Form onSubmit={handleSubmit(submit)}>
      <Label>Create your library:</Label>
      <Input
        {...register('title', { required: 'Input title is required' })}
        disableUnderline
        placeholder="Book title:"
      />
      {title?.message && <ErrorText>{title?.message}</ErrorText>}

      <Input
        {...register('author', { required: 'Input author is required' })}
        disableUnderline
        placeholder="The author:"
      />
      {author?.message && <ErrorText>{author?.message}</ErrorText>}
      
      <Input
        {...register('totalPages', validationPages)}
        disableUnderline
        placeholder="Number of pages:"
      />
      {totalPages?.message && <ErrorText>{totalPages?.message}</ErrorText>}
      <FormButton type="submit">Add book</FormButton>
    </Form>
  );
};

export default AddBookForm;
