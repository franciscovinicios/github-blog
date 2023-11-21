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
  padding: 2rem;
`;

export const Paragraph = styled.p`
  span.bold {
    font-size: 1rem;
    font-weight: 700;
  }

  a.blue-bold {
    display: block;
    margin-top: 2rem;
    color: ${({ theme }) => theme.blue};
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const Code = styled.code`
  display: block;
  border-radius: 2px;
  margin-top: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme["base-post"]};
`;
