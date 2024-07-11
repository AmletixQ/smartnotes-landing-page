import { FC } from "react";
import "./Card.scss";

export interface CardProps {
  icon: string;
  title: string;
  details: string;
}
const Card: FC<CardProps> = ({ icon, title, details }) => {
  return (
    <div className="card-container">
      <img src={icon} alt={icon} />
      <div className="info">
        <h5>{title}</h5>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Card;
