import {
  Wrapper,
  ProgressBarWrapper,
  Text,
  Pages,
  ProgressBar,
  Label,
  LabelWrapper,
} from './styled';
import { IReadingProgress } from './type';
import { useAppSelector } from '../../hooks/reduxHooks';

const Statistics = () => {
  const readingProgress: IReadingProgress[] | undefined = useAppSelector(
    state => state.books.bookInfo?.progress,
  );

  const totalPages = useAppSelector(state => state.books.bookInfo?.totalPages);

  const lastPageRead = readingProgress?.at(-1)?.finishPage;

  const percentProgress =
    lastPageRead && totalPages
      ? Math.round((lastPageRead / totalPages) * 100)
      : 0;

  return (
    <>
      <Text>
        Each page, each chapter is a new round of knowledge, a new step towards
        understanding. By rewriting statistics, we create our own reading
        history.
      </Text>
      <Wrapper>
        <ProgressBarWrapper>
          <ProgressBar
            variant="determinate"
            {...{
              value: percentProgress,
            }}
          />
          <LabelWrapper>
            <Label>{percentProgress}%</Label>
          </LabelWrapper>
        </ProgressBarWrapper>
        <Pages>{lastPageRead} pages read</Pages>
      </Wrapper>
    </>
  );
};

export default Statistics;
