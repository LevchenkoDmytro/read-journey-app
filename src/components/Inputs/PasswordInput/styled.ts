import styled from '@emotion/styled';

export const IconWrapper = styled.div`
  width: 66px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  position: relative;
`;

const PasswordIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const EyeIcon = styled(PasswordIcon)``;

export const EyeOffIcon = styled(PasswordIcon)``;
