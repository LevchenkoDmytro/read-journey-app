import { FC, useEffect } from 'react';

import {
  Wrapper,
  Title,
  ListWrapper,
  ArrowRight,
  StyledLink,
  Author,
  CardWrapper,
  Img,
  PlaceholderWrapper,
  Placeholder,
  BookTitle,
} from './styled';
import { LibraryInfoCard } from './types';

import { useAppSelector } from '../../hooks/reduxHooks';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { getRecommendedBooksThunk } from '../../redux/books/thunk';
import svg from '../../assets/sprite.svg';
import png from '../../assets/placeholderBook.png';

const LibraryInfo: FC = () => {
  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books.items)?.slice(0, 3);

  useEffect(() => {
    dispatch(getRecommendedBooksThunk());
  }, []);

  return (
    <Wrapper>
      <Title>Recommended books</Title>
      <ListWrapper>
        {books?.map(({ _id, author, imageUrl, title }: LibraryInfoCard) => (
          <CardWrapper key={_id}>
            {imageUrl ? (
              <Img src={imageUrl} alt="book" />
            ) : (
              <PlaceholderWrapper>
                <Placeholder src={png} alt="book" />
              </PlaceholderWrapper>
            )}
            <BookTitle>{title}</BookTitle>
            <Author>{author}</Author>
          </CardWrapper>
        ))}
      </ListWrapper>
      <StyledLink to={'/'}>
        Home
        <ArrowRight>
          <use href={svg + '#icon-arrowRight'}></use>
        </ArrowRight>
      </StyledLink>
    </Wrapper>
  );
};

export default LibraryInfo;
