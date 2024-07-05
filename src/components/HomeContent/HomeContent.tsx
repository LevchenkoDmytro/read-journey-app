import { useState } from 'react';
import HomeModal from '../Modals/HomeModal';
import BookList from '../BookList';
import Spinner from '@mui/material/CircularProgress';
import { Text, TextWrapper, SpinnerWrapper } from './styled';

import { useAppSelector } from '../../hooks/reduxHooks';
import { SIZES } from '../../styles/theme';
import { IBookObj } from '../../types/data';

const HomeContent = () => {
  const [currentBook, setCurrentBook] = useState<IBookObj | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const books = useAppSelector(state => state.books.items);
  const isLoading = useAppSelector(state => state.books.isLoading);

  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size={SIZES.SPINNER} />
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
        currentBook={currentBook}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      />
    </>
  );
};

export default HomeContent;
