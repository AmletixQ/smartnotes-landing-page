import { FC } from "react";
import "./Testimonial.scss";

interface Props {
  summary: string;
  fullname: string;
  position: string;
}

const Testimonial: FC<Props> = ({ fullname, position, summary }) => {
  return (
    <section className="testimonial">
      <div className="content">
        <div className="text">
          <h5>{summary}</h5>
        </div>
        <div className="info">
          <p>{fullname}</p>
          <p className="position">{position}</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
