import { Link } from "components/sections/Footer/Footer";
import { FC } from "react";
import "./LinkContainer.scss";

interface Props {
  title: string;
  links: Link[];
}

const LinkContainer: FC<Props> = ({ title, links }) => {
  return (
    <div className="container">
      <h6>{title}</h6>
      <div className="link-container">
        {links.map(({ name, link }) => (
          <a key={name + link} href={link}>
            {name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinkContainer;
