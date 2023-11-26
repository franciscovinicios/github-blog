import { useForm } from "react-hook-form";
import * as z from "zod";
import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import { ItemPublication } from "./components/ItemPublication";
import {
  Container,
  Details,
  InputStyled,
  NumberPublications,
  Publications,
  PublicationsContent,
  SearchFormContainer,
  TextSection,
} from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface Issues {
  title: string;
  body: string;
  number: number;
}

export function Home() {
  const [issues, setIssues] = useState<Issues[]>([]);

  const { register, handleSubmit } = useForm<SearchFormInputs>({});

  async function fetchAllIssues() {
    const response = await api.get(`search/issues`, {
      params: {
        q: `repo:franciscovinicios/github-blog`,
      },
    });

    setIssues(response.data.items);
  }

  async function handleSearchIssues(data: SearchFormInputs) {
    const response = await api.get(`search/issues`, {
      params: {
        q: `repo:franciscovinicios/github-blog ${data.query}`,
      },
    });

    setIssues(response.data.items);
    console.log(response.data);
  }

  useEffect(() => {
    fetchAllIssues();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Profile />

        <Publications>
          <Details>
            <TextSection>Publications</TextSection>
            <NumberPublications>1 publications</NumberPublications>
          </Details>
          <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <InputStyled placeholder="Search content" {...register("query")} />
          </SearchFormContainer>

          <PublicationsContent>
            {issues.map((issue) => (
              <ItemPublication
                key={issue.title}
                title={issue.title}
                body={issue.body}
                number={issue.number}
              />
            ))}
          </PublicationsContent>
        </Publications>
      </Container>
    </>
  );
}
