import { FC } from 'react';
import Pagination from '../../components/Pagination';
import { Wrapper, Title } from './styled';
import { useAppSelector } from '../../hooks/reduxHooks';
import { IHeaderMainSectionProps } from './types';

const HeaderMainSection: FC<IHeaderMainSectionProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = useAppSelector(state => state.books.totalPages);

  const isShowPagination = totalPages > 1;
  return (
    <>
      <Wrapper>
        <Title>Recommended</Title>
        {isShowPagination && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Wrapper>
    </>
  );
};

export default HeaderMainSection;
