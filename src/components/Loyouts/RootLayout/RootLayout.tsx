import { Navigate, Outlet } from 'react-router-dom';
import { useState, Suspense, useEffect } from 'react';
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
  BurgerMenu,
  Line,
  Menu,
  CloseIcon,
  MenuLinkWrapper,
  Backdrop,
} from './styled';
import svg from '../../../assets/sprite.svg';
import StyledButton from '../../StyledButton';
import SkeletonPage from '../../Skeletons/SkeletonPage/SkeletonPage';
import Logo from '../../Logo';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const RootLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const name = useAppSelector(state => state.auth.name);
  const isLogin = useAppSelector(state => state.auth.isLogin);
  const [open, setOpen] = useState(false);

  const handlerLogout = () => {
    dispatch(logoutUserThunk())
      .unwrap()
      .then(() => {
        navigate('/sign-in');
      });
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {!isLogin ? (
        <Navigate to={'/sign-in'} />
      ) : (
        <Container>
          <Header>
            <Link to={'/'}>
              <Logo />
            </Link>
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
                <StyledButton onClick={handlerLogout}>Log out</StyledButton>
              </LogOutWrapper>
            </UserWrapper>
            <BurgerMenu onClick={() => setOpen(true)}>
              <Line />
              <Line />
              <Line />
            </BurgerMenu>
            <Backdrop open={open} onClick={() => setOpen(false)} />
            <Menu open={open}>
              <CloseIcon onClick={() => setOpen(false)}>
                <use href={svg + '#icon-close'}></use>
              </CloseIcon>
              <MenuLinkWrapper>
                <StyledNavLink onClick={() => setOpen(false)} to={'/'}>
                  Home
                </StyledNavLink>
                <StyledNavLink onClick={() => setOpen(false)} to={'/library'}>
                  Library
                </StyledNavLink>
              </MenuLinkWrapper>
              <StyledButton onClick={handlerLogout}>Log out</StyledButton>
            </Menu>
          </Header>
          <MainWrapper>
            <Suspense fallback={<SkeletonPage />}>
              <Outlet />
            </Suspense>
          </MainWrapper>
        </Container>
      )}
    </>
  );
};

export default RootLayout;
