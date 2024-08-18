import { useState } from 'react';
import {
  Wrapper,
  Circle,
  Icon,
  HeaderTitle,
  Title,
  IconWrapper,
  Header,
  Navigation,
  DiaryTabIcon,
  StatisticsTabIcon,
  Text,
  Placeholder,
  SpinnerWrapper,
} from './styled';
import Statistics from '../Statistics';
import Diary from '../Diary';
import { CircularProgress as Spinner } from '@mui/material';
import { useAppSelector } from '../../hooks/reduxHooks';
import svg from '../../assets/sprite.svg';

const Details = () => {
  const [activeTab, setAtiveTab] = useState<string>('Diary');
  const readingProgress = useAppSelector(
    state => state.books.bookInfo?.progress,
  );
  const isLoading = useAppSelector(state => state.books.isLoading);

  const handleTabClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const section = e.currentTarget.id;
    setAtiveTab(section);
  };

  return !isLoading ? (
    readingProgress?.length ? (
      <Wrapper>
        <Header>
          <HeaderTitle>{activeTab}</HeaderTitle>
          <Navigation>
            <DiaryTabIcon
              className={activeTab === 'Diary' ? 'active' : ''}
              onClick={handleTabClick}
              id={'Diary'}
            >
              <use href={svg + '#icon-hourglass'}></use>
            </DiaryTabIcon>
            <StatisticsTabIcon
              className={activeTab === 'Statistics' ? 'active' : ''}
              onClick={handleTabClick}
              id={'Statistics'}
            >
              <use href={svg + '#icon-pie-chart'}></use>
            </StatisticsTabIcon>
          </Navigation>
        </Header>
        {activeTab === 'Statistics' && <Statistics />}
        {activeTab === 'Diary' && <Diary />}
      </Wrapper>
    ) : (
      <Placeholder>
        <Title>Progress</Title>
        <Text>
          Here you will see when and how much you read. To record, click on the
          red button above.
        </Text>
        <IconWrapper>
          <Circle>
            <Icon>🌟</Icon>
          </Circle>
        </IconWrapper>
      </Placeholder>
    )
  ) : (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
};

export default Details;
