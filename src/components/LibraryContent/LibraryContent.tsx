import { useState, FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';
import StyledButton from '../StyledButton';
import EmptyLibrary from '../EmptyLibrary';
import Modal from '../Modals/Modal';
import { LibraryContentProps } from './types';
import { IBookObj } from '../../types/data';
import BookList from '../BookList';
import { CircularProgress as Spinner } from '@mui/material';
import { SpinnerWrapper } from '../HomeContent/styled';
import { SIZES } from '../../styles/theme';

const LibraryContent: FC<LibraryContentProps> = ({
  currentPage,
  booksPerPage,
}) => {
  const [currentBook, setCurrentBook] = useState<IBookObj | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const isLoading = useAppSelector(state => state.books.isLoading);
  const libraryBooks = useAppSelector(state => state.books.libraryBooks);
  const getPageBooks = (currentPage: number) => {
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    return libraryBooks.slice(startIndex, endIndex);
  };

  return (
    <>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size={SIZES.SPINNER} />
        </SpinnerWrapper>
      ) : libraryBooks?.length ? (
        <BookList
          setCurrentBook={setCurrentBook}
          setIsShowModal={setIsShowModal}
          books={getPageBooks(currentPage)}
        />
      ) : (
        <EmptyLibrary />
      )}
      <Modal
        currentBook={currentBook}
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
      >
        <Link to={`/reading/${currentBook?._id}`}>
          <StyledButton>Start reading</StyledButton>
        </Link>
      </Modal>
    </>
  );
};

export default LibraryContent;
