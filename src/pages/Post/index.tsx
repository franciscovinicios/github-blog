import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PostInfo } from "./components/PostInfo";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import Markdown from "react-markdown";
import { Container, Content } from "./styles";

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
export function Post() {
  const [issue, setIssue] = useState<Issue>({} as Issue);

  const { number } = useParams();

  useEffect(() => {
    const getIssue = async () => {
      const response = await api.get(
        `/repos/franciscovinicios/github-blog/issues/ ${number}`
      );
      setIssue(response.data);
      console.log(response.data);
    };
    getIssue();
  }, [number]);

  return (
    <>
      <Header />
      <Container>
        <PostInfo data={issue} />
        <Content>
          <Markdown className={"style-markdown"}>{issue.body}</Markdown>
        </Content>
      </Container>
    </>
  );
}
