import {
  Wrapper,
  Instructions,
  ArrowRight,
  Circle,
  Icon,
  InfoBlock,
  InfoWrapper,
  QuoteBlock,
  StyledLink,
  Title,
  Highlight,
  Text,
  Quote
} from './styled';

import svg from '../../assets/sprite.svg';

const DashboardInfo = () => (
  <Wrapper>
    <InfoBlock>
      <Title>Start your workout</Title>
      <Instructions>
        <InfoWrapper>
          <Circle>1</Circle>
          <Text>Create a personal library: <Highlight>add the books you intend to read to it.</Highlight></Text>
        </InfoWrapper>
        <InfoWrapper>
          <Circle>2</Circle>
          <Text> Create your first workout: <Highlight>define a goal, choose a period, start training.</Highlight>
          </Text>
        </InfoWrapper>
      </Instructions>

      <StyledLink to={'./library'}>
        My library
        <ArrowRight>
          <use href={svg + '#icon-arrowRight'}></use>
        </ArrowRight>
      </StyledLink>
    </InfoBlock>

    <QuoteBlock>
      <Icon>📚</Icon>
      <Quote>
        Books are windows to the world, and reading is a journey into the
        unknown.
      </Quote>
    </QuoteBlock>
  </Wrapper>
);

export default DashboardInfo;
