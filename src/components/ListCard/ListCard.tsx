import { FC } from 'react';
import {
  Wrapper,
  Img,
  Title,
  Author,
  PlaceholderWrapper,
  PlaceholderImg,
  LowerWrapper,
  Icon,
} from './styled';

import { deleteBookThunk } from '../../redux/books/thunk';
import { useAppDispatch } from '../../hooks/reduxHooks';

import { IListCard } from './types';
import png from '../../assets/placeholderBook.png';
import svg from '../../assets/sprite.svg';

const ListCard: FC<IListCard> = ({
  _id,
  imageUrl,
  title,
  author,
  handlerClick,
  recommend,
}) => {
  const dispatch = useAppDispatch();

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
          <Icon onClick={() => dispatch(deleteBookThunk(_id))}>
            <use href={svg + '#icon-styledTrash'}></use>
          </Icon>
        ) : null}
      </LowerWrapper>
    </Wrapper>
  );
};

export default ListCard;
