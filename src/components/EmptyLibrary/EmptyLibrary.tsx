import { FC } from 'react';
import { Wrapper, Icon, CircleOverlay, Text } from './styled';


const EmptyLibrary: FC = () => {
  return (
    <Wrapper>
      <CircleOverlay>
        <Icon>
          📚
        </Icon>
      </CircleOverlay>
      <Text >
        To start training, add some of your books or from the recommended ones
      </Text>
    </Wrapper>
  );
};

export default EmptyLibrary;