import {
  Container,
  Content,
  Description,
  PublicationDate,
  Title,
} from "./styled";
import Markdown from "react-markdown";
import { HTMLAttributes } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

interface ItemPublicationProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  body: string;
  number: number;
  created_at: string;
}
export function ItemPublication({
  title,
  body,
  created_at,
  ...rest
}: ItemPublicationProps) {
  const formatedDate =
    created_at &&
    formatDistanceToNow(new Date(created_at), {
      locale: ptBR,
      addSuffix: true,
    });

  return (
    <Container {...rest}>
      <Content>
        <header>
          <Title>
            <Markdown>{title}</Markdown>
          </Title>

          <PublicationDate>{formatedDate}</PublicationDate>
        </header>
        <Description>
          <Markdown>{body}</Markdown>
        </Description>
      </Content>
    </Container>
  );
}
