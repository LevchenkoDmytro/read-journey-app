import { useState } from 'react';
import Dashboard from '../../components/HOC/Dashboard';
import DashboardInfo from '../../components/DashboardInfo';
import FilterForm from '../../components/Forms/FilterForm';
import MainSectionWrapper from '../../components/HOC/MainSection';
import HeaderMainSection from '../../components/HeaderMainSection';
import HomeContent from '../../components/HomeContent/HomeContent';

const Home = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  return (
    <>
      <Dashboard>
        <FilterForm currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <DashboardInfo />
      </Dashboard>
      <MainSectionWrapper>
        <HeaderMainSection
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <HomeContent />
      </MainSectionWrapper>
    </>
  );
};

export default Home;
