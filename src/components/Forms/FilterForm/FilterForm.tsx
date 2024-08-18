import { useEffect, useState, FC, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { Form, FormTitle, WrapperButtons, Input } from './styled';
import StyledButton from '../../StyledButton';

import { useAppDispatch } from '../../../hooks/reduxHooks';
import { getRecommendedBooksThunk } from '../../../redux/books/thunk';
import { IFilterForm, IFilterFormProps } from './types';

const FilterForm: FC<IFilterFormProps> = ({ currentPage, setCurrentPage }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const isInitialMount = useRef(true);
  const { register, reset, handleSubmit } = useForm<IFilterForm>();
  const imageCount = useRef(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newImageCount = 10;

      if (width <= 576) {
        newImageCount = 4;
      } else if (width <= 1200) {
        newImageCount = 8;
      } else if (width > 1200) {
        newImageCount = 10;
      }

      if (newImageCount !== imageCount.current || isInitialMount.current) {
        imageCount.current = newImageCount;
        dispatch(
          getRecommendedBooksThunk({
            currentPage,
            author,
            title,
            imageCount: imageCount.current,
          }),
        );
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isInitialMount.current) {
      dispatch(
        getRecommendedBooksThunk({
          currentPage,
          author,
          title,
          imageCount: imageCount.current,
        }),
      );
    } else {
      isInitialMount.current = false;
    }
  }, [currentPage, author, title]);

  const submitForm = async (data: IFilterForm) => {
    setTitle(data.title);
    setAuthor(data.author);
    setCurrentPage(1);
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setCurrentPage(1);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <FormTitle>Filters:</FormTitle>
      <Input
        disableUnderline
        {...register('title')}
        placeholder="Book title:"
      />
      <Input
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
