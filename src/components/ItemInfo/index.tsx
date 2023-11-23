import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ItemInfoContainer, TitleInfo } from "./styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface ItemInfoProps {
  title?: string;
  icon: IconProp;
}
export function ItemInfo({ title, icon }: ItemInfoProps) {
  return (
    <ItemInfoContainer>
      <FontAwesomeIcon icon={icon} width={18} />
      <TitleInfo>{title}</TitleInfo>
    </ItemInfoContainer>
  );
}
