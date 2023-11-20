import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  DescriptionProfile,
  GithubProfile,
  ImageProfileContent,
  Infos,
  ItemInfo,
  ProfileContainer,
  SocialTitle,
  Subtitle,
  Title,
  TitleInfo,
} from "./styles";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface ProfileProps {
  name: string;
  link?: string;
  description: string;
  user: string;
  company: string;
  followers: number;
}

export function Profile({
  name,
  description,
  user,
  company,
  followers,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <ImageProfileContent>
        <img
          src="https://avatars.githubusercontent.com/u/35700027?s=200&v=4"
          alt=""
        />
      </ImageProfileContent>

      <DescriptionProfile>
        <header>
          <Title>{name}</Title>

          <GithubProfile>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} />
            <SocialTitle>github</SocialTitle>
          </GithubProfile>
        </header>

        <Subtitle>{description}</Subtitle>

        <Infos>
          <ItemInfo>
            <FontAwesomeIcon icon={faGithub} width={18} />
            <TitleInfo>{user}</TitleInfo>
          </ItemInfo>
          <ItemInfo>
            <FontAwesomeIcon icon={faBuilding} width={18} />
            <TitleInfo>{company}</TitleInfo>
          </ItemInfo>
          <ItemInfo>
            <FontAwesomeIcon icon={faUserGroup} width={18} />
            <TitleInfo>{followers} seguidores</TitleInfo>
          </ItemInfo>
        </Infos>
      </DescriptionProfile>
    </ProfileContainer>
  );
}
