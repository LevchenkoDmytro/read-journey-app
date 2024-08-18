import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';

export const Pages = styled.p`
  margin-left: auto;
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.LIGHT_GRAY};
`;

export const Header = styled.div`
  display: flex;
  justifycontent: space-between;
  column-gap: 10px;
  position: relative;
`;

export const Wrapper = styled.div`
  &:last-child .session {
    margin-bottom: 0px;
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

export const DairyWrapper = styled.div`
  flex: 1;
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 12px;
  padding-left: 20px;
  padding-right: 40px;
  padding-bottom: 28px;
  padding-top: 20px;
  overflow-y: auto;
  position: relative;
  max-height: 373px;

  @media (max-width: 992px) {
    padding-top: 16px;
  }

  @media (max-width: 768px) {
    max-height: 240px;
  }

  @media (max-width: 576px) {
    max-height: 268px;
  }
`;

export const Marker = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${COLORS.DARK_GRAY};
  border: 4px solid ${COLORS.LIGHT_GRAY};
  border-radius: 2px;
  position: relative;
  &.first {
    border-color: ${COLORS.WHITE};
  }
`;

export const Time = styled.time`
  font-size: ${SIZES.FONT.MEDIUM};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;
