import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;
