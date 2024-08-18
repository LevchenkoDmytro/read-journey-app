import { useState } from 'react';
import HomeModal from '../Modals/HomeModal';
import BookList from '../BookList';
import Spinner from '@mui/material/CircularProgress';
import { Wrapper, Text, TextWrapper, SpinnerWrapper } from './styled';

import { useAppSelector } from '../../hooks/reduxHooks';
import { SIZES } from '../../styles/theme';
import { IBook } from '../../redux/books/types';

const HomeContent = () => {
  const [currentBook, setCurrentBook] = useState<IBook | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const books = useAppSelector(state => state.books.recommendedBooks);
  const isLoading = useAppSelector(state => state.books.isLoading);

  return (
    <Wrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size={SIZES.SPINNER.MEDIUM} />
        </SpinnerWrapper>
      ) : books?.length ? (
        <BookList
          books={books}
          setCurrentBook={setCurrentBook}
          setIsShowModal={setIsShowModal}
        />
      ) : (
        <TextWrapper>
          <Text>No results</Text>
        </TextWrapper>
      )}
      <HomeModal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        currentBook={currentBook}
      />
    </Wrapper>
  );
};

export default HomeContent;
