import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  margin-top: -6rem;
  display: flex;
  gap: 2rem;
  border-radius: 10px;
  padding: 2.5rem 2rem 2rem 2.5rem;

  background: ${({ theme }) => theme["base-profile"]};
`;

export const ImageProfileContent = styled.div`
  img {
    border-radius: 8px;
    width: 9.25rem;
    height: 9.25rem;
  }
`;

export const DescriptionProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.95rem;
`;

export const GithubProfile = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${({ theme }) => theme.blue};
  }
`;

export const SocialTitle = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 1.2rem;
  color: ${({ theme }) => theme.blue};
  text-transform: uppercase;
`;

export const Subtitle = styled.span`
  margin-top: 0.5rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme["base-text"]};
`;

export const Infos = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1.5rem;
`;
