import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 576px) {
    width: 250px;
  }
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${COLORS.MIDDLE_GRAY};
`;

export const Icon = styled.span`
  font-size: 50px;
`;

export const Title = styled.h3`
  margin-bottom: 14px;
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};
`;

export const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const StyledLink = styled(NavLink)``;

export const NavigationIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: ${COLORS.LIGHT_GRAY};
  cursor: pointer;
  &.active {
    stroke: ${COLORS.WHITE};
  }
`;

export const DiaryTabIcon = styled(NavigationIcon)``;
export const StatisticsTabIcon = styled(NavigationIcon)``;

export const HeaderTitle = styled.h3`
  line-height: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 992px) {
    margin-bottom: 16px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  gap: 8px;
`;

export const Text = styled.p`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.LIGHT_GRAY};
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 576px) {
    max-width: 356px;
  }
`;

export const Main = styled.div``;

export const SpinnerWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
