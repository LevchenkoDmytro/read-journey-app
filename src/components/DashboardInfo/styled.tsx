import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../styles/theme';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div``;

export const InfoBlock = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};
`;

export const Title = styled.h3`
  font-size: ${SIZES.FONT.BIG};
  line-height: ${SIZES.LINE_HEIGHT.LH20};
  margin-bottom: 40px;
`;

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Text = styled.p`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
`;

export const Circle = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: ${COLORS.BLACK};
  font-size: ${SIZES.FONT.BIG};
  background-color: ${COLORS.WHITE};
`;

export const Highlight = styled.span`
  color: ${COLORS.LIGHT_GRAY};
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${SIZES.FONT.SMALL};
  text-decoration: underline;
  margin-top: 20px;
`;

export const QuoteBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 12px;
  background-color: ${COLORS.MIDDLE_GRAY};
  margin-top: 12px;
  padding: 15px 20px 14px;
`;

export const Icon = styled.p`
  font-size: 40px;
`;

export const ArrowRight = styled.svg`
  width: 24px;
  height: 24px;
`;

export const Quote = styled.blockquote`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.LIGHT_GRAY};
`;
