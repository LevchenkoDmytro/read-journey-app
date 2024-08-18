import { DairyWrapper, Marker, Header, Time, Pages, Wrapper } from './styled';
import { useAppSelector } from '../../hooks/reduxHooks';
import { calculatePagesPerDay, formatDate, checkIsNewDay } from './helpers';
import { IReadingProgress } from '../Statistics/type';
import Session from '../Session';

const Diary = () => {
  const readingProgress: IReadingProgress[] | undefined = useAppSelector(
    state => state.books.bookInfo?.progress,
  );

  return (
    <DairyWrapper>
      {readingProgress?.map(
        (
          { finishReading, startReading, finishPage, startPage, _id },
          index: number,
        ) => {
          if (!finishReading) {
            return null;
          }

          const dateCurrentSession = formatDate(finishReading);

          const isNewDay = checkIsNewDay(
            readingProgress,
            dateCurrentSession,
            index,
          );

          return (
            <Wrapper key={_id}>
              {isNewDay && (
                <Header>
                  <Marker className={`${index === 0 ? 'first' : ''}`} />
                  <Time>{dateCurrentSession}</Time>
                  <Pages>
                    {calculatePagesPerDay(readingProgress.slice(index))} pages
                  </Pages>
                </Header>
              )}
              <Session
                startReading={startReading}
                finishReading={finishReading}
                startPage={startPage}
                finishPage={finishPage}
                _id={_id}
              />
            </Wrapper>
          );
        },
      )}
    </DairyWrapper>
  );
};

export default Diary;
