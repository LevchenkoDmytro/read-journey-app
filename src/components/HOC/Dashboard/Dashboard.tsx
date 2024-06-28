import { FC, ReactNode } from 'react';
import { Wrapper } from './styled';

interface DashboardProps {
  children: ReactNode;
}

const Dashboard: FC<DashboardProps> = ({ children }) => {
  return (<Wrapper>{children}</Wrapper>);
};

export default Dashboard;
