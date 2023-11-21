import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 26rem;
  max-height: 16.25rem;
  flex-direction: column;
  border-radius: 10px;
  background: ${({ theme }) => theme["base-post"]};

  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["base-text"]};
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const Title = styled.span`
  max-width: 14.875rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 2rem;
`;

export const PublicationDate = styled.span`
  font-size: 0.875rem;
  line-height: 1.4rem;
`;

export const Description = styled.p`
  margin-top: 1.25rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;
`;
