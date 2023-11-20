import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Details, Option, Title } from "./styles";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { ItemInfo } from "../../../../components/ItemInfo";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

export function PostInfo() {
  return (
    <Container>
      <header>
        <Option>
          <FontAwesomeIcon icon={faChevronLeft} width={12} />
          <span>Voltar</span>
        </Option>
        <Option>
          <span>Ver no github</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} />
        </Option>
      </header>

      <Title>JavaScript data types and data structures</Title>
      <Details>
        <ItemInfo title="vinicios" icon={faGithub} />
        <ItemInfo title="ha 1 dia" icon={faCalendarDay} />
        <ItemInfo title="5 comentários" icon={faComment} />
      </Details>
    </Container>
  );
}
