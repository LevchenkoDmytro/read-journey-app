import { FC, useState } from 'react';
import {
  Wrapper,
  Img,
  Title,
  Author,
  PlaceholderWrapper,
  PlaceholderImg,
  LowerWrapper,
  Icon,
  Spinner,
} from './styled';

import { deleteBookThunk } from '../../redux/books/thunk';
import { useAppDispatch } from '../../hooks/reduxHooks';

import { IListCard } from './types';
import png from '../../assets/placeholderBook.png';
import svg from '../../assets/sprite.svg';
import { SIZES } from '../../styles/theme';

const ListCard: FC<IListCard> = ({
  _id,
  imageUrl,
  title,
  author,
  handlerClick,
  recommend,
}) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const deleteBook = () => {
    setIsLoading(true);

    dispatch(deleteBookThunk(_id))
      .unwrap()
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Wrapper>
      {imageUrl ? (
        <Img onClick={handlerClick} data-id={_id} src={imageUrl} alt="book" />
      ) : (
        <PlaceholderWrapper onClick={handlerClick} data-id={_id}>
          <PlaceholderImg src={png} alt="book" />
        </PlaceholderWrapper>
      )}
      <LowerWrapper recommend={recommend}>
        <Title>{title}</Title>
        <Author>{author}</Author>
        {!recommend ? (
          !isLoading ? (
            <Icon onClick={deleteBook}>
              <use href={svg + '#icon-redTrash'}></use>
            </Icon>
          ) : (
            <Spinner size={SIZES.SPINNER.SMALL} />
          )
        ) : null}
      </LowerWrapper>
    </Wrapper>
  );
};

export default ListCard;
