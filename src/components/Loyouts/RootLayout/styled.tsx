import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { COLORS, SIZES } from '../../../styles/theme';

export const Container = styled.div`
  max-width: 1246px;
  margin: 0 auto;
  padding: 5px 15px;

  @media (max-width: 1200px) {
    max-width: 992px;
  }

  @media (max-width: 992px) {
    max-width: 734px;
  }
`;

export const Header = styled(AppBar)`
  position: static;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  margin-bottom: 16px;
  border-radius: 15px;
  background-color: ${COLORS.DARK_GRAY};
  box-shadow: none;

  @media (max-width: 576px) {
    position: sticky;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-size: ${SIZES.FONT.MEDIUM};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};

  &.active {
    color: ${COLORS.WHITE};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      display: block;
      width: 100%;
      height: 4px;
      border-radius: 2px;
      background-color: ${COLORS.BLUE};
    }
  }
`;

export const MainWrapper = styled.main`
  display: flex;
  gap: 16px;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const DecorationCircle = styled.div`
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 50%;
  border: 1px solid ${COLORS.LIGHT_GRAY};
  padding: 12px 18px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Letter = styled.span``;

export const UserName = styled.p`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const LogOutWrapper = styled.div`
  @media (max-width: 576px) {
    display: none;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 576px) {
    width: 28px;
    height: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

export const Line = styled.div`
  display: block;
  width: 24px;
  height: 2px;
  background-color: ${COLORS.WHITE};
  border-radius: 2px;
`;

interface MenuProps {
  open: boolean;
}

export const Menu = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-out;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100vh;
  padding-top: 34px;
  padding-bottom: 40px;
  background-color: ${COLORS.MIDDLE_GRAY};
  box-shadow:
    0px 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14),
    0px 6px 30px 5px rgba(0, 0, 0, 0.12);

  &:not(:first-of-type) {
    align-items: center;
  }
`;

export const Backdrop = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: transform 0.3s ease-out;
`;

export const CloseIcon = styled.svg`
  align-self: flex-end;
  margin-right: 40px;
  width: 28px;
  height: 28px;
`;

export const MenuLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
