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
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../lib/axios";

interface User {
  name: string;
  login: string;
  followers: string;
  avatar_url: string;
  bio: string;
  company: string;
  html_url: string;
}

export function Profile() {
  const [user, setUser] = useState({} as User);

  async function getUser() {
    const { data } = await api.get<User>("/users/franciscovinicios");
    setUser({
      name: data.name,
      login: data.login,
      bio: data.bio,
      html_url: data.html_url,
      avatar_url: data.avatar_url,
      company: data.company,
      followers: data.followers,
    });
  }

  useEffect(() => {
    getUser();
  }, []);
  return (
    <ProfileContainer>
      <ImageProfileContent>
        <img src={user.avatar_url} alt="" />
      </ImageProfileContent>

      <DescriptionProfile>
        <header>
          <Title>{user.name}</Title>

          <NavLink to={user.html_url}>
            <GithubProfile>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} />
              <SocialTitle>github</SocialTitle>
            </GithubProfile>
          </NavLink>
        </header>

        <Subtitle>{user.bio}</Subtitle>

        <Infos>
          <ItemInfo title={user.login} icon={faGithub} />
          <ItemInfo
            title={user.company ? user.company : "Student"}
            icon={faBuilding}
          />

          <ItemInfo title={`seguidores ${user.followers}`} icon={faUserGroup} />
        </Infos>
      </DescriptionProfile>
    </ProfileContainer>
  );
}
