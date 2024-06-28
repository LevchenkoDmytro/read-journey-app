import { StyledPagination } from './styled';
import { IPaginationProps } from './types';

const Pagination = ({
  totalPages,
  currentPage,
  setCurrentPage,
}: IPaginationProps) => {
  const handlerChange = (event: React.ChangeEvent<unknown>) => {
    const isNextBtn = (
      event.currentTarget as HTMLButtonElement
    ).ariaLabel?.includes('next');

    if (isNextBtn) {
      setCurrentPage((prev: number) => prev + 1);
    } else {
      setCurrentPage((prev: number) => prev - 1);
    }
  };

  return (
    <StyledPagination
      count={totalPages}
      page={currentPage}
      onChange={handlerChange}
      variant="outlined"
    />
  );
};

export default Pagination;
