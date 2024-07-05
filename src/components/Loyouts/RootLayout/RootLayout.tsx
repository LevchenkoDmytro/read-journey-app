import { Navigate, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { logoutUserThunk } from '../../../redux/auth/thunk';

import {
  Header,
  LinkWrapper,
  StyledNavLink,
  MainWrapper,
  Container,
  UserInfo,
  DecorationCircle,
  Letter,
  UserName,
  LogOutWrapper,
  UserWrapper,
} from './styled';
import StyledButton from '../../StyledButton';
import Logo from '../../Logo';
import { useNavigate } from 'react-router-dom';

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useAppSelector(state => state.auth.name);
  const isLogin = useAppSelector(state => state.auth.isLogin);

  const heandlerLogout = () => {
    dispatch(logoutUserThunk())
      .unwrap()
      .then(() => {
        navigate('/sign-in');
      });
  };

  return (
    <>
      {!isLogin ? (
        <Navigate to={'/sign-in'} />
      ) : (
        <Container>
          <Header>
            <Logo />
            <LinkWrapper>
              <StyledNavLink to={'/'}>Home</StyledNavLink>
              <StyledNavLink to={'/library'}>Library</StyledNavLink>
            </LinkWrapper>
            <UserWrapper>
              <UserInfo>
                <DecorationCircle>
                  <Letter>{name[0]}</Letter>
                </DecorationCircle>
                <UserName>{name}</UserName>
              </UserInfo>
              <LogOutWrapper>
                <StyledButton onClick={heandlerLogout}>Log out</StyledButton>
              </LogOutWrapper>
            </UserWrapper>
          </Header>
          <MainWrapper>
            <Suspense fallback={<>loading</>}>
              <Outlet />
            </Suspense>
          </MainWrapper>
        </Container>
      )}
    </>
  );
};

export default RootLayout;
