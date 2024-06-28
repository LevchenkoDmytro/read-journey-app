import { useEffect, useState, FC } from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormTitle, WrapperButtons } from './styled';
import StyledInput from '../../Inputs/StyledInput';
import StyledButton from '../../StyledButton';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { getRecommendedBooksThunk } from '../../../redux/books/thunk';
import { IFilterForm, IFilterFormProps } from './types';

const FilterForm: FC<IFilterFormProps> = ({ currentPage, setCurrentPage }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const { register, reset, handleSubmit } = useForm<IFilterForm>();
  const firstPage = 1;

  useEffect(() => {
    dispatch(getRecommendedBooksThunk({ currentPage, author, title }));
  }, [currentPage, author, title]);

  const submitForm = async (data: IFilterForm) => {
    setTitle(data.title);
    setAuthor(data.author);
    setCurrentPage(firstPage);
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCurrentPage(firstPage);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormTitle>Filters:</FormTitle>
      <StyledInput
        disableUnderline
        {...register('title')}
        placeholder="Book title:"
      />
      <StyledInput
        disableUnderline
        {...register('author')}
        placeholder="The author:"
      />

      <WrapperButtons>
        <StyledButton type="submit">To apply</StyledButton>
        <StyledButton onClick={resetForm}>Reset</StyledButton>
      </WrapperButtons>
    </Form>
  );
};

export default FilterForm;
