import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme["base-profile"]};
  width: 54rem;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div``;

export const Option = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${({ theme }) => theme["blue"]};
  }

  svg {
    color: ${({ theme }) => theme["blue"]};
  }
`;

export const Title = styled.h4`
  margin-top: 1.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.95rem;
`;

export const Details = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 2rem;
`;
