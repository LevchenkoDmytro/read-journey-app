import { useState, FC, useEffect, useLayoutEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxHooks';
import StyledButton from '../StyledButton';
import EmptyLibrary from '../EmptyLibrary';
import Modal from '../Modals/Modal';
import { LibraryContentProps } from './types';
import BookList from '../BookList';
import { CircularProgress as Spinner } from '@mui/material';
import { SpinnerWrapper, Wrapper } from '../HomeContent/styled';
import { SIZES } from '../../styles/theme';
import { IBook } from '../../redux/books/types';
import { useNavigate } from 'react-router-dom';

const LibraryContent: FC<LibraryContentProps> = ({ currentPage }) => {
  const navigate = useNavigate();
  const [currentBook, setCurrentBook] = useState<IBook | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [shouldNavigate, setShouldNavigate] = useState<boolean>(false);
  const [books, setBooks] = useState<IBook[] | null>(null);
  const [booksPerPage, setBooksPerPage] = useState(10);

  const isLoading = useAppSelector(state => state.books.isLoading);
  const libraryBooks = useAppSelector(state => state.books.libraryBooks);

  useEffect(() => {
    if (shouldNavigate && currentBook?._id) {
      navigate(`/reading/${currentBook._id}`);
      setShouldNavigate(false);
    }
  }, [shouldNavigate]);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 576) {
        setBooksPerPage(4);
      } else if (width <= 1200) {
        setBooksPerPage(8);
      } else if (width > 1200) {
        setBooksPerPage(10);
      }
    };

    handleResize();

    const getPageBooks = (currentPage: number) => {
      const startIndex = (currentPage - 1) * booksPerPage;
      const endIndex = startIndex + booksPerPage;
      return libraryBooks.slice(startIndex, endIndex);
    };

    setBooks(getPageBooks(currentPage));

    window.addEventListener('resize', handleResize);
    console.log(booksPerPage);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, libraryBooks, booksPerPage]);

  const heandlerClick = () => {
    setIsShowModal(false);
    setShouldNavigate(true);
  };

  return (
    <Wrapper>
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner size={SIZES.SPINNER.MEDIUM} />
        </SpinnerWrapper>
      ) : libraryBooks?.length ? (
        <BookList
          setIsShowModal={setIsShowModal}
          books={books}
          setCurrentBook={setCurrentBook}
        />
      ) : (
        <EmptyLibrary />
      )}
      <Modal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        currentBook={currentBook}
      >
        <StyledButton onClick={heandlerClick}>Start reading</StyledButton>
      </Modal>
    </Wrapper>
  );
};

export default LibraryContent;
