import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Profile } from "./components/Profile";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile
        company="Rocktseat"
        description="Tristique volutpat pulvinar vel massa, pell
        entesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nun
        , volutpat pulvinar vel mass."
        followers={34}
        name="Vinicios"
        user="viniciosdev"
      />
    </ThemeProvider>
  );
}
