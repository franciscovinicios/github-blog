import HeaderCoverImg from "../../assets/cover.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={HeaderCoverImg} alt="cover" />
    </HeaderContainer>
  );
}
