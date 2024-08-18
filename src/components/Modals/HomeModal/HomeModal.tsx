import { FC, useEffect } from 'react';
import Notiflix from 'notiflix';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';

import Modal from '../Modal';
import StyledButton from '../../StyledButton';
import {
  getLibraryBooksThunk,
  addBookByIdThunk,
  deleteBookThunk,
} from '../../../redux/books/thunk';
import { IHomeModal } from './types';

const HomeModal: FC<IHomeModal> = ({
  setIsShowModal,
  isShowModal,
  currentBook,
}) => {
  const dispatch = useAppDispatch();
  const libraryBooks = useAppSelector(state => state.books.libraryBooks);

  useEffect(() => {
    dispatch(getLibraryBooksThunk());
  }, []);

  const heandlerAddBook = () => {
    if (currentBook?._id) {
      dispatch(addBookByIdThunk(currentBook?._id));
    } else {
      Notiflix.Notify.failure(
        'Sorry, it is not possible to add a book to the library at the moment',
      );
    }

    setIsShowModal(false);
  };

  const heandlerDeleteBook = () => {
    const libraryBook = libraryBooks.find(
      ({ title }) => title === currentBook?.title,
    );

    if (libraryBook) {
      dispatch(deleteBookThunk(libraryBook._id));
    } else {
      Notiflix.Notify.failure(
        'Sorry, it is not possible to delete a book to the library at the moment',
      );
    }

    setIsShowModal(false);
  };

  const isBookInLibrary = libraryBooks?.some(
    ({ title }) => title === currentBook?.title,
  );

  return (
    <Modal
      currentBook={currentBook}
      isShowModal={isShowModal}
      setIsShowModal={setIsShowModal}
    >
      {isBookInLibrary ? (
        <StyledButton onClick={heandlerDeleteBook}>
          Delete to library
        </StyledButton>
      ) : (
        <StyledButton onClick={heandlerAddBook}>Add to library</StyledButton>
      )}
    </Modal>
  );
};

export default HomeModal;
