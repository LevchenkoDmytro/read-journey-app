import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { logoutUserThunk } from '../../redux/auth/thunk';
// import { userInfoThunk } from '../../redux/authSlice';

import {
  NavBar,
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
import StyledButton from '../../components/ui/StyledButton';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router-dom';

const RootLayout = () => {
  const { pathname } = useLocation();
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
          <NavBar>
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
          </NavBar>
          <MainWrapper>
            <Suspense fallback={<div>isLoad</div>}>
              <Outlet />
            </Suspense>
          </MainWrapper>
        </Container>
      )}
    </>
  );
};

export default RootLayout;
