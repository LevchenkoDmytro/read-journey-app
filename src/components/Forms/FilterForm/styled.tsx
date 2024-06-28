import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../../styles/theme';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FormTitle = styled.legend`
  margin-bottom: 8px;
  font-size: ${SIZES.FONT.SMALL};
  font-weight: ${SIZES.WEIGHT.W500};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.WHITE};
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;
