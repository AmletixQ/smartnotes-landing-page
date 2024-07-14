import { FC } from "react";
import { Links } from "components/sections/Footer/Footer";
import LinkContainer from "./LinkContainer/LinkContainer";
import "./LinkContainers.scss";

interface Props {
  list: Links[];
}

const LinkContainers: FC<Props> = ({ list }) => {
  return (
    <div className="link-containers">
      {list.map((container, idx) => (
        <LinkContainer {...container} key={idx} />
      ))}
    </div>
  );
};

export default LinkContainers;
