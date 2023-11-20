import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 54rem;
  padding-bottom: 5rem;
`;

export const Publications = styled.section`
  margin-top: 4.5rem;
`;

export const InputStyled = styled.input`
  margin-top: 0.75rem;
  width: 100%;
  background: ${({ theme }) => theme["base-input"]};
  border: none;
  border: 1px solid ${({ theme }) => theme["base-border"]};
  border-radius: 6px;
  padding: 0.75rem 1rem;

  &::placeholder {
    color: ${({ theme }) => theme["base-label"]};
  }
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TextSection = styled.span`
  color: ${({ theme }) => theme["base-subtitle"]};
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.8rem;
`;

export const NumberPublications = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme["base-span"]};
`;

export const PublicationsContent = styled.div`
  margin-top: 3rem;
  grid-gap: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
