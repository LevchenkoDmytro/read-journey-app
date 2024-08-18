import { FC } from 'react';
import {
  Wrapper,
  Content,
  Header,
  Footer,
  Percents,
  GraphIcon,
  Minutes,
  Pages,
  TrashIcon,
} from './styled';
import { deleteSessionThunk } from '../../redux/books/thunk';
import { calculateReadingTime, calculatePercentageRead } from './helpers';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHooks';
import { ISessionProps } from './types';
import svg from '../../assets/sprite.svg';

const Session: FC<ISessionProps> = ({
  startReading,
  finishReading,
  startPage,
  finishPage,
  _id,
}) => {
  const dispatch = useAppDispatch();
  const bookId = useAppSelector(state => state.books.bookInfo?._id);
  const totalPages = useAppSelector(state => state.books.bookInfo?.totalPages);

  const handlerClick = (readingId: string) => {
    dispatch(deleteSessionThunk({ readingId, bookId }));
  };

  const readingTime = calculateReadingTime(
    new Date(startReading),
    new Date(finishReading),
  );

  const percentageRead =
    totalPages && calculatePercentageRead(finishPage, startPage, totalPages);

  const pagesPerSession = finishPage - startPage + 1;

  return (
    <Wrapper className="session">
      <Content>
        <Header>
          <Percents>{percentageRead}%</Percents>
          <GraphIcon>
            <use href={svg + '#icon-graph'}></use>
          </GraphIcon>
        </Header>
        <Footer>
          <Minutes>
            {readingTime} minute{readingTime > 1 ? 's' : ''}
          </Minutes>
          <Pages>
            {pagesPerSession} page{pagesPerSession > 1 ? 's' : ''} per session
          </Pages>
        </Footer>
      </Content>
      <TrashIcon
        onClick={() => {
          handlerClick(_id);
        }}
      >
        <use href={svg + '#icon-trash'}></use>
      </TrashIcon>
    </Wrapper>
  );
};

export default Session;
