import { useState, useEffect, useRef } from 'react';

import Spinner from '@mui/material/CircularProgress';
import Dashboard from '../../components/HOC/Dashboard';
import DashboardInfo from '../../components/DashboardInfo';
import FilterForm from '../../components/Forms/FilterForm';
import MainSection from '../../components/HOC/MainSection';
import Pagination from '../../components/Pagination';
import HomeModal from '../../components/Modals/HomeModal';
import BookList from '../../components/BookList';

import { Header, Text, Title, TextWrapper, SpinnerWrapper } from './styled';
import { useAppSelector } from '../../hooks/reduxHooks';
import { IBookObj } from '../../types/data';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentBook, setCurrentBook] = useState<IBookObj | null>(null);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const isfirstRender = useRef(true);

  const books = useAppSelector(state => state.books.items);
  const totalPages = useAppSelector(state => state.books.totalPages);
  const isLoading = useAppSelector(state => state.books.isLoading);

  useEffect(() => {
    isfirstRender.current = false;
  }, []);

  const isShowPagination = totalPages > 1;
  const isEmpyList = books?.length === 0;
  const spinnerSize = 60;

  return (
    <>
      <Dashboard>
        <FilterForm currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <DashboardInfo />
      </Dashboard>
      <MainSection>
        <Header>
          <Title>Recommended</Title>
          {isShowPagination && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Header>
        {isLoading ? (
          <SpinnerWrapper>
            <Spinner size={spinnerSize} />
          </SpinnerWrapper>
        ) : isEmpyList && !isfirstRender ? (
          <TextWrapper>
            <Text>No results</Text>
          </TextWrapper>
        ) : (
          <BookList
            books={books}
            setCurrentBook={setCurrentBook}
            setIsShowModal={setIsShowModal}
          />
        )}
        <HomeModal
          currentBook={currentBook}
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
        />
      </MainSection>
    </>
  );
};

export default Home;
