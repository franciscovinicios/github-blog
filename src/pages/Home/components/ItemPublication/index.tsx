import { NavLink } from "react-router-dom";
import {
  Container,
  Content,
  Description,
  PublicationDate,
  Title,
} from "./styled";
import Markdown from "react-markdown";

interface ItemPublicationProps {
  title: string;
  body: string;
  number: number;
}
export function ItemPublication({ title, body }: ItemPublicationProps) {
  return (
    <Container>
      <NavLink to={"/post"}>
        <Content>
          <header>
            <Title>
              <Markdown>{title}</Markdown>
            </Title>

            <PublicationDate>ha 1 dia</PublicationDate>
          </header>
          <Description>
            <Markdown>{body}</Markdown>
          </Description>
        </Content>
      </NavLink>
    </Container>
  );
}
