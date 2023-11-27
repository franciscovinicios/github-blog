import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Details, Option, Title } from "./styles";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { ItemInfo } from "../../../../components/ItemInfo";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface Issue {
  title: string;
  body: string;
  number: number;
  html_url: string;
  comments: number;
  created_at: string;
  user: {
    login: string;
  };
}
interface PostInfoProps {
  data: Issue;
}

export function PostInfo({ data }: PostInfoProps) {
  const formatedDate =
    data.created_at &&
    formatDistanceToNow(new Date(data.created_at), {
      locale: ptBR,
      addSuffix: true,
    });

  return (
    <Container>
      <header>
        <NavLink to={"/"} title="voltar">
          <Option>
            <FontAwesomeIcon icon={faChevronLeft} width={12} />
            <span>Voltar</span>
          </Option>
        </NavLink>
        <NavLink to={data.html_url}>
          <Option>
            <span>Ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} />
          </Option>
        </NavLink>
      </header>

      <Title>{data.title}</Title>
      <Details>
        <ItemInfo title={data.user?.login} icon={faGithub} />
        <ItemInfo title={formatedDate} icon={faCalendarDay} />
        <ItemInfo title={String(data.comments)} icon={faComment} />
      </Details>
    </Container>
  );
}
