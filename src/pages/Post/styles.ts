import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 54rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem;
  text-align: center;

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin: 1rem 0;
  }
  code {
    display: block;
    border-radius: 2px;
    margin: 1.5rem 0;
    padding: 1rem;
    background: ${({ theme }) => theme["base-post"]};
  }
`;
