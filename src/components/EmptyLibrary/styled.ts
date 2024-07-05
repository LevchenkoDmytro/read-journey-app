import styled from '@emotion/styled';
import { COLORS } from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: 20px;
  width: 274px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 133px;
`;


export const Icon = styled.p`
  font-size: 70px;
`;

export const CircleOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 130px;
  background-color: ${COLORS.MIDDLE_GRAY};
  border-radius: 50%;
`;

export const Text = styled.p`
  color: ${COLORS.WHITE};
`;
