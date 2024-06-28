import { FC } from 'react';
import {
  Wrapper,
  Img,
  Title,
  Author,
  PlaceholderWrapper,
  PlaceholderImg,
} from './styled';

import { IListCard } from './types';
import png from '../../assets/open-book.png';

const ListCard: FC<IListCard> = ({
  _id,
  imageUrl,
  title,
  author,
  handlerClick,
}) => {
  return (
    <Wrapper>
      {imageUrl ? (
        <Img onClick={handlerClick} data-id={_id} src={imageUrl} alt="book" />
      ) : (
        <PlaceholderWrapper onClick={handlerClick} data-id={_id}>
          <PlaceholderImg src={png} alt="book" />
        </PlaceholderWrapper>
      )}
      <Title>{title}</Title>
      <Author>{author}</Author>
    </Wrapper>
  );
};

export default ListCard;
