import img from '../../assets/iPhone.webp';
import Logo from '../../components/Logo';
import { Navigate, Outlet } from 'react-router-dom';
import {
  Container,
  FormSection,
  Img,
  ImgSection,
  LogoWrapper,
  Span,
  Title,
  Wrapper,
} from './styled';
import { useAppSelector } from '../../hooks/reduxHooks';

const AuthLoyout = () => {
  const isLogin = useAppSelector(state => state.auth.isLogin);

  return isLogin ? (
    <Navigate to={'/'} />
  ) : (
    <Container>
      <Wrapper>
        <FormSection>
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
          <Title>
            Expand your mind, reading <Span>a book</Span>
          </Title>
          <Outlet />
        </FormSection>
        <ImgSection>
          <Img src={img} alt="IPhone" />
        </ImgSection>
      </Wrapper>
    </Container>
  );
};

export default AuthLoyout;
