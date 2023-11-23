import { useForm } from "react-hook-form";
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

export function Home() {
  const { register } = useForm({});

  return (
    <>
      <Header />
      <Container>
        <Profile
          company="Rocketseat"
          description="Tristique volutpat pulvinar vel massa, pell
        entesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nun
        , volutpat pulvinar vel mass."
          followers={34}
          name="Vinicios"
          user="viniciosdev"
        />

        <Publications>
          <Details>
            <TextSection>Publications</TextSection>
            <NumberPublications>1 publications</NumberPublications>
          </Details>
          <SearchFormContainer>
            <InputStyled placeholder="Search content" {...register("query")} />
          </SearchFormContainer>

          <PublicationsContent>
            <ItemPublication />
            <ItemPublication />
            <ItemPublication />
            <ItemPublication />
          </PublicationsContent>
        </Publications>
      </Container>
    </>
  );
}
