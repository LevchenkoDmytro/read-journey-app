import { Wrapper } from './styled';
import svg from '../../assets/sprite.svg';

const Fallback = () => {
  return (
    <Wrapper>
      <svg>
        <use href={svg + '#icon-logo'}></use>
      </svg>
    </Wrapper>
  );
};

export default Fallback;
