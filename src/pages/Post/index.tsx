import { Header } from "../../components/Header";
import { PostInfo } from "./components/PostInfo";
import { Code, Container, Content, Paragraph } from "./styles";

export function Post() {
  return (
    <>
      <Header />
      <Container>
        <PostInfo />
        <Content>
          <Paragraph>
            <span className="bold">
              {" "}
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </span>{" "}
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </Paragraph>
          <Paragraph>
            <a href="" className="blue-bold">
              Dynamic typing
            </a>{" "}
          </Paragraph>
          <Paragraph>
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </Paragraph>

          <Code>
            let foo = 42; // foo is now a number <br />
            foo = ‘bar’; // foo is now a string <br />
            foo = true; // foo is now a boolean
          </Code>
        </Content>
      </Container>
    </>
  );
}
