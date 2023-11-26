import { NavLink } from "react-router-dom";
import {
  Container,
  Content,
  Description,
  PublicationDate,
  Title,
} from "./styled";

interface ItemPublicationProps {
  title: string;
  body: string;
}
export function ItemPublication({ title, body }: ItemPublicationProps) {
  return (
    <Container>
      <NavLink to={"/post"}>
        <Content>
          <header>
            <Title>{title}</Title>

            <PublicationDate>ha 1 dia</PublicationDate>
          </header>
          <Description>{body}</Description>
        </Content>
      </NavLink>
    </Container>
  );
}
