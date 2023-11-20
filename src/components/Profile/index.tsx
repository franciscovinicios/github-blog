import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import {
  DescriptionProfile,
  GithubProfile,
  ImageProfileContent,
  Infos,
  ProfileContainer,
  SocialTitle,
  Subtitle,
  Title,
} from "./styles";
import { ItemInfo } from "../ItemInfo";

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
          <ItemInfo title={user} icon={faGithub} />
          <ItemInfo title={company} icon={faBuilding} />

          <ItemInfo title={`seguidores ${followers}`} icon={faUserGroup} />
        </Infos>
      </DescriptionProfile>
    </ProfileContainer>
  );
}
