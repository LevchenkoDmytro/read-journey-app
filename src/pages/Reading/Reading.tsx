import Dashboard from '../../components/HOC/Dashboard';
import AddReading from '../../components/AddReading';
import MainSectionWrapper from '../../components/HOC/MainSection';
import ReadingMainSection from '../../components/ReadingMainSection/ReadingMainSection';
import Details from '../../components/Details';

const Reading = () => {
  return (
    <>
      <Dashboard>
        <AddReading />
        <Details />
      </Dashboard>
      <MainSectionWrapper>
        <ReadingMainSection />
      </MainSectionWrapper>
    </>
  );
};

export default Reading;
