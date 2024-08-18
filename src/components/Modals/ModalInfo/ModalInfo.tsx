import {
  Wrapper,
  Img,
  PlaceholderWrapper,
  PlaceholderImg,
  Title,
  Author,
  TotalPages,
} from './styled';
import { FC } from 'react';
import { IModalInfo } from './types';

import png from '../../../assets/placeholderBook.png';

const ModalInfo: FC<IModalInfo> = ({ imageUrl, title, author, totalPages }) => {
  return (
    <Wrapper>
      {imageUrl ? (
        <Img src={imageUrl} alt="book" />
      ) : (
        <PlaceholderWrapper>
          <PlaceholderImg src={png} alt="book" />
        </PlaceholderWrapper>
      )}
      <Title>{title}</Title>
      <Author>{author}</Author>
      <TotalPages>{totalPages} pages</TotalPages>
    </Wrapper>
  );
};

export default ModalInfo;
