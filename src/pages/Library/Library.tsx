import MainSectionWrapper from '../../components/HOC/MainSection';
import Dashboard from '../../components/HOC/Dashboard';
import AddBookForm from '../../components/Forms/AddBookForm';
import LibraryInfo from '../../components/LibraryInfo';
import LibraryMainSection from '../../components/LibraryMainSection';

const Library = () => {
  return (
    <>
      <Dashboard>
        <AddBookForm />
        <LibraryInfo />
      </Dashboard>
      <MainSectionWrapper>
        <LibraryMainSection />
      </MainSectionWrapper>
    </>
  );
};

export default Library;
