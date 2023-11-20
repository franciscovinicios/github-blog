import { Header } from "../../components/Header";
import { PostInfo } from "./components/PostInfo";
import { Container } from "./styles";

export function Post() {
  return (
    <>
      <Header />
      <Container>
        <PostInfo />
      </Container>
    </>
  );
}
