import styled from '@emotion/styled';
import { COLORS, SIZES } from '../../../styles/theme';

export const Form = styled.form`
  & > :not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const FormTitle = styled.legend`
  font-size: ${SIZES.FONT.SMALL};
  line-height: ${SIZES.LINE_HEIGHT.LH18};
  color: ${COLORS.WHITE};
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;
