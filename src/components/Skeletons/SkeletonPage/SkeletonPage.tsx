import { Wrapper } from './styled';
import DashboardSkeleton from '../DashboardSkeleton';
import MainSectionSkeleton from '../MainSectionSkeleton/MainSectionSkeleton';

const SkeletonPage = () => {
  return (
    <Wrapper>
      <DashboardSkeleton />
      <MainSectionSkeleton />
    </Wrapper>
  );
};

export default SkeletonPage;
