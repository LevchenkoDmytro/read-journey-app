export const calculateReadingTime = (startReading: Date, finishReading: Date) =>
  Math.ceil((Number(finishReading) - Number(startReading)) / 60000);

export const calculatePercentageRead = (
  finishPage: number,
  startPage: number,
  totalPages: number,
) => parseFloat((((finishPage - startPage + 1) / totalPages) * 100).toFixed(2));
