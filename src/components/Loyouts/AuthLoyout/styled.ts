import styled from '@emotion/styled';
import { COLORS } from '../../../styles/theme';

export const FormSection = styled.div`
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  padding: 40px 64px;
  width: 600px;
  min-height: 736px;
`;

export const ImgSection = styled.div`
  background-color: ${COLORS.DARK_GRAY};
  border-radius: 30px;
  width: 600px;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  min-height: 736px;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 95px;
  svg {
    height: 40px;
  }
`;

export const Img = styled.img``;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 60px;
  max-width: 444px;
  margin-bottom: 40px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Container = styled.div`
  max-width: 1246px;
  margin: 0 auto;
  padding: 15px;
`;

export const Span = styled.span`
  color: ${COLORS.LIGHT_GRAY};
`;
