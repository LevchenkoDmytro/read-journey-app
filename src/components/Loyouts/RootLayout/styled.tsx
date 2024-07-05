import styled from '@emotion/styled';
import { AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { COLORS, SIZES } from '../../../styles/theme';

export const Container = styled.div`
  max-width: 1246px;
  margin: 0 auto;
  padding: 5px 15px;
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
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;
  font-size: ${SIZES.FONT.MEDIUM};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  font-weight: ${SIZES.WEIGHT.W500};
  color: ${COLORS.LIGHT_GRAY};
`;

export const StyledNavLink = styled(NavLink)`
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
`;

export const Letter = styled.span``;

export const UserName = styled.p``;

export const LogOutWrapper = styled.div``;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
