import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 20px;
  row-gap: 27px;

  @media (max-width: 1200px) {
    column-gap: 5px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 992px) {
    column-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
  }

  @media (max-width: 768px) {
    column-gap: 10px;
    row-gap: 15px;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
