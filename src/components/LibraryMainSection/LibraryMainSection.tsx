import { useState } from 'react';
import { Header, Wrapper, Title } from './styled';
import Dropdown from '../Dropdown';
import Pagination from '../Pagination';
import LibraryContent from '../LibraryContent';
import { useAppSelector } from '../../hooks/reduxHooks';

const LibraryMainSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const libraryBooks = useAppSelector(state => state.books.libraryBooks);

  const booksPerPage = 10;
  const totalPagesList = Math.ceil(libraryBooks?.length / booksPerPage);
  return (
    <>
      <Header>
        <Title>My library</Title>
        <Wrapper>
          {libraryBooks?.length > booksPerPage && (
            <Pagination
              totalPages={totalPagesList}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
          <Dropdown setCurrentPage={setCurrentPage} />
        </Wrapper>
      </Header>
      <LibraryContent currentPage={currentPage} />
    </>
  );
};

export default LibraryMainSection;
