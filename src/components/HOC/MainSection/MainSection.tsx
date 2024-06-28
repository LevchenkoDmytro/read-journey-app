import { FC } from 'react';
import { Wrapper } from './styled';

interface IMainSection {
  children: React.ReactNode;
}

const MainSection: FC<IMainSection> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainSection;
