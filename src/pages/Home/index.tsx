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
import { useNavigate } from "react-router-dom";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface Issues {
  title: string;
  body: string;
  number: number;
  created_at: string;
}

export function Home() {
  const navigate = useNavigate();
  const [issues, setIssues] = useState<Issues[]>([]);

  const handleDetails = (id: string) => {
    navigate(`/details/${id}`);
  };

  const { register, handleSubmit } = useForm<SearchFormInputs>({});

  async function fetchAllIssues(query?: string) {
    const queryParams = query
      ? { q: `repo:franciscovinicios/github-blog ${query}` }
      : { q: `repo:franciscovinicios/github-blog` };

    const response = await api.get(`search/issues`, {
      params: queryParams,
    });

    setIssues(response.data.items);
  }

  async function handleSearchIssues(data: SearchFormInputs) {
    fetchAllIssues(data.query);
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
            <NumberPublications>
              {issues.length} publications
            </NumberPublications>
          </Details>
          <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <InputStyled placeholder="Search content" {...register("query")} />
          </SearchFormContainer>

          <PublicationsContent>
            {issues.map((issue) => (
              <ItemPublication
                created_at={issue.created_at}
                key={issue.title}
                title={issue.title}
                body={issue.body}
                number={issue.number}
                onClick={() => handleDetails(String(issue.number))}
              />
            ))}
          </PublicationsContent>
        </Publications>
      </Container>
    </>
  );
}
