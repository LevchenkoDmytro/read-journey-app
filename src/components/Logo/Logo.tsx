import { LogoWrapper, LogoText, LogoIcon } from './styled';

import svg from '../../assets/sprite.svg';

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon>
        <use href={svg + '#icon-logo'}></use>
      </LogoIcon>
      <LogoText>read journey</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
