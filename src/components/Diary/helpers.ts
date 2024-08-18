import { IReadingProgress } from '../Statistics/type';

export const calculatePagesPerDay = (progress: IReadingProgress[]) => {
  let total = 0;
  let isFirstSessionOfDay = true;

  for (let index = 0; index < progress.length; index++) {
    const { finishReading, finishPage, startPage } = progress[index];
    const isNewDay = checkIsNewDay(progress, formatDate(finishReading), index);

    if (isNewDay && !isFirstSessionOfDay) {
      break;
    }

    total += finishPage - startPage + 1;
    isFirstSessionOfDay = false;
  }

  return total;
};

export const checkIsNewDay = (
  readingProgress: IReadingProgress[],
  finishReading: string,
  index: number,
) => {
  const dateCurrentSession = finishReading;
  const datePrevSession = formatDate(readingProgress[index - 1]?.finishReading);

  return dateCurrentSession !== datePrevSession;
};

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};
