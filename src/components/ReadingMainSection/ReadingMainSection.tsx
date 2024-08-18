import {
  Title,
  Wrapper,
  CardWrapper,
  Img,
  PlaceholderWrapper,
  PlaceholderImg,
  BookTitle,
  Author,
  Icon,
} from './styled';
import { useEffect } from 'react';
import { CircularProgress as Spinner } from '@mui/material';
import { SIZES } from '../../styles/theme';
import png from '../../assets/placeholderBook.png';
import svg from '../../assets/sprite.svg';
import { SpinnerWrapper } from '../HomeContent/styled';
import { getBookInfoThunk } from '../../redux/books/thunk';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { showBookReadMessage } from '../../helpers/showBookReadMessage';

const ReadingMainSection = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const book = useAppSelector(state => state.books.bookInfo);
  const isLoading = useAppSelector(state => state.books.isLoading);
  const readingStatus = useAppSelector(state => state.books.readingStatus);

  useEffect(() => {
    (async () => {
      const { payload } = await dispatch(getBookInfoThunk(id));
      const isRead = payload.status === 'done';

      isRead && showBookReadMessage(navigate);
    })();
  }, []);

  return (
    <Wrapper>
      <Title>My reading</Title>
      {!isLoading ? (
        <CardWrapper>
          {book?.imageUrl ? (
            <Img data-id={book?._id} src={book?.imageUrl} alt="book" />
          ) : (
            <PlaceholderWrapper data-id={book?._id}>
              <PlaceholderImg src={png} alt="book" />
            </PlaceholderWrapper>
          )}
          <BookTitle>{book?.title}</BookTitle>
          <Author>{book?.author}</Author>
          {readingStatus === 'inactive' ? (
            <Icon>
              <use href={svg + '#icon-record'}></use>
            </Icon>
          ) : (
            <Icon>
              <use href={svg + '#icon-stopRecord'}></use>
            </Icon>
          )}
        </CardWrapper>
      ) : (
        <SpinnerWrapper>
          <Spinner size={SIZES.SPINNER.MEDIUM} />
        </SpinnerWrapper>
      )}
    </Wrapper>
  );
};

export default ReadingMainSection;
